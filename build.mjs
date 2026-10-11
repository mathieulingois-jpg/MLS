// Construit le site dans dist/ (production) ou preview/ (aperçu : node build.mjs --preview).
import { mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs';
import { join } from 'node:path';
import { site } from './src/site.mjs';
import { services } from './src/services.mjs';
import { makeCtx, page } from './src/layout.mjs';
import * as P from './src/pages.mjs';

const preview = process.argv.includes('--preview');
const out = preview ? 'preview' : 'dist';
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

const builders = [
  P.accueil,
  P.nosServices,
  ...services.map((s) => (ctx) => P.servicePage(ctx, s)),
  P.professionnels,
  P.realisations,
  P.entreprise,
  P.contact,
  P.mentions,
  P.confidentialite,
  ...(preview ? [] : [P.notFound]),
];

const pages = [];
for (const build of builders) {
  const probe = build(makeCtx('', preview));
  const ctx = makeCtx(probe.file ? '' : probe.path, preview);
  const p = build(ctx);
  const html = page(ctx, p);
  const file = p.file || join(p.path, 'index.html');
  mkdirSync(join(out, p.path && !p.file ? p.path : ''), { recursive: true });
  writeFileSync(join(out, file), html);
  pages.push({ ...p, fileOut: file });
}

cpSync('assets', join(out, 'assets'), { recursive: true });

if (!preview) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.filter((p) => !p.noindex).map((p) => `  <url><loc>${site.url}/${p.path}</loc><lastmod>${today}</lastmod></url>`);
  writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
  writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);
  writeFileSync(join(out, '_headers'), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()\n\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n`);
}

console.log(`${pages.length} pages construites dans ${out}/`);
for (const p of pages) console.log(' -', p.fileOut, `(${p.title.length} car.)`);
