# Télécharge la page d'accueil de chaque fournisseur et les images dont l'adresse contient "logo".
import re, sys, urllib.request, urllib.parse, os
UA = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'}
def get(u):
    return urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=30).read()
os.makedirs('photos/logos', exist_ok=True)
for line in open('photos/logos.txt'):
    if not line.strip(): continue
    name, home = line.split()
    try:
        html = get(home).decode('utf-8', 'replace')
    except Exception as e:
        print('ECHEC page', name, e); continue
    open(f'photos/logos/{name}.html', 'w').write(html)
    cands = set()
    for m in re.finditer(r'(?:src|href|content|srcset|data-src)\s*=\s*["\']([^"\' ]+)', html):
        u = m.group(1)
        if 'logo' in u.lower() or 'apple-touch' in u.lower():
            cands.add(urllib.parse.urljoin(home, u.replace('&amp;', '&')))
    for i, u in enumerate(sorted(cands)[:15]):
        ext = os.path.splitext(urllib.parse.urlparse(u).path)[1][:5] or '.img'
        try:
            data = get(u)
            open(f'photos/logos/{name}-{i}{ext}', 'wb').write(data)
            print('ok', name, i, u, len(data))
        except Exception as e:
            print('ECHEC', name, u, e)
