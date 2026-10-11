// Contenu des pages : accueil, services, professionnels, entreprise, contact, réalisations, pages légales.
import { site, partenaires } from './site.mjs';
import { services, metiers, serviceBySlug } from './services.mjs';
import { esc, photo, telLink, stripeFull, stripeSmall } from './layout.mjs';

const ICONES = {
  // Pictogrammes simples, dessinés au trait.
  un: '<svg class="ico" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="17" cy="11" r="5"/><path d="M7 29c0-5.5 4.5-9 10-9s10 3.5 10 9"/></svg>',
  cle: '<svg class="ico" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><circle cx="11" cy="17" r="6"/><path d="M17 17h13M26 17v5M30 17v4"/></svg>',
  metiers: '<svg class="ico" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="5" y="5" width="10" height="10" rx="2"/><rect x="19" y="5" width="10" height="10" rx="2"/><rect x="5" y="19" width="10" height="10" rx="2"/><rect x="19" y="19" width="10" height="10" rx="2"/></svg>',
  pro: '<svg class="ico" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 29h26M7 29V9l10-4 10 4v20"/><path d="M12 13h3M19 13h3M12 18h3M19 18h3M15 29v-5h4v5"/></svg>',
};

// Carte schématique de la zone d'intervention (dessinée, sans service externe ni cookie).
function carteZone(ctx) {
  const X = (lon) => ((lon - 4.5) / 0.6) * 400;
  const Y = (lat) => ((46.15 - lat) / 0.43) * 415;
  const pt = (lon, lat) => `${X(lon).toFixed(1)},${Y(lat).toFixed(1)}`;
  const saone = [
    [4.745, 46.16], [4.752, 46.1], [4.745, 46.05], [4.738, 46.0], [4.745, 45.975], [4.765, 45.95],
    [4.79, 45.92], [4.82, 45.89], [4.845, 45.86], [4.84, 45.82], [4.826, 45.79], [4.826, 45.76], [4.82, 45.71],
  ];
  const rhone = [[5.11, 45.8], [4.96, 45.79], [4.87, 45.772], [4.826, 45.748]];
  const path = (pts) => 'M' + pts.map(([a, b]) => pt(a, b)).join(' L');
  const villes = [
    ['Belleville-en-B.', 4.7496, 46.1086, 'g'],
    ['Saint-Georges-de-Reneins', 4.724, 46.06, 'g'],
    ['Gleizé', 4.697, 45.988, 'g'],
    ['Anse', 4.7197, 45.9369, 'g'],
    ['Trévoux', 4.774, 45.9411, 'd'],
    ['Chazay-d\'Azergues', 4.712, 45.873, 'g'],
    ['Neuville-sur-Saône', 4.8417, 45.8763, 'd'],
    ['Lyon', 4.8357, 45.764, 'd', true],
  ];
  const v = villes
    .map(([n, lo, la, side, big]) => {
      const x = X(lo), y = Y(la);
      const tx = side === 'g' ? x - 8 : x + 8;
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${big ? 5 : 3}" fill="#2e3538"/><text x="${tx.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${side === 'g' ? 'end' : 'start'}" font-size="${big ? 15 : 11.5}" font-weight="${big ? 600 : 500}" fill="#2e3538">${esc(n)}</text>`;
    })
    .join('');
  const vx = X(4.7264), vy = Y(45.989);
  return `<figure class="carte">
  <svg viewBox="0 0 400 415" role="img" aria-labelledby="carte-titre">
    <title id="carte-titre">Carte de la zone d'intervention de MLS TRAVAUX autour de Villefranche-sur-Saône : Beaujolais, Val de Saône, Ain et région Lyonnaise</title>
    <rect width="400" height="415" fill="#efedea"/>
    <path d="M0 0 H${X(4.745).toFixed(0)} L${X(4.738).toFixed(0)},${Y(46.0).toFixed(0)} L${X(4.745).toFixed(0)},${Y(45.975).toFixed(0)} L${X(4.79).toFixed(0)},${Y(45.92).toFixed(0)} L${X(4.83).toFixed(0)},${Y(45.88).toFixed(0)} L0,${Y(45.86).toFixed(0)} Z" fill="#8bc43f" opacity=".13"/>
    <path d="${path(rhone)}" fill="none" stroke="#0a72ba" stroke-width="3" opacity=".55" stroke-linecap="round"/>
    <path d="${path(saone)}" fill="none" stroke="#0a72ba" stroke-width="4" opacity=".7" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${vx.toFixed(1)}" cy="${vy.toFixed(1)}" r="70" fill="#0a72ba" opacity=".07"/>
    <text x="40" y="70" font-family="Cormorant Garamond, Georgia, serif" font-size="24" font-style="italic" font-weight="600" fill="#5a6266">Beaujolais</text>
    <text x="300" y="120" font-family="Cormorant Garamond, Georgia, serif" font-size="24" font-style="italic" font-weight="600" fill="#5a6266">Ain</text>
    <text x="30" y="370" font-family="Cormorant Garamond, Georgia, serif" font-size="20" font-style="italic" font-weight="600" fill="#5a6266">Région Lyonnaise</text>
    <text transform="translate(${X(4.81).toFixed(0)},${Y(45.925).toFixed(0)}) rotate(48)" font-size="10" letter-spacing="2" fill="#0a72ba" font-weight="600">LA SAÔNE</text>
    <g font-family="Figtree, Segoe UI, sans-serif">${v}
      <circle cx="${vx.toFixed(1)}" cy="${vy.toFixed(1)}" r="9" fill="#0a72ba" stroke="#fff" stroke-width="3"/>
      <text x="${(vx + 14).toFixed(1)}" y="${(vy - 8).toFixed(1)}" font-size="15" font-weight="700" fill="#2e3538">Villefranche-sur-Saône</text>
      <text x="${(vx + 14).toFixed(1)}" y="${(vy + 9).toFixed(1)}" font-size="11.5" fill="#5a6266">Limas, siège de MLS TRAVAUX</text>
    </g>
  </svg>
  <figcaption><span>Carte simplifiée, non à l'échelle exacte.</span><a href="https://www.google.com/maps/search/?api=1&amp;query=10+rue+des+Alouettes+69400+Limas" rel="noopener" target="_blank">Voir sur Google Maps</a></figcaption>
</figure>`;
}

