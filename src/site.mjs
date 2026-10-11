// Informations de l'entreprise, utilisées sur toutes les pages.
// Pour changer un numéro, une adresse ou un horaire : c'est ici, une seule fois.

export const site = {
  url: 'https://www.mlstravaux.fr',
  nom: 'MLS TRAVAUX',
  dirigeant: 'Stéphane LINGOIS',
  forme: 'SARL',
  adresse: { rue: '10 rue des Alouettes', cp: '69400', ville: 'Limas', pays: 'FR' },
  geo: { lat: 45.9744, lng: 4.7036 },
  telephone: '06 48 91 72 31',
  telephoneIntl: '+33648917231',
  email: 'contact@mlstravaux.fr',
  horaires: 'Du lundi au samedi, 8 h - 20 h',
  siret: '829 391 671 00015',
  tva: 'FR89829391671',
  decennale: { assureur: 'MIC Assurance', police: 'PRW2400376' },
  accroche: 'Votre interlocuteur unique pour une rénovation clés en main',
  sousTitre: 'Particuliers et professionnels',
  presentation:
    "MLS TRAVAUX est une entreprise de rénovation et de travaux du bâtiment. Basés près de Villefranche-sur-Saône, nous intervenons dans tout le Beaujolais, la région lyonnaise, le Val de Saône, le Rhône et l'Ain. Climatisation, plâtrerie, isolation, peinture, plomberie, électricité : nous coordonnons tous les corps de métier de votre chantier, en neuf comme en rénovation, de la première visite à la remise des clés.",
  zoneAffichee: ['Beaujolais', 'Région lyonnaise', 'Val de Saône', 'Rhône', 'Ain'],
  // Communes desservies : données structurées (areaServed) + rubrique discrète de la page L'entreprise.
  communes: [
    'Villefranche-sur-Saône', 'Limas', 'Gleizé', 'Arnas', 'Anse', 'Jassans-Riottier', 'Pommiers',
    'Lacenas', 'Denicé', 'Saint-Georges-de-Reneins', 'Trévoux', 'Belleville-en-Beaujolais',
    'Chazay-d\'Azergues', 'Quincieux', 'Neuville-sur-Saône', 'Lyon',
  ],
  // Clé Web3Forms du formulaire : à renseigner quand contact@mlstravaux.fr existera.
  web3formsKey: '',
};

// Couleur de chaque famille de métiers (charte : carreaux du logo).
export const couleurs = { bleu: '#0A72BA', vert: '#8BC43F', magenta: '#E5237A', jaune: '#F8C81E' };
