// Contenu des pages services.
// Ordre = ordre d'affichage (menu, accueil). La climatisation est en tête de liste.
// "groupe" : 1 = service prioritaire, 2 = grands ensembles, 3 = autres services.

export const services = [
  {
    slug: 'climatisation-villefranche-sur-saone',
    nom: 'Climatisation et chauffage',
    menu: 'Climatisation et chauffage',
    form: 'climatisation',
    groupe: 1,
    couleur: 'bleu',
    court:
      'Climatisation réversible, gainable ou multi-split pour particuliers et professionnels. Étude, installation et entretien.',
    photo: 'Climatisation murale installée dans un séjour lumineux',
    title: 'Climatisation Villefranche-sur-Saône | Installation | MLS TRAVAUX',
    description:
      'Installation de climatisation réversible, gainable et multi-split à Villefranche-sur-Saône et dans le Beaujolais. Particuliers et pros. Devis gratuit.',
    h1: 'Climatisation à Villefranche-sur-Saône',
    intro: [
      "MLS TRAVAUX installe votre climatisation à Villefranche-sur-Saône, à Limas et dans tout le Beaujolais : climatisation réversible murale, gainable ou multi-split, pour les maisons, les appartements et les locaux professionnels. Une seule installation vous rafraîchit l'été et vous chauffe à la mi-saison, avec une consommation bien plus faible qu'un chauffage électrique classique.",
      "Comme nous sommes aussi plâtriers, peintres et électriciens, nous nous occupons de tout : passage des liaisons, alimentation électrique, coffrages en placo, reprises de peinture. Vous n'avez qu'un seul interlocuteur, du choix de l'appareil à la mise en service.",
    ],
    prestations: {
      titre: 'Ce que nous faisons',
      items: [
        "Étude de votre logement ou de vos locaux et calcul de la puissance nécessaire pièce par pièce",
        'Installation de climatisation réversible (pompe à chaleur air-air) murale, console ou cassette',
        'Climatisation gainable, invisible, avec bouches discrètes dans les plafonds',
        'Systèmes multi-split : une seule unité extérieure pour plusieurs pièces',
        "Pompe à chaleur air-eau pour remplacer une vieille chaudière",
        "Création de la ligne électrique dédiée et mise en conformité du tableau",
        'Coffrages, faux plafonds et finitions de peinture autour de l\'installation',
        'Entretien, nettoyage et dépannage de climatisation',
      ],
    },
    sections: [
      {
        h2: 'Quelle climatisation choisir pour votre maison ?',
        cartes: [
          {
            titre: 'Climatisation réversible murale',
            texte:
              "La solution la plus courante. Une unité intérieure fixée en haut d'un mur, reliée à une unité extérieure. Elle rafraîchit l'été et chauffe l'hiver. Idéale pour un séjour, une chambre ou un bureau.",
          },
          {
            titre: 'Climatisation gainable',
            texte:
              "L'appareil est caché dans les combles ou dans un faux plafond. L'air est distribué par de petites grilles dans chaque pièce. C'est la solution la plus discrète et la plus confortable, à prévoir de préférence lors d'une rénovation.",
          },
          {
            titre: 'Multi-split',
            texte:
              "Une seule unité extérieure alimente deux à cinq unités intérieures. Chaque pièce garde sa propre température. Parfait pour équiper toute une maison sans multiplier les groupes en façade.",
          },
          {
            titre: 'Pompe à chaleur air-eau',
            texte:
              "Elle chauffe l'eau de vos radiateurs ou de votre plancher chauffant à partir des calories de l'air extérieur. Une bonne solution pour remplacer une chaudière fioul ou gaz.",
          },
        ],
      },
      {
        h2: 'Pour les particuliers',
        paras: [
          "Nous vous conseillons l'appareil adapté à votre logement : surface, exposition, isolation, nombre de pièces. Nous choisissons avec vous l'emplacement des unités pour qu'elles soient efficaces, silencieuses et discrètes, aussi bien à l'intérieur que sur la façade ou le balcon.",
          "Dans une maison ancienne du Beaujolais comme dans un appartement récent de Villefranche, nous faisons passer les liaisons proprement, dans une goulotte, dans un doublage ou dans les combles. Si votre installation électrique doit être reprise, nous le faisons dans le même chantier.",
        ],
      },
      {
        h2: 'Pour les professionnels',
        paras: [
          "Bureaux, commerces, cabinets, salles d'attente, locaux d'activité : un local trop chaud l'été fatigue vos équipes et fait fuir vos clients. Nous installons des climatisations adaptées aux locaux professionnels, en cassette, en gainable ou en multi-split, dans la région de Villefranche-sur-Saône et dans tout le Rhône.",
          "Nous intervenons en site occupé, en dehors des heures d'ouverture si besoin, et nous coordonnons les autres travaux (faux plafonds, électricité, peinture) pour que vos locaux soient livrés prêts à l'emploi.",
        ],
      },
      {
        h2: "L'entretien de votre climatisation",
        paras: [
          "Une climatisation bien entretenue consomme moins, dure plus longtemps et souffle un air sain. Nous nettoyons les filtres et les échangeurs, contrôlons le bon fonctionnement et l'évacuation des condensats. Nous assurons aussi le dépannage des installations existantes autour de Villefranche.",
        ],
      },
    ],
    etapes: [
      ['Visite et conseil', 'Nous venons chez vous, mesurons les pièces et vous conseillons le bon système.'],
      ['Devis gratuit et détaillé', 'Appareil, emplacements, travaux annexes : tout est écrit, sans surprise.'],
      ['Installation', "Pose des unités, des liaisons et de l'alimentation électrique, en général en une à deux journées pour un appartement."],
      ['Mise en service', 'Réglages, essais et prise en main de la télécommande ou de l\'application avec vous.'],
    ],
    faq: [
      {
        q: 'Combien coûte une climatisation réversible ?',
        a: "Le prix dépend du nombre de pièces, de la puissance, du type d'appareil (mural, gainable, multi-split) et de la longueur des liaisons. Nous établissons un devis gratuit et détaillé après une visite, pour vous donner un prix exact plutôt qu'une estimation.",
      },
      {
        q: 'Une climatisation fait-elle du bruit ?',
        a: "Les appareils récents sont très silencieux : à faible vitesse, une unité intérieure murmure à peine. Nous choisissons l'emplacement de l'unité extérieure pour limiter le bruit chez vous et chez vos voisins.",
      },
      {
        q: 'Est-ce que ça consomme beaucoup d\'électricité ?',
        a: "Une climatisation réversible produit plusieurs kilowattheures de chaleur ou de fraîcheur pour un kilowattheure d'électricité consommé. En mode chauffage, elle consomme donc nettement moins que des radiateurs électriques classiques.",
      },
      {
        q: 'Quels sont les délais pour installer une climatisation ?',
        a: "Comptez en général une à deux journées de travaux pour un appartement, davantage pour un gainable ou une maison entière. Les délais avant intervention dépendent de la saison : pensez à nous contacter dès le printemps pour être équipé avant l'été.",
      },
      {
        q: 'Faut-il une autorisation pour poser une unité extérieure ?',
        a: "En copropriété, l'accord de l'assemblée générale est souvent nécessaire pour poser une unité en façade ou sur un balcon. En maison, une déclaration préalable peut être demandée par la mairie selon l'emplacement. Nous vous indiquons les démarches lors de la visite.",
      },
      {
        q: 'Intervenez-vous pour l\'entretien et le dépannage ?',
        a: "Oui. Nous entretenons et dépannons les climatisations à Villefranche-sur-Saône, Limas, Gleizé, Anse et dans tout le Beaujolais. Un entretien régulier est conseillé pour garder un appareil performant.",
      },
    ],
    liens: ['electricien-villefranche-sur-saone', 'isolation-villefranche-sur-saone', 'professionnels'],
  },

  {
    slug: 'platrerie-villefranche-sur-saone',
    nom: 'Plâtrerie',
    menu: 'Plâtrerie',
    form: 'platrerie',
    groupe: 2,
    couleur: 'vert',
    court: 'Cloisons, plafonds, doublages et faux plafonds.',
    photo: 'Pose de plaques de plâtre sur une ossature métallique',
    title: 'Plâtrier Villefranche-sur-Saône | Plâtrerie | MLS TRAVAUX',
    description:
      'Plâtrier à Villefranche-sur-Saône : cloisons, doublages, faux plafonds, bandes et finitions. Plâtrerie pour particuliers et pros. Devis gratuit.',
    h1: 'Plâtrier à Villefranche-sur-Saône',
    intro: [
      "Plâtrier à Villefranche-sur-Saône, MLS TRAVAUX réalise vos travaux de plâtrerie dans le Beaujolais et la région lyonnaise : création de cloisons, doublage des murs, faux plafonds, réparation de plafonds abîmés. La plâtrerie est l'un de nos métiers de base, celui qui donne à une pièce des murs droits et des finitions nettes.",
      "Nous enchaînons ensuite l'isolation et la peinture avec nos propres équipes. Vous évitez ainsi les temps morts entre deux artisans et les reprises mal raccordées.",
    ],
    prestations: {
      titre: 'Nos travaux de plâtrerie',
      items: [
        'Cloisons en plaques de plâtre pour redistribuer un logement ou créer une pièce',
        'Doublage des murs, avec ou sans isolant',
        'Faux plafonds et plafonds suspendus, avec intégration de spots',
        'Coffrages de gaines, de poutres ou de tuyaux',
        'Plâtrerie traditionnelle et réparation de plafonds fissurés',
        'Bandes, enduits et finitions prêtes à peindre',
        'Plaques hydrofuges pour salles de bain, plaques phoniques et coupe-feu',
      ],
    },
    sections: [
      {
        h2: 'Redessiner vos pièces',
        paras: [
          "Créer une chambre en plus, fermer une mezzanine, séparer une cuisine du séjour ou au contraire ouvrir un espace : les cloisons en plaques de plâtre permettent de transformer un logement rapidement et proprement. En plaquiste expérimenté, nous posons l'ossature, les plaques et les huisseries de portes, puis nous traitons les joints jusqu'à obtenir une surface parfaitement lisse.",
        ],
      },
      {
        h2: 'Plafonds et faux plafonds',
        paras: [
          "Un faux plafond cache des réseaux, baisse une hauteur sous plafond trop importante, améliore l'isolation phonique et permet d'intégrer un éclairage moderne. Dans les maisons anciennes du Beaujolais, nous reprenons aussi les plafonds fissurés ou affaissés.",
        ],
      },
      {
        h2: 'Pour les locaux professionnels',
        paras: [
          "Cloisonnement de bureaux, création de salles de réunion, faux plafonds démontables, aménagement de commerces : nous intervenons rapidement, en limitant la poussière et la gêne pour votre activité.",
        ],
      },
    ],
    etapes: [
      ['Visite', 'Nous prenons les mesures et discutons de votre projet sur place.'],
      ['Devis gratuit', 'Surfaces, types de plaques, finitions : tout est détaillé.'],
      ['Travaux', 'Ossature, plaques, isolation si besoin, bandes et enduits.'],
      ['Finitions', 'Murs prêts à peindre, ou peinture réalisée par nos équipes.'],
    ],
    faq: [
      {
        q: 'Plâtrier ou plaquiste, quelle différence ?',
        a: "Le plaquiste pose des plaques de plâtre sur une ossature. Le plâtrier travaille aussi le plâtre traditionnel et les enduits. Chez MLS TRAVAUX, nous faisons les deux.",
      },
      {
        q: 'Combien de temps faut-il pour monter une cloison ?',
        a: "Pour une cloison de chambre, comptez en général deux à trois jours, séchage des bandes compris, avant de pouvoir peindre.",
      },
      {
        q: 'Peut-on isoler en même temps ?',
        a: "Oui, c'est même le bon moment. Nous plaçons un isolant thermique ou phonique dans la cloison ou derrière le doublage. Voir notre page isolation.",
      },
      {
        q: 'Est-ce que les travaux font beaucoup de poussière ?',
        a: "La découpe des plaques et le ponçage produisent de la poussière. Nous protégeons les sols et les meubles et nettoyons chaque fin de journée.",
      },
    ],
    liens: ['isolation-villefranche-sur-saone', 'peintre-villefranche-sur-saone', 'renovation-cle-en-main'],
  },

  {
    slug: 'isolation-villefranche-sur-saone',
    nom: 'Isolation',
    menu: 'Isolation',
    form: 'isolation',
    groupe: 2,
    couleur: 'vert',
    court: 'Combles, murs, isolation phonique.',
    photo: 'Isolation des combles avec laine minérale',
    title: 'Isolation maison Villefranche-sur-Saône | MLS TRAVAUX',
    description:
      'Isolation de maison à Villefranche-sur-Saône : combles, murs par l\'intérieur, isolation phonique. Moins de dépenses, plus de confort. Devis gratuit.',
    h1: 'Isolation de maison à Villefranche-sur-Saône',
    intro: [
      "Une bonne isolation de maison à Villefranche-sur-Saône, c'est un logement plus frais l'été, plus chaud l'hiver et des factures de chauffage qui baissent. MLS TRAVAUX isole vos combles, vos murs par l'intérieur et vos planchers, dans tout le Beaujolais et la région lyonnaise.",
      "L'isolation est l'un de nos grands métiers. Elle se combine naturellement avec la plâtrerie, que nous réalisons nous-mêmes : un seul chantier, une seule équipe, un résultat propre.",
    ],
    prestations: {
      titre: "Nos travaux d'isolation",
      items: [
        'Isolation des combles perdus par soufflage',
        'Isolation des combles aménagés (rampants) sous plaques de plâtre',
        "Isolation des murs par l'intérieur avec doublage",
        'Isolation phonique entre pièces ou entre logements',
        'Isolation des planchers et des plafonds de cave ou de garage',
        "Traitement des ponts thermiques autour des fenêtres",
      ],
    },
    sections: [
      {
        h2: 'Commencer par les combles',
        paras: [
          "Une grande partie de la chaleur s'échappe par le toit. Isoler les combles est souvent le chantier le plus rentable : rapide, peu salissant et efficace dès le premier hiver. Pour des combles perdus, l'isolant est soufflé en épaisseur régulière. Pour des combles aménagés, nous posons l'isolant entre et sous les chevrons, puis un parement en plaques de plâtre.",
        ],
      },
      {
        h2: "Isoler les murs par l'intérieur",
        paras: [
          "Les murs en pierre ou en pisé des maisons du Beaujolais sont souvent froids. Un doublage isolant améliore nettement le confort, tout en offrant des murs neufs, droits et prêts à peindre. Nous choisissons l'isolant et son épaisseur en fonction de la surface habitable que vous acceptez de perdre et du type de mur.",
        ],
      },
      {
        h2: 'Isolation phonique',
        paras: [
          "Bruit de la rue, voisins, chambre d'enfant collée au séjour : une isolation phonique bien conçue change la vie. Nous utilisons des plaques et des isolants acoustiques adaptés, en appartement à Villefranche ou à Lyon comme en maison.",
        ],
      },
    ],
    etapes: [
      ['Diagnostic', 'Nous repérons les points faibles de votre logement lors de la visite.'],
      ['Devis gratuit', 'Isolant, épaisseur, surfaces et finitions sont détaillés.'],
      ['Pose', "Isolant, pare-vapeur et parement, dans les règles de l'art."],
      ['Finitions', 'Bandes, enduits et peinture si vous le souhaitez.'],
    ],
    faq: [
      {
        q: 'Quelle isolation choisir pour les combles ?',
        a: "Pour des combles perdus, le soufflage de laine est rapide et économique. Pour des combles aménagés, on isole les rampants sous plaques de plâtre. Nous vous conseillons lors de la visite.",
      },
      {
        q: "L'isolation par l'intérieur fait-elle perdre beaucoup de place ?",
        a: "Comptez une dizaine de centimètres d'épaisseur sur les murs isolés, selon l'isolant choisi. Nous recherchons le meilleur compromis entre confort et surface.",
      },
      {
        q: 'Peut-on habiter le logement pendant les travaux ?',
        a: "Oui dans la plupart des cas. Nous travaillons pièce par pièce et protégeons vos affaires.",
      },
      {
        q: "L'isolation aide-t-elle aussi l'été ?",
        a: "Oui. Une maison bien isolée garde la fraîcheur plus longtemps. Associée à une climatisation, elle permet un appareil moins puissant et moins gourmand.",
      },
    ],
    liens: ['platrerie-villefranche-sur-saone', 'climatisation-villefranche-sur-saone', 'pose-menuiseries-villefranche-sur-saone'],
  },

  {
    slug: 'peintre-villefranche-sur-saone',
    nom: 'Peinture',
    menu: 'Peinture',
    form: 'peinture',
    groupe: 2,
    couleur: 'vert',
    court: 'Peinture intérieure, finitions soignées, revêtements muraux.',
    photo: 'Peintre appliquant une peinture claire au rouleau',
    title: 'Peintre en bâtiment Villefranche-sur-Saône | MLS TRAVAUX',
    description:
      'Peintre en bâtiment à Villefranche-sur-Saône : peinture intérieure, plafonds, boiseries, locaux professionnels. Finitions soignées. Devis gratuit.',
    h1: 'Peintre en bâtiment à Villefranche-sur-Saône',
    intro: [
      "Peintre en bâtiment à Villefranche-sur-Saône, MLS TRAVAUX réalise vos travaux de peinture intérieure à Limas, Gleizé, Anse et dans tout le Beaujolais. Murs, plafonds, boiseries, cages d'escalier : nous préparons soigneusement les supports pour un résultat net et durable.",
      "La qualité d'une peinture se joue avant même d'ouvrir le pot : rebouchage, ponçage, sous-couche. C'est cette préparation que nous ne bâclons jamais.",
    ],
    prestations: {
      titre: 'Nos travaux de peinture',
      items: [
        'Peinture des murs et plafonds, finitions mate, velours ou satinée',
        'Préparation des supports : lessivage, rebouchage, enduit, ponçage',
        'Peinture des boiseries, portes, plinthes et radiateurs',
        'Pose de toile de verre, papier peint et revêtements muraux',
        'Peinture de cages d\'escalier et de parties communes',
        'Peinture de locaux professionnels, bureaux et commerces',
        'Peinture extérieure de volets, portails et menuiseries',
      ],
    },
    sections: [
      {
        h2: 'Une préparation soignée',
        paras: [
          "Nous protégeons d'abord vos sols et vos meubles. Ensuite viennent le lessivage, le rebouchage des trous et fissures, les enduits et le ponçage. Une sous-couche adaptée garantit l'accroche et une teinte homogène. Les deux couches de finition sont alors appliquées dans les règles.",
        ],
      },
      {
        h2: 'Conseils de couleurs et de finitions',
        paras: [
          "Mat pour un plafond sans reflet, velours pour un séjour, satiné pour une cuisine ou une salle de bain : nous vous aidons à choisir la bonne finition et des teintes qui s'accordent avec votre lumière et votre mobilier.",
        ],
      },
      {
        h2: 'Peinture de locaux professionnels',
        paras: [
          "Bureaux, commerces, cabinets médicaux, salles de réunion : nous repeignons vos locaux en site occupé ou en dehors de vos horaires, avec des peintures à faible odeur pour une reprise d'activité rapide.",
        ],
      },
    ],
    etapes: [
      ['Visite', 'Nous évaluons l\'état des supports et les surfaces.'],
      ['Devis gratuit', 'Préparation, produits et nombre de couches sont précisés.'],
      ['Préparation', 'Protection, rebouchage, enduits, ponçage, sous-couche.'],
      ['Finition', 'Deux couches, nettoyage et vérification avec vous.'],
    ],
    faq: [
      {
        q: 'Combien de temps pour repeindre une pièce ?',
        a: "Pour une chambre en bon état, comptez deux à trois jours avec la préparation et le séchage. Les supports abîmés demandent davantage.",
      },
      {
        q: 'Fournissez-vous la peinture ?',
        a: "Oui. Nous utilisons des peintures professionnelles de qualité. Vous pouvez aussi nous indiquer une marque ou une teinte précise.",
      },
      {
        q: 'Peut-on rester chez soi pendant les travaux ?',
        a: "Oui. Nous travaillons pièce par pièce, avec des peintures à faible odeur, et libérons chaque pièce au plus vite.",
      },
      {
        q: 'Faites-vous les plafonds abîmés ?',
        a: "Oui. Nous reprenons les fissures et, si besoin, le plâtre ou le placo avant de peindre. Voir notre page plâtrerie.",
      },
    ],
    liens: ['platrerie-villefranche-sur-saone', 'renovation-cle-en-main', 'professionnels'],
  },

  {
    slug: 'plombier-villefranche-sur-saone',
    nom: 'Plomberie',
    menu: 'Plomberie',
    form: 'plomberie',
    groupe: 2,
    couleur: 'magenta',
    court: 'Salles de bain, sanitaires, chauffe-eau.',
    photo: 'Salle de bain rénovée avec douche à l\'italienne',
    title: 'Plombier Villefranche-sur-Saône | Salle de bain | MLS TRAVAUX',
    description:
      'Plombier à Villefranche-sur-Saône : rénovation de salle de bain, douche à l\'italienne, sanitaires, chauffe-eau. Clé en main. Devis gratuit.',
    h1: 'Plombier à Villefranche-sur-Saône',
    intro: [
      "Plombier à Villefranche-sur-Saône et à Limas, MLS TRAVAUX réalise vos travaux de plomberie et la rénovation complète de votre salle de bain dans le Beaujolais et la région lyonnaise : alimentation, évacuations, sanitaires, chauffe-eau.",
      "Une salle de bain, c'est de la plomberie, mais aussi de l'électricité, de la plâtrerie hydrofuge, du carrelage et de la peinture. Nous faisons tout, ce qui vous évite de coordonner quatre artisans.",
    ],
    prestations: {
      titre: 'Nos travaux de plomberie',
      items: [
        'Rénovation complète de salle de bain, clé en main',
        'Remplacement d\'une baignoire par une douche à l\'italienne',
        'Pose de lavabos, meubles vasques, WC suspendus et robinetterie',
        'Création ou déplacement d\'arrivées d\'eau et d\'évacuations',
        'Installation et remplacement de chauffe-eau et ballons thermodynamiques',
        'Raccordement des cuisines et de l\'électroménager',
        'Remplacement de canalisations anciennes',
      ],
    },
    sections: [
      {
        h2: 'Rénovation de salle de bain',
        paras: [
          "Nous rénovons votre salle de bain de A à Z : dépose de l'ancienne, reprise des réseaux, cloisons hydrofuges, étanchéité, carrelage, meubles, éclairage et ventilation. Vous validez les plans et les matériaux, nous gérons le chantier jusqu'à la remise des clés.",
        ],
      },
      {
        h2: 'Douche à l\'italienne et accessibilité',
        paras: [
          "Remplacer une baignoire par une douche de plain-pied rend la salle de bain plus pratique, plus sûre et plus moderne. Nous soignons particulièrement l'étanchéité sous carrelage et les pentes d'évacuation, qui font la durée de vie de ce type de douche.",
        ],
      },
      {
        h2: 'Chauffe-eau',
        paras: [
          "Chauffe-eau électrique, ballon thermodynamique, remplacement d'un appareil en fin de vie : nous dimensionnons le ballon selon votre famille et votre logement, et nous évacuons l'ancien.",
        ],
      },
    ],
    etapes: [
      ['Visite', 'Nous étudions vos réseaux et vos envies sur place.'],
      ['Devis gratuit', 'Plomberie, carrelage, électricité : tout est chiffré ensemble.'],
      ['Travaux', 'Un seul planning, une seule équipe coordonnée.'],
      ['Mise en eau', 'Essais, contrôle des fuites et nettoyage complet.'],
    ],
    faq: [
      {
        q: 'Combien de temps dure la rénovation d\'une salle de bain ?',
        a: "Comptez en général deux à trois semaines pour une salle de bain complète, selon la taille et les travaux de plomberie à reprendre.",
      },
      {
        q: 'Peut-on installer une douche à l\'italienne partout ?',
        a: "Presque partout, mais l'évacuation demande une pente suffisante. En appartement, une douche extra-plate ou une pompe de relevage peut être nécessaire. Nous vérifions lors de la visite.",
      },
      {
        q: 'Intervenez-vous pour une simple fuite ?',
        a: "Nos équipes sont surtout organisées pour les travaux de rénovation et d'installation. Appelez-nous pour en parler : nous vous dirons rapidement si nous pouvons intervenir.",
      },
      {
        q: 'Vous occupez-vous aussi du carrelage ?',
        a: "Oui, nous posons carrelage et faïence. Voir notre page carrelage.",
      },
    ],
    liens: ['carreleur-villefranche-sur-saone', 'renovation-cuisine-villefranche-sur-saone', 'electricien-villefranche-sur-saone'],
  },

  {
    slug: 'electricien-villefranche-sur-saone',
    nom: 'Électricité',
    menu: 'Électricité',
    form: 'electricite',
    groupe: 2,
    couleur: 'bleu',
    court: 'Rénovation électrique, tableau, mise aux normes.',
    photo: 'Tableau électrique neuf et bien organisé',
    title: 'Électricien Villefranche-sur-Saône | Rénovation | MLS TRAVAUX',
    description:
      'Électricien à Villefranche-sur-Saône : rénovation électrique, tableau, mise aux normes, éclairage, borne de recharge. Particuliers et pros. Devis gratuit.',
    h1: 'Électricien à Villefranche-sur-Saône',
    intro: [
      "Électricien à Villefranche-sur-Saône, MLS TRAVAUX rénove et met aux normes les installations électriques des maisons, des appartements et des locaux professionnels, à Limas, dans le Beaujolais et dans la région lyonnaise.",
      "Une installation ancienne peut être dangereuse et ne supporte pas toujours les équipements d'aujourd'hui. Nous la remettons à niveau, en profitant des autres travaux pour passer les câbles proprement dans les cloisons et les plafonds.",
    ],
    prestations: {
      titre: "Nos travaux d'électricité",
      items: [
        'Rénovation électrique complète d\'une maison ou d\'un appartement',
        'Remplacement et mise aux normes du tableau électrique',
        'Ajout de prises, d\'interrupteurs et de circuits dédiés',
        'Éclairage intérieur et extérieur, spots encastrés, LED',
        'Alimentation des climatisations, pompes à chaleur et chauffe-eau',
        'Installation de borne de recharge pour véhicule électrique',
        'Électricité de locaux professionnels et de commerces',
      ],
    },
    sections: [
      {
        h2: 'Mise aux normes électrique',
        paras: [
          "Tableau ancien, absence de terre, prises sans protection, fusibles en porcelaine : ces signes montrent qu'une installation n'est plus adaptée. Nous la remettons en sécurité selon la norme en vigueur (NF C 15-100) : protection différentielle, mise à la terre, circuits adaptés à vos équipements.",
        ],
      },
      {
        h2: 'Une rénovation électrique sans tout casser',
        paras: [
          "Comme nous sommes aussi plâtriers et peintres, nous faisons passer les câbles dans les doublages, les faux plafonds ou des saignées que nous rebouchons ensuite. Les murs sont rendus propres, prêts à peindre ou déjà repeints.",
        ],
      },
      {
        h2: 'Borne de recharge',
        paras: [
          "Nous installons votre borne de recharge à domicile avec une ligne dédiée et les protections adaptées, en maison ou en parking privatif.",
        ],
      },
    ],
    etapes: [
      ['Diagnostic', 'Nous contrôlons votre installation et notons vos besoins.'],
      ['Devis gratuit', 'Points à reprendre, matériel et finitions sont détaillés.'],
      ['Travaux', 'Coupures limitées et chantier propre.'],
      ['Essais', 'Contrôle de chaque circuit et explications du tableau.'],
    ],
    faq: [
      {
        q: 'Comment savoir si mon installation est dangereuse ?',
        a: "Disjonctions fréquentes, prises qui chauffent, absence de prise de terre, tableau à fusibles : ce sont des signes d'alerte. Nous pouvons venir faire un état des lieux.",
      },
      {
        q: 'Faut-il refaire toute l\'installation ?',
        a: "Pas toujours. Le remplacement du tableau et la mise à la terre suffisent parfois. Nous vous proposons ce qui est vraiment nécessaire.",
      },
      {
        q: 'Peut-on rester chez soi pendant une rénovation électrique ?',
        a: "Oui, en général. Nous organisons le chantier pour limiter les coupures de courant.",
      },
      {
        q: 'Installez-vous l\'alimentation d\'une climatisation ?',
        a: "Oui, et nous installons aussi la climatisation elle-même. Voir notre page climatisation.",
      },
    ],
    liens: ['climatisation-villefranche-sur-saone', 'panneaux-solaires-villefranche-sur-saone', 'renovation-cle-en-main'],
  },

  {
    slug: 'renovation-cle-en-main',
    nom: 'Rénovation clé en main',
    menu: 'Rénovation clé en main',
    form: 'renovation',
    groupe: 3,
    couleur: 'jaune',
    court: 'Maison, appartement ou local : un seul interlocuteur du début à la fin.',
    photo: 'Appartement entièrement rénové, séjour ouvert sur la cuisine',
    title: 'Rénovation maison Villefranche-sur-Saône | Clé en main | MLS',
    description:
      'Rénovation de maison et d\'appartement clé en main à Villefranche-sur-Saône et dans le Beaujolais. Tous corps d\'état, un seul interlocuteur. Devis gratuit.',
    h1: 'Rénovation de maison clé en main à Villefranche-sur-Saône',
    intro: [
      "Pour la rénovation de votre maison à Villefranche-sur-Saône ou de votre appartement dans le Beaujolais, MLS TRAVAUX prend en charge l'ensemble du chantier : démolition, plâtrerie, isolation, électricité, plomberie, climatisation, carrelage, peinture, menuiseries.",
      "Vous n'avez qu'un seul interlocuteur, un seul devis et un seul planning. Nous coordonnons tous les métiers pour que le chantier avance sans temps mort, de la première visite à la remise des clés.",
    ],
    prestations: {
      titre: 'Ce que comprend une rénovation clé en main',
      items: [
        'Visite, prise de mesures et conseils d\'aménagement',
        'Devis global détaillé, poste par poste',
        'Démolition, évacuation des gravats',
        'Plâtrerie, isolation, électricité, plomberie, chauffage et climatisation',
        'Carrelage, sols, peinture, menuiseries et cuisine',
        'Coordination de tous les métiers et suivi de chantier',
        'Réception des travaux et levée des réserves',
      ],
    },
    sections: [
      {
        h2: 'Maisons, appartements et locaux',
        paras: [
          "Maison de village en pierre dorée, pavillon des années 70, appartement en centre-ville de Villefranche ou à Lyon, local commercial : chaque bâtiment a ses contraintes. Nous adaptons les solutions à votre bien et à votre budget, en neuf comme en rénovation.",
        ],
      },
      {
        h2: 'Pourquoi un interlocuteur unique ?',
        paras: [
          "Avec plusieurs artisans, chacun attend l'autre et personne n'est responsable des raccords. Avec MLS TRAVAUX, une seule entreprise est responsable de l'ensemble. Les délais sont mieux tenus, les finitions sont cohérentes et vous savez toujours qui appeler.",
        ],
      },
    ],
    etapes: [
      ['Visite et projet', 'Nous écoutons vos besoins et vous conseillons.'],
      ['Devis global', 'Un document unique, détaillé par métier.'],
      ['Chantier coordonné', 'Un planning clair, un point régulier avec vous.'],
      ['Remise des clés', 'Visite de fin de chantier et logement prêt à vivre.'],
    ],
    faq: [
      {
        q: 'Combien coûte une rénovation complète ?',
        a: "Le budget dépend de la surface, de l'état du bien et du niveau de finition. Après la visite, nous établissons un devis gratuit et détaillé poste par poste.",
      },
      {
        q: 'Combien de temps dure une rénovation de maison ?',
        a: "De quelques semaines pour un appartement à plusieurs mois pour une maison entière. Le planning est fixé avec vous avant le démarrage.",
      },
      {
        q: 'Travaillez-vous avec des architectes ?',
        a: "Oui, nous pouvons réaliser les travaux d'un projet conçu par votre architecte ou votre décorateur.",
      },
    ],
    liens: ['platrerie-villefranche-sur-saone', 'renovation-cuisine-villefranche-sur-saone', 'professionnels'],
  },

  {
    slug: 'renovation-cuisine-villefranche-sur-saone',
    nom: 'Cuisines',
    menu: 'Cuisines',
    form: 'cuisine',
    groupe: 3,
    couleur: 'magenta',
    court: 'Rénovation et pose de cuisine, raccordements compris.',
    photo: 'Cuisine moderne rénovée avec plan de travail clair',
    title: 'Rénovation cuisine Villefranche-sur-Saône | MLS TRAVAUX',
    description:
      'Rénovation et pose de cuisine à Villefranche-sur-Saône : meubles, plomberie, électricité, crédence, peinture. Un seul artisan. Devis gratuit.',
    h1: 'Rénovation de cuisine à Villefranche-sur-Saône',
    intro: [
      "MLS TRAVAUX assure la rénovation de votre cuisine à Villefranche-sur-Saône et dans le Beaujolais : dépose de l'ancienne, reprise de la plomberie et de l'électricité, pose des meubles, plan de travail, crédence, carrelage et peinture.",
      "Que vous ayez acheté votre cuisine dans une enseigne ou chez un cuisiniste, nous la posons et nous réalisons tous les travaux autour.",
    ],
    prestations: {
      titre: 'Nos travaux de cuisine',
      items: [
        'Dépose de l\'ancienne cuisine et évacuation',
        'Déplacement des arrivées d\'eau et des évacuations',
        'Circuits électriques dédiés (plaque, four, lave-vaisselle) et éclairage',
        'Pose des meubles, du plan de travail et de l\'électroménager',
        'Crédence, carrelage mural et sol',
        'Ouverture de cloison pour une cuisine ouverte',
        'Peinture et finitions',
      ],
    },
    sections: [
      {
        h2: 'Ouvrir la cuisine sur le séjour',
        paras: [
          "Ouvrir une cloison pour créer une cuisine ouverte change complètement un logement. Nous vérifions si le mur est porteur, réalisons l'ouverture, reprenons les sols, les plafonds et l'électricité pour un résultat homogène.",
        ],
      },
    ],
    etapes: [
      ['Visite', 'Mesures, contraintes techniques et envies.'],
      ['Devis gratuit', 'Pose et travaux annexes détaillés.'],
      ['Préparation', 'Réseaux, murs et sols prêts pour la pose.'],
      ['Pose et finitions', 'Meubles, raccordements, crédence et peinture.'],
    ],
    faq: [
      {
        q: 'Posez-vous une cuisine achetée en magasin ?',
        a: "Oui. Nous posons les cuisines achetées en grande surface de bricolage, en enseigne spécialisée ou chez un cuisiniste.",
      },
      {
        q: 'Combien de temps dure la rénovation d\'une cuisine ?',
        a: "Comptez en général une à deux semaines selon les travaux de plomberie, d'électricité et de carrelage.",
      },
      {
        q: 'Peut-on abattre une cloison pour ouvrir la cuisine ?',
        a: "Oui, après vérification. Un mur porteur demande une étude et un renfort ; nous vous l'indiquons lors de la visite.",
      },
    ],
    liens: ['plombier-villefranche-sur-saone', 'carreleur-villefranche-sur-saone', 'electricien-villefranche-sur-saone'],
  },

  {
    slug: 'carreleur-villefranche-sur-saone',
    nom: 'Carrelage',
    menu: 'Carrelage',
    form: 'carrelage',
    groupe: 3,
    couleur: 'magenta',
    court: 'Sols, faïence, grands formats.',
    photo: 'Pose de carrelage grand format au sol',
    title: 'Carreleur Villefranche-sur-Saône | Pose carrelage | MLS',
    description:
      'Carreleur à Villefranche-sur-Saône : pose de carrelage au sol, faïence, grands formats, salle de bain et cuisine. Finitions soignées. Devis gratuit.',
    h1: 'Carreleur à Villefranche-sur-Saône',
    intro: [
      "Carreleur à Villefranche-sur-Saône, MLS TRAVAUX pose votre carrelage au sol et votre faïence murale dans les salles de bain, cuisines, séjours et locaux professionnels du Beaujolais et de la région lyonnaise.",
      "Un beau carrelage repose sur un support plan et des coupes nettes. Nous préparons les sols, réalisons les ragréages et soignons les joints et les finitions.",
    ],
    prestations: {
      titre: 'Nos travaux de carrelage',
      items: [
        'Pose de carrelage au sol, y compris grands formats',
        'Faïence murale de salle de bain et de cuisine',
        'Douches à l\'italienne carrelées avec étanchéité',
        'Ragréage et préparation des sols',
        'Dépose d\'ancien carrelage',
        'Plinthes, seuils et finitions',
      ],
    },
    sections: [
      {
        h2: 'Grands formats et effets matière',
        paras: [
          "Les carreaux grand format, effet béton, pierre ou bois, donnent une allure contemporaine mais demandent un support parfaitement plan et une pose précise. Nous les posons avec le matériel adapté pour un rendu sans décalage.",
        ],
      },
    ],
    etapes: [
      ['Visite', 'Contrôle du support et des surfaces.'],
      ['Devis gratuit', 'Préparation, pose et finitions chiffrées.'],
      ['Préparation', 'Dépose, ragréage, étanchéité si nécessaire.'],
      ['Pose', 'Calepinage, coupes, joints et nettoyage.'],
    ],
    faq: [
      {
        q: 'Peut-on poser du carrelage sur un ancien carrelage ?',
        a: "Souvent oui, si l'ancien est sain et bien collé, avec un primaire adapté. Nous vérifions lors de la visite.",
      },
      {
        q: 'Fournissez-vous le carrelage ?',
        a: "Nous pouvons le fournir ou poser celui que vous avez choisi. Nous vous conseillons sur les quantités et les formats.",
      },
      {
        q: 'Combien de temps avant de marcher sur le carrelage ?',
        a: "En général 24 à 48 heures selon la colle et les joints utilisés.",
      },
    ],
    liens: ['plombier-villefranche-sur-saone', 'renovation-cuisine-villefranche-sur-saone', 'renovation-cle-en-main'],
  },

  {
    slug: 'pose-menuiseries-villefranche-sur-saone',
    nom: 'Menuiseries',
    menu: 'Menuiseries',
    form: 'menuiseries',
    groupe: 3,
    couleur: 'jaune',
    court: 'Fenêtres, portes intérieures et porte d\'entrée.',
    photo: 'Fenêtre neuve en double vitrage posée dans une maison',
    title: 'Pose fenêtres Villefranche-sur-Saône | Menuiseries | MLS',
    description:
      'Pose de fenêtres, portes intérieures et portes d\'entrée à Villefranche-sur-Saône et dans le Beaujolais. Finitions intérieures comprises. Devis gratuit.',
    h1: 'Pose de fenêtres et menuiseries à Villefranche-sur-Saône',
    intro: [
      "MLS TRAVAUX assure la pose de fenêtres à Villefranche-sur-Saône et dans le Beaujolais, ainsi que la pose de portes intérieures et de portes d'entrée. Des menuiseries neuves améliorent l'isolation, la sécurité et l'allure de votre logement.",
      "Nous réalisons aussi les finitions autour : reprise des tableaux en plâtrerie, isolation des jonctions, peinture.",
    ],
    prestations: {
      titre: 'Nos travaux de menuiserie',
      items: [
        'Remplacement de fenêtres et portes-fenêtres, PVC, aluminium ou bois',
        'Pose de portes d\'entrée',
        'Pose de portes intérieures et de blocs-portes',
        'Volets roulants',
        'Reprise des tableaux, isolation et finitions intérieures',
      ],
    },
    sections: [
      {
        h2: 'Des fenêtres qui isolent vraiment',
        paras: [
          "Une fenêtre performante mal posée laisse passer l'air. Nous soignons l'étanchéité entre la menuiserie et le mur, puis nous refaisons les finitions intérieures pour un résultat propre.",
        ],
      },
    ],
    etapes: [
      ['Visite', 'Prise de cotes précise de chaque ouverture.'],
      ['Devis gratuit', 'Matériau, vitrage, pose et finitions.'],
      ['Pose', 'Dépose, pose et étanchéité dans la journée par fenêtre.'],
      ['Finitions', 'Tableaux, joints et peinture.'],
    ],
    faq: [
      {
        q: 'PVC, aluminium ou bois ?',
        a: "Le PVC est économique et isolant, l'aluminium fin et moderne, le bois chaleureux. Nous vous conseillons selon votre maison et votre budget.",
      },
      {
        q: 'Faut-il une autorisation pour changer ses fenêtres ?',
        a: "Si l'aspect extérieur change (couleur, matériau, découpage), une déclaration préalable en mairie est souvent nécessaire. Nous vous le signalons.",
      },
      {
        q: 'Combien de temps pour poser une fenêtre ?',
        a: "En général une demi-journée à une journée par fenêtre, finitions comprises.",
      },
    ],
    liens: ['isolation-villefranche-sur-saone', 'peintre-villefranche-sur-saone', 'renovation-cle-en-main'],
  },

  {
    slug: 'panneaux-solaires-villefranche-sur-saone',
    nom: 'Panneaux solaires',
    menu: 'Panneaux solaires',
    form: 'solaire',
    groupe: 3,
    couleur: 'jaune',
    court: 'Installation photovoltaïque pour produire votre électricité.',
    photo: 'Panneaux solaires sur une toiture en tuiles',
    title: 'Installation panneaux solaires Villefranche-sur-Saône | MLS',
    description:
      'Installation de panneaux solaires photovoltaïques à Villefranche-sur-Saône et dans le Beaujolais pour l\'autoconsommation. Étude et devis gratuits.',
    h1: 'Installation de panneaux solaires à Villefranche-sur-Saône',
    intro: [
      "MLS TRAVAUX réalise l'installation de panneaux solaires à Villefranche-sur-Saône, dans le Beaujolais et dans le Rhône. Produire votre propre électricité permet de réduire votre facture, surtout si vous consommez en journée.",
      "Électriciens de métier, nous réalisons aussi le raccordement à votre tableau et les adaptations nécessaires de votre installation.",
    ],
    prestations: {
      titre: 'Notre accompagnement',
      items: [
        'Étude de votre toiture, de son orientation et de votre consommation',
        'Dimensionnement de l\'installation',
        'Pose des panneaux et de l\'onduleur',
        'Raccordement électrique et mise en service',
        'Conseils pour consommer au bon moment',
      ],
    },
    sections: [
      {
        h2: "L'autoconsommation, comment ça marche ?",
        paras: [
          "Les panneaux produisent de l'électricité en journée. Elle est consommée en priorité par votre maison : électroménager, chauffe-eau, climatisation, voiture électrique. Le surplus peut être revendu ou stocké selon l'installation choisie.",
        ],
      },
    ],
    etapes: [
      ['Étude', 'Toiture, orientation, ombres et consommation.'],
      ['Devis gratuit', 'Puissance, matériel et production estimée.'],
      ['Installation', 'Pose en toiture et raccordement.'],
      ['Mise en service', 'Contrôle et explications du suivi de production.'],
    ],
    faq: [
      {
        q: 'Ma toiture convient-elle ?',
        a: "Une toiture orientée sud, sud-est ou sud-ouest, sans ombre importante, est idéale. Nous vérifions lors de l'étude.",
      },
      {
        q: 'Les panneaux solaires sont-ils rentables ?',
        a: "Cela dépend de votre consommation en journée, de l'orientation et du prix de l'électricité. Nous vous présentons une estimation honnête avant toute décision.",
      },
      {
        q: 'Faut-il une autorisation ?',
        a: "Une déclaration préalable en mairie est généralement nécessaire. Nous vous indiquons la démarche.",
      },
    ],
    liens: ['electricien-villefranche-sur-saone', 'climatisation-villefranche-sur-saone', 'isolation-villefranche-sur-saone'],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