function ctaBand(ctx, titre = 'Un projet ? Le devis est gratuit.', texte = 'Décrivez-nous vos travaux : nous vous rappelons pour fixer une visite.') {
  return `<section class="section section-ardoise cta-band on-dark" style="position:relative">
  <div class="wrap">
    <div class="stack"><h2>${esc(titre)}</h2><p>${esc(texte)}</p></div>
    <div class="btns"><a class="btn btn-p" href="${ctx.url('contact/')}">Demander un devis gratuit</a>${telLink('btn btn-s')}</div>
  </div>
</section>`;
}

function svcCard(ctx, s, feat = false) {
  return `<a class="svc-card c-${s.couleur}${feat ? ' feat' : ''}" href="${ctx.url(s.slug + '/')}">
  ${photo(ctx, s.form, s.photo, '', { sizes: feat ? '(max-width: 900px) 100vw, 40vw' : '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw' })}
  <div class="tx"><h3>${esc(s.nom)}</h3><p>${esc(s.court)}</p><span class="lien-fleche">Découvrir</span></div>
</a>`;
}

function grilleServices(ctx) {
  const [clim, ...rest] = metiers;
  // Sur l'accueil, les panneaux solaires ont leur propre carte (demande de Mathieu, 11/10).
  const grands = rest.filter((s) => s.groupe === 2 || s.form === 'solaire');
  const autres = rest.filter((s) => s.groupe === 3 && s.form !== 'solaire');
  return `<div class="svc-grid">
  ${svcCard(ctx, clim, true)}
  ${grands.map((s) => svcCard(ctx, s)).join('\n')}
  <div class="aussi"><h3>Et aussi</h3><ul>${autres
    .map((s) => `<li><a href="${ctx.url(s.slug + '/')}"><img src="${ctx.asset('img/photos/' + s.form + '-800.webp')}" width="64" height="48" alt="" loading="lazy"><span class="dot c-${s.couleur}"></span>${esc(s.nom)}</a></li>`)
    .join('')}</ul></div>
</div>`;
}

