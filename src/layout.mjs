// Gabarit commun : <head>, en-tête, menu, pied de page.
import { site } from './site.mjs';
import { services } from './services.mjs';
import { photos } from './photos.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Liens : en production, adresses propres (/contact/) ; dans l'aperçu, liens relatifs vers index.html.
export function makeCtx(path, preview) {
  const depth = path ? path.split('/').filter(Boolean).length : 0;
  const prefix = depth ? '../'.repeat(depth) : '';
  return {
    path,
    preview,
    url(p = '') {
      const [base, hash] = p.split('#');
      const h = hash ? '#' + hash : '';
      if (!preview) return '/' + base + h;
      return prefix + (base || '') + 'index.html' + h;
    },
    asset(p) {
      return preview ? prefix + 'assets/' + p : '/assets/' + p;
    },
  };
}

const stripe = '<i class="b"></i><i class="m"></i><i class="v"></i><i class="j"></i>';
export const stripeFull = `<div class="stripe-full" aria-hidden="true"><i style="background:var(--bleu)"></i><i style="background:var(--magenta)"></i><i style="background:var(--vert)"></i><i style="background:var(--jaune)"></i></div>`;
export const stripeSmall = `<div class="stripe" aria-hidden="true">${stripe}</div>`;

// Photo d'illustration (src/photos.mjs). Sans photo disponible : emplacement gris avec la description.
export function photo(ctx, key, alt, cls = '', { eager = false, sizes = '(max-width: 820px) 100vw, 50vw' } = {}) {
  const d = key && photos[key];
  if (!d) return `<div class="ph ${cls}" role="img" aria-label="${esc(alt)}"><span>Photo : ${esc(alt)}</span></div>`;
  const src = ctx.asset(`img/photos/${key}.webp`);
  const src800 = ctx.asset(`img/photos/${key}-800.webp`);
  return `<div class="ph has-img ${cls}"><img src="${src800}" srcset="${src800} 800w, ${src} 1600w" sizes="${sizes}" width="${d[0]}" height="${d[1]}" alt="${esc(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></div>`;
}

export const telLink = (cls = '') =>
  `<a class="${cls}" href="tel:${site.telephoneIntl}">${site.telephone}</a>`;

export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'HVACBusiness'],
    '@id': site.url + '/#entreprise',
    name: site.nom,
    url: site.url + '/',
    logo: site.url + '/assets/img/logo-mls-travaux.png',
    image: site.url + '/assets/img/logo-mls-travaux.png',
    description: site.presentation,
    telephone: site.telephoneIntl,
    email: site.email,
    founder: { '@type': 'Person', name: site.dirigeant },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.adresse.rue,
      postalCode: site.adresse.cp,
      addressLocality: site.adresse.ville,
      addressRegion: 'Auvergne-Rhône-Alpes',
      addressCountry: site.adresse.pays,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      ...site.communes.map((c) => ({ '@type': 'City', name: c })),
      { '@type': 'AdministrativeArea', name: 'Beaujolais' },
      { '@type': 'AdministrativeArea', name: 'Val de Saône' },
      { '@type': 'AdministrativeArea', name: 'Rhône' },
      { '@type': 'AdministrativeArea', name: 'Ain' },
    ],
    vatID: site.tva,
    priceRange: 'Devis gratuit',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nom, url: `${site.url}/${s.slug}/` },
      })),
    },
  };
}