// ---------- Accueil ----------
export function accueil(ctx) {
  const args = [
    ['un', 'bleu', 'Un interlocuteur unique', 'Une seule personne suit votre projet, du premier rendez-vous à la remise des clés. Vous savez toujours qui appeler.'],
    ['cle', 'jaune', 'Clés en main', 'Nous intégrons tous les métiers et gérons le planning. Vous retrouvez un logement ou un local prêt à vivre.'],
    ['metiers', 'vert', "Tous corps d'état", 'Climatisation, plâtrerie, isolation, peinture, plomberie, électricité : les métiers travaillent ensemble, sans temps mort.'],
    ['pro', 'magenta', 'Particuliers et professionnels', 'Maisons, appartements, bureaux, commerces : nous adaptons nos interventions à votre lieu de vie ou de travail.'],
  ];
  return {
    path: '',
    title: 'Entreprise de rénovation Villefranche-sur-Saône | MLS TRAVAUX',
    description:
      "MLS TRAVAUX, entreprise de rénovation tous corps d'état à Villefranche-sur-Saône : climatisation, plâtrerie, isolation, peinture. Devis gratuit.",
    current: '',
    body: `
${photo(ctx, 'accueil', 'Séjour lumineux entièrement rénové', 'hero-photo', { eager: true, sizes: '100vw' })}
<section class="hero on-dark">
  <div class="wrap">
    <span class="eyebrow">Entreprise de rénovation · Villefranche-sur-Saône · Beaujolais</span>
    <h1>Votre interlocuteur unique pour une rénovation <em>clés en main</em></h1>
    <p class="sous">${esc(site.sousTitre)}</p>
    <p class="intro">${esc(site.presentation)}</p>
    <ul class="cascade" aria-label="Nos principaux métiers">${[
      ['Climatisation', 'climatisation-villefranche-sur-saone', 'bleu'],
      ['Chauffage – Pompe à chaleur', 'climatisation-villefranche-sur-saone', 'bleu'],
      ['Plâtrerie – Peinture', 'platrerie-villefranche-sur-saone', 'vert'],
      ['Isolation', 'isolation-villefranche-sur-saone', 'vert'],
      ['Plomberie', 'plombier-villefranche-sur-saone', 'magenta'],
      ['Électricité', 'electricien-villefranche-sur-saone', 'bleu'],
      ['Panneaux solaires', 'panneaux-solaires-villefranche-sur-saone', 'jaune'],
    ]
      .map(([n, slug, c], i) => `<li style="--i:${i}"><a href="${ctx.url(slug + '/')}"><span class="dot c-${c}"></span>${n}</a></li>`)
      .join('')}</ul>
    <div class="btns"><a class="btn btn-p" href="${ctx.url('contact/')}">Demander un devis</a>${telLink('btn btn-s').replace(site.telephone + '<', 'Appeler<')}</div>
  </div>
  ${stripeFull}
</section>

<section class="section" id="services">
  <div class="wrap">
    <div class="sec-head center"><span class="eyebrow eyebrow-lg">Nos services</span><h2>Tous les travaux de votre rénovation</h2><p>Neuf ou rénovation, maison, appartement ou local professionnel : nous intégrons tous les métiers de votre chantier, avec un seul interlocuteur.</p></div>
    ${grilleServices(ctx)}
  </div>
</section>

<section class="section section-ardoise on-dark">
  <div class="wrap">
    <div class="sec-head"><h2 class="titre-xl">Pourquoi MLS TRAVAUX ?</h2><p class="sous-titre">Une seule entreprise pour tout votre chantier</p></div>
    <div class="args">${args
      .map(([ic, c, t, p]) => `<div class="arg c-${c}">${ICONES[ic]}<h3>${t}</h3><p>${p}</p>${ic === 'cle' ? `<a class="lien-fleche" style="color:var(--papier)" href="${ctx.url('renovation-cle-en-main/')}">La rénovation clé en main</a>` : ''}</div>`)
      .join('')}</div>
  </div>
</section>

<section class="section section-pierre">
  <div class="wrap zone">
    <div class="stack">
      <span class="eyebrow">Zone d'intervention</span>
      <h2>Près de Villefranche-sur-Saône, dans tout le Beaujolais et la région Lyonnaise</h2>
      <p class="muted">Notre siège est à Limas, à côté de Villefranche-sur-Saône. Nous intervenons chez les particuliers et les professionnels de :</p>
      <ul class="tags">${site.zoneAffichee.map((z) => `<li>${z}</li>`).join('')}</ul>
      <p class="muted">Pour les projets complexes, nous acceptons aussi les grands déplacements.</p>
      <p><a class="lien-fleche" href="${ctx.url('entreprise/')}">Découvrir l'entreprise</a></p>
    </div>
    ${carteZone(ctx)}
  </div>
</section>

${ctaBand(ctx)}
`,
  };
}

// ---------- Pages services ----------
export function servicePage(ctx, s) {
  const liens = s.liens.map((l) => serviceBySlug[l]).filter(Boolean);
  const proLien = s.liens.includes('professionnels');
  const sections = s.sections
    .map((sec) => {
      if (sec.cartes) {
        return `<section class="section"><div class="wrap"><div class="sec-head"><h2>${esc(sec.h2)}</h2></div><div class="types">${sec.cartes
          .map((c) => `<div class="type c-${s.couleur}"><h3>${esc(c.titre)}</h3><p>${esc(c.texte)}</p></div>`)
          .join('')}</div></div></section>`;
      }
      return `<div class="prose"><h2>${esc(sec.h2)}</h2>${sec.paras.map((p) => `<p>${esc(p)}</p>`).join('')}</div>`;
    });
  // Les sections "cartes" sont pleine largeur ; les sections texte sont groupées.
  let out = '';
  let buffer = [];
  const flush = () => {
    if (buffer.length) {
      out += `<section class="section"><div class="wrap stack-lg">${buffer.join('')}</div></section>`;
      buffer = [];
    }
  };
  s.sections.forEach((sec, i) => {
    if (sec.cartes) { flush(); out += sections[i]; } else buffer.push(sections[i]);
  });
  flush();

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.nom,
    serviceType: s.nom,
    url: `${site.url}/${s.slug}/`,
    description: s.description,
    provider: { '@id': site.url + '/#entreprise' },
    areaServed: site.zoneAffichee.map((z) => ({ '@type': 'AdministrativeArea', name: z })),
  };
  const crumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: site.url + '/' },
      { '@type': 'ListItem', position: 2, name: s.nom, item: `${site.url}/${s.slug}/` },
    ],
  };

  return {
    path: s.slug + '/',
    title: s.title,
    description: s.description,
    current: s.slug,
    jsonld: [serviceLd, faqLd, crumbLd],
    body: `
<section class="page-head">
  <div class="wrap svc-hero">
    <div class="stack">
      <nav class="fil" aria-label="Fil d'Ariane"><ol><li><a href="${ctx.url('')}">Accueil</a></li>${s.slug === 'renovation-cle-en-main' ? '' : `<li><a href="${ctx.url('nos-services/')}">Nos services</a></li>`}<li aria-current="page">${esc(s.nom)}</li></ol></nav>
      <span class="eyebrow tag-metier"><span class="dot c-${s.couleur}"></span>${esc(s.nom)}</span>
      <h1>${esc(s.h1)}</h1>
      ${s.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ' class="muted"'}>${esc(p)}</p>`).join('')}
      <div class="btns"><a class="btn btn-p" href="${ctx.url('contact/#' + s.form)}">Demander un devis pour ${esc(s.nom.toLowerCase())}</a>${telLink('btn btn-s')}</div>
    </div>
    ${photo(ctx, s.form, s.photo, '', { eager: true })}
  </div>
</section>

<section class="section section-pierre">
  <div class="wrap">
    <div class="sec-head"><h2>${esc(s.prestations.titre)}</h2></div>
    <ul class="liste-check c-${s.couleur}">${s.prestations.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
  </div>
</section>

${out}
${s.galerie ? `<section class="section" style="padding-top:0"><div class="wrap galerie">${s.galerie.map(([k, a]) => photo(ctx, k, a)).join('')}</div></section>` : ''}

<section class="section section-pierre">
  <div class="wrap">
    <div class="sec-head"><span class="eyebrow">Notre méthode</span><h2>Comment se déroule votre chantier</h2></div>
    <ol class="etapes">${s.etapes.map(([t, p]) => `<li><h3>${esc(t)}</h3><p>${esc(p)}</p></li>`).join('')}</ol>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="sec-head"><span class="eyebrow">Questions fréquentes</span><h2>Vos questions sur ${esc(s.nom.toLowerCase())}</h2></div>
    <div class="faq">${s.faq.map((f, i) => `<details${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</div>
  </div>
</section>

<section class="section section-pierre">
  <div class="wrap two-col">
    <div class="stack">
      <span class="eyebrow">Zone d'intervention</span>
      <h2>${esc(s.nom)} à Villefranche-sur-Saône et alentours</h2>
      <p class="muted">Nous intervenons depuis Limas à Villefranche-sur-Saône, dans tout le Beaujolais, le Val de Saône, la région Lyonnaise, le Rhône et l'Ain. Grands déplacements possibles pour les projets complexes.</p>
    </div>
    <div class="stack">
      <span class="eyebrow">Services complémentaires</span>
      <div class="stack">${liens
        .map((l) => `<a class="lien-fleche" href="${ctx.url(l.slug + '/')}">${esc(l.nom)}</a>`)
        .join('')}${proLien ? `<a class="lien-fleche" href="${ctx.url('professionnels/')}">Travaux pour les professionnels</a>` : ''}</div>
    </div>
  </div>
</section>

${ctaBand(ctx, `Votre projet de ${s.nom.toLowerCase()}`, 'Devis gratuit et détaillé après une visite sur place.')}
`,
  };
}

// ---------- Professionnels ----------
export function professionnels(ctx) {
  return {
    path: 'professionnels/',
    title: 'Rénovation locaux professionnels Villefranche-sur-Saône | MLS',
    description:
      'Rénovation de bureaux, commerces et locaux professionnels à Villefranche-sur-Saône et dans le Rhône. Site occupé, délais tenus, devis rapide.',
    current: 'professionnels/',
    body: `
<section class="page-head">
  <div class="wrap svc-hero">
    <div class="stack">
      <span class="eyebrow">Professionnels</span>
      <h1>Rénovation de locaux professionnels à Villefranche-sur-Saône</h1>
      <p class="lead">Bureaux, commerces, cabinets, locaux d'activité : MLS TRAVAUX rénove et aménage vos locaux professionnels à Villefranche-sur-Saône, dans le Beaujolais et dans tout le Rhône.</p>
      <p class="muted">Vos locaux sont votre outil de travail. Nous organisons le chantier pour que votre activité continue, avec un seul interlocuteur pour tous les métiers.</p>
      <div class="btns"><a class="btn btn-p" href="${ctx.url('contact/#pro')}">Demander un devis</a>${telLink('btn btn-s')}</div>
    </div>
    ${photo(ctx, 'professionnels', 'Bureaux rénovés, espace ouvert et lumineux', '', { eager: true })}
  </div>
</section>

<section class="section section-pierre">
  <div class="wrap">
    <div class="sec-head"><h2>Nos engagements pour les professionnels</h2></div>
    <div class="types">
      <div class="type"><h3>Intervention en site occupé</h3><p>Nous travaillons zone par zone, en limitant le bruit et la poussière, et si besoin en dehors de vos horaires d'ouverture.</p></div>
      <div class="type"><h3>Délais tenus</h3><p>Un planning précis, fixé avec vous avant le démarrage, pour une réouverture ou un emménagement à la date prévue.</p></div>
      <div class="type"><h3>Un interlocuteur unique</h3><p>Un seul contact pour la climatisation, l'électricité, les cloisons, les faux plafonds, les sols et la peinture.</p></div>
      <div class="type"><h3>Devis rapide</h3><p>Visite de vos locaux et devis détaillé dans les meilleurs délais.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap two-col">
    <div class="prose">
      <h2>Ce que nous réalisons</h2>
      <ul class="liste-check" style="grid-template-columns:1fr">
        <li>Climatisation de bureaux et de commerces</li>
        <li>Cloisonnement, création de bureaux et de salles de réunion</li>
        <li>Faux plafonds, éclairage et électricité</li>
        <li>Isolation thermique et phonique</li>
        <li>Peinture et revêtements muraux</li>
        <li>Sanitaires, kitchenettes et points d'eau</li>
        <li>Sols et carrelage</li>
      </ul>
    </div>
    <div class="prose">
      <h2>Tous types de locaux</h2>
      <p>Nous travaillons pour les entreprises, les commerçants, les professions libérales, les artisans et les gestionnaires de biens, autour de Villefranche-sur-Saône et dans la région Lyonnaise.</p>
      <p>Que vous rénoviez un plateau de bureaux, aménagiez une boutique avant son ouverture ou installiez une climatisation dans une salle d'attente, nous adaptons nos équipes et notre planning à votre activité.</p>
      <p><a class="lien-fleche" href="${ctx.url('climatisation-villefranche-sur-saone/')}">Climatisation pour les professionnels</a></p>
    </div>
  </div>
</section>

${ctaBand(ctx, 'Un projet pour vos locaux ?', 'Parlons-en : visite et devis gratuits.')}
`,
  };
}

// ---------- L'entreprise ----------
export function entreprise(ctx) {
  return {
    path: 'entreprise/',
    title: "MLS TRAVAUX | Entreprise de rénovation à Limas, Beaujolais",
    description:
      "MLS TRAVAUX, entreprise de rénovation tous corps d'état basée à Limas près de Villefranche-sur-Saône. Notre équipe, nos engagements, notre zone.",
    current: 'entreprise/',
    body: `
<section class="page-head">
  <div class="wrap svc-hero">
    <div class="stack">
      <span class="eyebrow">L'entreprise</span>
      <h1>MLS TRAVAUX, rénovation tous corps d'état en Beaujolais</h1>
      <p class="lead">${esc(site.presentation)}</p>
      <p class="muted">L'entreprise est dirigée par ${esc(site.dirigeant)}. Son principe : un seul interlocuteur, responsable de tout le chantier.</p>
    </div>
    ${photo(ctx, 'entreprise', 'Chantier de rénovation intérieure en cours', '', { eager: true })}
  </div>
</section>

<section class="section section-pierre">
  <div class="wrap">
    <div class="sec-head"><span class="eyebrow">Nos engagements</span><h2>Ce que vous pouvez attendre de nous</h2></div>
    <div class="types">
      <div class="type"><h3>Devis gratuit et détaillé</h3><p>Nous venons voir votre projet et vous remettons un devis clair, poste par poste.</p></div>
      <div class="type"><h3>Un chantier propre</h3><p>Protection des sols et des meubles, nettoyage régulier, évacuation des déchets.</p></div>
      <div class="type"><h3>Des délais respectés</h3><p>Un planning fixé avec vous et un point régulier sur l'avancement.</p></div>
      <div class="type"><h3>Garantie décennale</h3><p>Nos travaux sont couverts par une assurance décennale (${esc(site.decennale.assureur)}).</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap two-col">
    <div class="prose">
      <span class="eyebrow">Nos métiers</span>
      <h2>Tous les corps d'état réunis</h2>
      <p>Climatisation et chauffage, plâtrerie, isolation, peinture, plomberie, électricité, mais aussi cuisines, carrelage, menuiseries et panneaux solaires. Ces métiers travaillent ensemble sur vos chantiers, en neuf comme en rénovation.</p>
      <p><a class="lien-fleche" href="${ctx.url('nos-services/')}">Voir tous nos services</a></p>
    </div>
    <div class="prose">
      <span class="eyebrow">Zone d'intervention</span>
      <h2>Beaujolais, Val de Saône, région Lyonnaise</h2>
      <p>Depuis notre siège de Limas, nous intervenons à Villefranche-sur-Saône, dans tout le Beaujolais, le Val de Saône, la région Lyonnaise, le Rhône et l'Ain. Pour les projets complexes, nous acceptons les grands déplacements.</p>
    </div>
  </div>
</section>

<section class="section section-pierre">
  <div class="wrap">
    ${carteZone(ctx)}
    <p class="small muted" style="margin-top:20px"><strong>Communes desservies :</strong> ${site.communes.map(esc).join(', ')}, et toutes les communes du Beaujolais et du Val de Saône.</p>
  </div>
</section>

${ctaBand(ctx)}
`,
  };
}

// ---------- Contact ----------
export function contact(ctx) {
  const opts = [
    ['climatisation', 'Climatisation et chauffage'],
    ['platrerie', 'Plâtrerie'],
    ['isolation', 'Isolation'],
    ['peinture', 'Peinture'],
    ['plomberie', 'Plomberie'],
    ['electricite', 'Électricité'],
    ['renovation', 'Rénovation complète'],
    ['cuisine', 'Cuisine'],
    ['carrelage', 'Carrelage'],
    ['menuiseries', 'Menuiseries'],
    ['solaire', 'Panneaux solaires'],
    ['autre', 'Autre'],
  ];
  return {
    path: 'contact/',
    title: 'Devis gratuit travaux Villefranche-sur-Saône | MLS TRAVAUX',
    description:
      'Demandez votre devis gratuit de travaux à Villefranche-sur-Saône : climatisation, plâtrerie, isolation, peinture, plomberie, électricité. Réponse rapide.',
    current: 'contact/',
    body: `
<section class="page-head">
  <div class="wrap stack">
    <span class="eyebrow">Contact et devis</span>
    <h1>Demandez votre devis gratuit</h1>
    <p class="lead">Décrivez-nous votre projet de travaux à Villefranche-sur-Saône, dans le Beaujolais ou la région Lyonnaise. Nous vous recontactons pour organiser une visite.</p>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap contact-grid">
    <form class="form" id="devis" novalidate data-key="${esc(site.web3formsKey)}">
      <input type="hidden" name="subject" value="Nouvelle demande de devis depuis mlstravaux.fr">
      <input type="hidden" name="from_name" value="Site MLS TRAVAUX">
      <input type="checkbox" name="botcheck" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true">
      <div class="row">
        <div class="field"><label for="f-nom">Nom <span class="req">*</span></label><input id="f-nom" name="nom" autocomplete="name" required></div>
        <div class="field"><label for="f-tel">Téléphone <span class="req">*</span></label><input id="f-tel" name="telephone" type="tel" autocomplete="tel" required></div>
      </div>
      <div class="row">
        <div class="field"><label for="f-email">E-mail <span class="req">*</span></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
        <div class="field"><label for="f-ville">Ville des travaux <span class="req">*</span></label><input id="f-ville" name="ville" autocomplete="address-level2" required></div>
      </div>
      <fieldset class="field"><legend>Vous êtes <span class="req">*</span></legend>
        <div class="choix"><label><input type="radio" id="f-part" name="client" value="Particulier" required checked> Particulier</label><label><input type="radio" id="f-pro" name="client" value="Professionnel"> Professionnel</label></div>
      </fieldset>
      <div class="row">
        <div class="field"><label for="f-travaux">Type de travaux <span class="req">*</span></label><select id="f-travaux" name="travaux" required><option value="">Choisir…</option>${opts
          .map(([v, l]) => `<option value="${v}">${l}</option>`)
          .join('')}</select></div>
        <div class="field"><label for="f-delai">Délai souhaité</label><select id="f-delai" name="delai"><option value="">Pas de préférence</option><option>Dès que possible</option><option>Dans 1 à 3 mois</option><option>Dans 3 à 6 mois</option><option>Plus tard</option></select></div>
      </div>
      <div class="field"><label for="f-message">Votre projet <span class="req">*</span></label><textarea id="f-message" name="message" required placeholder="Pièces concernées, surfaces approximatives, ce que vous souhaitez…"></textarea></div>
      <div class="field"><label for="f-photos">Photos (jusqu'à 3, facultatif)</label><input id="f-photos" name="photos" type="file" accept="image/*" multiple></div>
      <label class="consent" for="f-rgpd"><input id="f-rgpd" name="consentement" type="checkbox" value="oui" required><span>J'accepte que MLS TRAVAUX utilise ces informations pour me recontacter au sujet de ma demande. <a href="${ctx.url('confidentialite/')}">En savoir plus</a>.</span></label>
      <div class="form-msg" role="status" hidden></div>
      <div><button class="btn btn-p" type="submit">Envoyer ma demande de devis</button></div>
      <p class="small muted"><span class="req">*</span> Champs obligatoires.</p>
    </form>
    <aside class="coord">
      <div class="encadre">
        <dl>
          <div><dt>Téléphone</dt><dd>${telLink('tel')}</dd></div>
          <div><dt>Horaires</dt><dd>${esc(site.horaires)}</dd></div>
          <div><dt>Adresse</dt><dd>${esc(site.nom)}<br>${esc(site.adresse.rue)}<br>${site.adresse.cp} ${esc(site.adresse.ville)}</dd></div>
          <div><dt>E-mail</dt><dd>${esc(site.email)}</dd></div>
        </dl>
        ${stripeSmall}
      </div>
      ${carteZone(ctx)}
    </aside>
  </div>
</section>
`,
    jsonld: [],
  };
}

// ---------- Réalisations (version 2) ----------
export function realisations(ctx) {
  return {
    path: 'realisations/',
    title: 'Réalisations rénovation Villefranche-sur-Saône | MLS TRAVAUX',
    description: 'Nos chantiers de rénovation en photos avant/après à Villefranche-sur-Saône et dans le Beaujolais.',
    noindex: true, // à retirer quand les premiers chantiers seront publiés
    current: 'realisations/',
    body: `
<section class="page-head">
  <div class="wrap stack">
    <span class="eyebrow">Réalisations</span>
    <h1>Nos réalisations en photos avant / après</h1>
    <p class="lead">Nous préparons la présentation de nos chantiers récents : climatisation, plâtrerie, isolation, peinture, salles de bain et rénovations complètes, avec des photos avant et après.</p>
    <p class="muted">Cette page sera mise en ligne très prochainement. En attendant, nous pouvons vous montrer des exemples de chantiers lors de notre visite.</p>
    <div class="btns"><a class="btn btn-p" href="${ctx.url('contact/')}">Demander un devis</a>${telLink('btn btn-s')}</div>
  </div>
</section>
`,
  };
}

// ---------- Pages légales ----------
export function mentions(ctx) {
  return {
    path: 'mentions-legales/',
    title: 'Mentions légales | MLS TRAVAUX',
    description: 'Mentions légales du site mlstravaux.fr.',
    noindex: true,
    body: `
<section class="page-head"><div class="wrap"><h1>Mentions légales</h1></div></section>
<section class="section" style="padding-top:0"><div class="wrap legal">
  <section><h2>Éditeur du site</h2><p>${esc(site.nom)}, ${esc(site.forme)}<br>${esc(site.adresse.rue)}, ${site.adresse.cp} ${esc(site.adresse.ville)}, France<br>Téléphone : ${site.telephone}<br>E-mail : ${site.email}<br>SIRET : ${site.siret}<br>TVA intracommunautaire : ${site.tva}</p></section>
  <section><h2>Directeur de la publication</h2><p>${esc(site.dirigeant)}, gérant.</p></section>
  <section><h2>Hébergeur</h2><p>Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis. <span class="a-completer">À confirmer au moment de la mise en ligne.</span></p></section>
  <section><h2>Assurance décennale</h2><p>Assureur : ${esc(site.decennale.assureur)}<br>Contrat n° ${esc(site.decennale.police)}<br>Zone géographique couverte : <span class="a-completer">à compléter (indiquée sur l'attestation)</span></p></section>
  <section><h2>Propriété intellectuelle</h2><p>Les textes, le logo et les photos de chantiers de ce site appartiennent à ${esc(site.nom)}. Les photos d'illustration proviennent de banques d'images libres de droits. Toute reproduction sans autorisation est interdite.</p></section>
  <section><h2>Données personnelles et cookies</h2><p>Ce site ne dépose aucun cookie. Pour savoir comment sont traitées les informations du formulaire de contact, consultez notre <a href="${ctx.url('confidentialite/')}">politique de confidentialité</a>.</p></section>
</div></section>
`,
  };
}

export function confidentialite(ctx) {
  return {
    path: 'confidentialite/',
    title: 'Politique de confidentialité | MLS TRAVAUX',
    description: 'Politique de confidentialité et données personnelles du site mlstravaux.fr.',
    noindex: true,
    body: `
<section class="page-head"><div class="wrap"><h1>Politique de confidentialité</h1></div></section>
<section class="section" style="padding-top:0"><div class="wrap legal">
  <section><h2>Responsable du traitement</h2><p>${esc(site.nom)}, ${esc(site.adresse.rue)}, ${site.adresse.cp} ${esc(site.adresse.ville)}. Contact : ${site.email}.</p></section>
  <section><h2>Données collectées</h2><p>Lorsque vous remplissez le formulaire de demande de devis, nous recevons : votre nom, votre téléphone, votre adresse e-mail, la ville des travaux, votre statut (particulier ou professionnel), le type de travaux, votre message, le délai souhaité et, si vous en ajoutez, vos photos.</p></section>
  <section><h2>Pourquoi nous les utilisons</h2><p>Uniquement pour répondre à votre demande, organiser une visite et établir un devis. Elles ne sont jamais vendues ni utilisées pour de la publicité. La base légale est votre consentement, donné en cochant la case du formulaire.</p></section>
  <section><h2>Combien de temps nous les gardons</h2><p>Trois ans au maximum après notre dernier échange si aucun travail n'est engagé. Si vous devenez client, elles sont conservées le temps nécessaire au suivi du chantier et aux obligations légales.</p></section>
  <section><h2>Qui peut les voir</h2><p>Seule l'équipe de ${esc(site.nom)}. Le formulaire passe par un service d'envoi de messages (Web3Forms) qui transmet votre demande à notre adresse e-mail.</p></section>
  <section><h2>Mesure d'audience</h2><p>Nous mesurons la fréquentation du site de façon anonyme, sans cookie et sans suivi d'une visite à l'autre (Cloudflare Web Analytics). Aucune donnée ne permet de vous identifier.</p></section>
  <section><h2>Cookies</h2><p>Ce site ne dépose aucun cookie : ni publicité, ni réseaux sociaux, ni carte intégrée. C'est pourquoi aucun bandeau de consentement ne s'affiche.</p></section>
  <section><h2>Vos droits</h2><p>Vous pouvez demander à consulter, corriger ou supprimer vos données, ou vous opposer à leur utilisation, en écrivant à ${site.email} ou à l'adresse postale ci-dessus. En cas de difficulté, vous pouvez saisir la CNIL (www.cnil.fr).</p></section>
</div></section>
`,
  };
}

export function notFound(ctx) {
  return {
    path: '404/',
    file: '404.html',
    title: 'Page introuvable | MLS TRAVAUX',
    description: "Cette page n'existe pas ou a été déplacée.",
    noindex: true,
    body: `
<section class="page-head"><div class="wrap stack">
  <span class="eyebrow">Erreur 404</span>
  <h1>Cette page est introuvable</h1>
  <p class="lead">Elle a peut-être été déplacée. Retrouvez nos services depuis l'accueil, ou contactez-nous directement.</p>
  <div class="btns"><a class="btn btn-p" href="${ctx.url('')}">Retour à l'accueil</a>${telLink('btn btn-s')}</div>
</div></section>
`,
  };
}

// ---------- Nos services (page liste) ----------
export function nosServices(ctx) {
  const [clim, ...rest] = metiers;
  return {
    path: 'nos-services/',
    title: "Nos services | Rénovation tous corps d'état | MLS TRAVAUX",
    description:
      "Climatisation, chauffage, plâtrerie, isolation, peinture, plomberie, électricité, cuisines, carrelage, menuiseries, panneaux solaires à Villefranche-sur-Saône.",
    current: 'nos-services/',
    body: `
<section class="page-head">
  <div class="wrap stack">
    <span class="eyebrow eyebrow-lg">Nos services</span>
    <h1>Tous les travaux de votre rénovation</h1>
    <p class="lead">Neuf ou rénovation, maison, appartement ou local professionnel : nous intégrons tous les métiers de votre chantier, avec un seul interlocuteur, à Villefranche-sur-Saône, dans le Beaujolais et la région Lyonnaise.</p>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="svc-grid">
      ${svcCard(ctx, clim, true)}
      ${rest.map((s) => svcCard(ctx, s)).join('\n')}
      <div class="aussi"><h3>Un autre projet ?</h3><p class="muted">Vous ne trouvez pas vos travaux dans la liste, ou vous rénovez tout un logement ? Parlons-en : nous intégrons tous les corps de métier.</p><p><a class="lien-fleche" href="${ctx.url('renovation-cle-en-main/')}">La rénovation clé en main</a></p><p><a class="lien-fleche" href="${ctx.url('contact/')}">Nous décrire votre projet</a></p></div>
    </div>
  </div>
</section>
${ctaBand(ctx)}
`,
  };
}

// ---------- Partenaires ----------
export function pagePartenaires(ctx) {
  return {
    path: 'partenaires/',
    title: 'Nos partenaires fournisseurs | MLS TRAVAUX',
    description:
      'Les fournisseurs de MLS TRAVAUX : matériaux, quincaillerie, sanitaire, chauffage, peintures et parquets de qualité professionnelle.',
    current: 'partenaires/',
    body: `
<section class="page-head">
  <div class="wrap stack">
    <span class="eyebrow eyebrow-lg">Partenaires</span>
    <h1>Nos partenaires fournisseurs</h1>
    <p class="lead">Pour vos chantiers, nous travaillons avec des fournisseurs reconnus du bâtiment, qui nous livrent des matériaux et des équipements de qualité professionnelle.</p>
  </div>
</section>
<section class="section" style="padding-top:0">
  <div class="wrap">
    <ul class="partenaires">${partenaires
      .map(
        (p) => `<li><a href="${p.url}" target="_blank" rel="noopener" aria-label="${esc(p.nom)} (site du fournisseur, nouvel onglet)">
          <span class="logo">${p.logo ? `<img src="${ctx.asset('img/partenaires/' + p.logo)}" alt="${esc(p.nom)}" loading="lazy">` : `<span class="logo-txt">${esc(p.nom)}</span>`}</span>
          <span class="nom">${esc(p.nom)}</span>
          <span class="metier">${esc(p.metier)}</span>
          <span class="lien-fleche">Voir le site</span>
        </a></li>`,
      )
      .join('')}</ul>
  </div>
</section>
${ctaBand(ctx)}
`,
  };
}