function header(ctx, current) {
  const sub = services
    .map(
      (s, i) =>
        (i === 6 ? '<li class="sep" aria-hidden="true"></li>' : '') +
        `<li><a href="${ctx.url(s.slug + '/')}"${current === s.slug ? ' aria-current="page"' : ''}><span class="dot c-${s.couleur}"></span>${esc(s.menu)}</a></li>`,
    )
    .join('');
  const item = (p, label) =>
    `<li><a href="${ctx.url(p)}"${current === p ? ' aria-current="page"' : ''}>${label}</a></li>`;
  return `<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${ctx.url('')}" aria-label="MLS TRAVAUX, retour à l'accueil">
      <img src="${ctx.asset('img/logo-96.png')}" width="96" height="82" alt="">
      <span>MLS TRAVAUX</span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="nav" id="nav" aria-label="Menu principal">
      <ul>
        ${item('', 'Accueil')}
        <li class="has-sub"><button class="sub-toggle" type="button" aria-expanded="false">Nos services</button><ul class="sub">${sub}</ul></li>
        ${item('professionnels/', 'Professionnels')}
        ${item('realisations/', 'Réalisations')}
        ${item('entreprise/', "L'entreprise")}
        <li class="cta"><a class="btn btn-p" href="${ctx.url('contact/')}">Devis gratuit</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

function footer(ctx) {
  const main = services.filter((s) => s.groupe <= 2);
  const autres = services.filter((s) => s.groupe === 3);
  const li = (s) => `<li><a href="${ctx.url(s.slug + '/')}">${esc(s.menu)}</a></li>`;
  return `<footer class="site-footer">
  ${stripeFull}
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <a class="brand" href="${ctx.url('')}"><img src="${ctx.asset('img/logo-96.png')}" width="96" height="82" alt=""><span>MLS TRAVAUX</span></a>
        <p>Rénovation et travaux du bâtiment, tous corps d'état, pour les particuliers et les professionnels.</p>
        <p>${esc(site.adresse.rue)}<br>${site.adresse.cp} ${esc(site.adresse.ville)}<br>${telLink()}<br>${esc(site.horaires)}</p>
      </div>
      <div><h2>Nos services</h2><ul>${main.map(li).join('')}</ul></div>
      <div><h2>Et aussi</h2><ul>${autres.map(li).join('')}<li><a href="${ctx.url('professionnels/')}">Professionnels</a></li></ul></div>
      <div><h2>MLS TRAVAUX</h2><ul>
        <li><a href="${ctx.url('entreprise/')}">L'entreprise</a></li>
        <li><a href="${ctx.url('realisations/')}">Réalisations</a></li>
        <li><a href="${ctx.url('contact/')}">Demander un devis</a></li>
        <li><a href="${ctx.url('mentions-legales/')}">Mentions légales</a></li>
        <li><a href="${ctx.url('confidentialite/')}">Confidentialité</a></li>
      </ul></div>
    </div>
    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} MLS TRAVAUX, SARL · Beaujolais, région Lyonnaise, Val de Saône, Rhône, Ain</span>
      <span>Site sans cookie</span>
    </div>
  </div>
</footer>`;
}

export function page(ctx, { title, description, noindex, current, jsonld = [], body, ogType = 'website' }) {
  const canonical = site.url + '/' + ctx.path;
  const ld = [businessJsonLd(), ...jsonld]
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`)
    .join('\n');
  const fonts = ctx.preview
    ? `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Figtree:wght@400;500;600&display=swap">`
    : `<link rel="preload" href="/assets/fonts/cormorant-garamond-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/figtree-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/fonts.css">`;
  const head = `<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : ''}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${ogType}">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="MLS TRAVAUX">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}/assets/img/logo-mls-travaux.png">
<meta name="theme-color" content="#2e3538">
<link rel="icon" type="image/png" href="${ctx.asset('img/favicon.png')}">
<link rel="apple-touch-icon" href="${ctx.asset('img/apple-touch-icon.png')}">
${fonts}
<link rel="stylesheet" href="${ctx.asset('css/site.css')}">
${ld}`;
  const content = `${ctx.preview ? `<div class="apercu-band">Aperçu de travail : photos d’illustration en attendant vos photos de chantier ; le formulaire sera branché à la mise en ligne.</div>` : ''}
<a class="skip" href="#contenu">Aller au contenu</a>
${header(ctx, current)}
<main id="contenu">
${body}
</main>
${footer(ctx)}
<script src="${ctx.asset('js/site.js')}" defer></script>`;
  // L'aperçu publie la page d'accueil sans squelette (il est ajouté à la publication).
  if (ctx.preview && ctx.path === '') return `${head}\n${content}\n`;
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${content}
</body>
</html>
`;
}
