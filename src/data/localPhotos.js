// Photographies de lieux réels, sélectionnées dans Wikimedia Commons.
// Les fiches source contiennent la licence exacte et les conditions d'attribution.
// Ne pas confondre ces vues des villes avec des prestations MySelfieBooth réalisées sur place.
const files = {
  "savigny-le-temple": {
    "file": "La Grange château.jpg",
    "place": "Château de la Grange, Savigny-le-Temple",
    "author": "Tej"
  },
  "senart": {
    "file": "Carré Sénart - 2019-10-03 - IMG 3951.jpg",
    "place": "Centre commercial Carré Sénart, Lieusaint",
    "author": "Poudou99"
  },
  "melun": {
    "file": "Ile st etienne melun 2006.jpg",
    "place": "Île Saint-Étienne et collégiale Notre-Dame, Melun",
    "author": "Tej"
  },
  "lieusaint": {
    "file": "Lieusaint - 2019-04-17 - IMG 0303.jpg",
    "place": "Église Saint-Quintien de Lieusaint",
    "author": "Poudou99"
  },
  "cesson": {
    "file": "Mairie de cesson.jpg",
    "place": "Hôtel de ville de Cesson",
    "author": ""
  },
  "combs-la-ville": {
    "file": "Château de la Fresnaye à Combs-la-Ville.JPG",
    "place": "Château de la Fresnaye, Combs-la-Ville",
    "author": "Yulyan"
  },
  "fontainebleau": {
    "file": "Fontainebleau, aerial view of the castle.jpg",
    "place": "Château de Fontainebleau",
    "author": ""
  },
  "meaux": {
    "file": "Hôtel ville Meaux 4.jpg",
    "place": "Hôtel de ville de Meaux",
    "author": "Chabe01"
  },
  "marne-la-vallee": {
    "file": "Chateau Champs sur Marne.jpg",
    "place": "Château de Champs-sur-Marne, secteur de Marne-la-Vallée",
    "author": "Benh LIEU SONG"
  },
  "bussy-saint-georges": {
    "file": "Grand Place - Bussy-Saint-Georges (FR77) - 2025-07-31 - 1.jpg",
    "place": "Grand'Place de Bussy-Saint-Georges",
    "author": "Chabe01"
  },
  "pontault-combault": {
    "file": "Vue aérienne Pontault-Combault (2024).jpg",
    "place": "Vue aérienne de Pontault-Combault",
    "author": "Matgrt"
  },
  "evry-courcouronnes": {
    "file": "Cathédrale Résurrection Saint Corbinien - Évry-Courcouronnes (FR91) - 2026-08-15 - 1.jpg",
    "place": "Cathédrale de la Résurrection, Évry-Courcouronnes",
    "author": "Chabe01"
  },
  "corbeil-essonnes": {
    "file": "Seine rive droite à Corbeil. Vue vers le pont de Corbeil.jpg",
    "place": "Bords de Seine et pont de Corbeil",
    "author": "VVVCFFrance"
  },
  "massy": {
    "file": "Mairie de Massy (Essonne).jpg",
    "place": "Hôtel de ville de Massy",
    "author": "X-Javier"
  },
  "palaiseau-saclay": {
    "file": "Campus Ecole polytechnique de palaiseau.jpg",
    "place": "Campus de l'École polytechnique à Palaiseau",
    "author": "Collections École Polytechnique / Jérémy Barande"
  },
  "les-ulis": {
    "file": "Mairie des Ulis.jpg",
    "place": "Hôtel de ville des Ulis",
    "author": "Mairie des Ulis"
  },
  "boulogne-billancourt": {
    "file": "La Seine musicale.jpg",
    "place": "La Seine Musicale, Boulogne-Billancourt",
    "author": "JackyM59"
  },
  "issy-les-moulineaux": {
    "file": "Hôtel ville Issy Moulineaux 6.jpg",
    "place": "Hôtel de ville d'Issy-les-Moulineaux",
    "author": "Chabe01"
  },
  "nanterre": {
    "file": "Entrée 4 Paris Défense Arena - Nanterre (FR92) - 2022-07-24 - 1.jpg",
    "place": "Paris La Défense Arena, Nanterre",
    "author": "Chabe01"
  },
  "la-defense": {
    "file": "Grande Arche @ La Défense @ Paris (34797972140).jpg",
    "place": "Grande Arche de La Défense",
    "author": "Guilhem Vellut"
  },
  "saint-denis": {
    "file": "Stade France - Saint-Denis (FR93) - 2024-02-17 - 21.jpg",
    "place": "Stade de France, Saint-Denis",
    "author": "Chabe01"
  },
  "villepinte": {
    "file": "Parc Expositions Paris Nord Villepinte - Villepinte (FR93) - 2024-08-01 - 1.jpg",
    "place": "Parc des Expositions Paris Nord Villepinte",
    "author": "Chabe01"
  },
  "le-bourget": {
    "file": "Planes on Display at Le Bourget 3.jpg",
    "place": "Avions exposés au musée de l'Air et de l'Espace, Le Bourget",
    "author": ""
  },
  "montreuil": {
    "file": "Montreuil Hôtel-de-Ville.jpg",
    "place": "Hôtel de ville de Montreuil",
    "author": "René Hourdry"
  },
  "creteil": {
    "file": "Vue aérienne du lac de Créteil.jpg",
    "place": "Lac de Créteil vu du ciel",
    "author": "Suaudeau"
  },
  "rungis": {
    "file": "Marché de Rungis.jpg",
    "place": "Marché international de Rungis",
    "author": "Antoaneta"
  },
  "orly": {
    "file": "Paris-Orly airport.jpg",
    "place": "Aéroport de Paris-Orly",
    "author": ""
  },
  "vincennes": {
    "file": "Vincennes Château de Vincennes Cour Royale 1.jpg",
    "place": "Cour royale du château de Vincennes",
    "author": ""
  },
  "versailles": {
    "file": "Versailles-FacadeJardin.jpg",
    "place": "Château de Versailles vu depuis les jardins",
    "author": "Jean-Christophe BENOIST"
  },
  "saint-germain-en-laye": {
    "file": "Cour Château de Saint-Germain-en-Laye.jpg",
    "place": "Château de Saint-Germain-en-Laye",
    "author": "Alteaaaaa"
  },
  "cergy": {
    "file": "Axe Majeur Cergy 1.jpg",
    "place": "Axe Majeur de Cergy",
    "author": ""
  },
  "roissy-en-france": {
    "file": "Roissy-en-France town hall 02.jpg",
    "place": "Hôtel de ville de Roissy-en-France",
    "author": "Rémih"
  },
  "paris": {
    "file": "Eiffel Tower Paris Aug 2026.jpg",
    "place": "Tour Eiffel à Paris",
    "author": "Heidi Meudt"
  },
  "lyon": {
    "file": "Lyon basilique de fourvière.jpg",
    "place": "Basilique de Fourvière depuis les quais de Saône, Lyon",
    "author": "Imbolcus"
  },
  "rouen": {
    "file": "Cathédrale de Rouen, Façade.jpg",
    "place": "Cathédrale Notre-Dame de Rouen",
    "author": ""
  }
};

// Visuels distincts des fiches de villes afin d'éviter les doublons sur la page des zones.
const departmentFiles = {
  "seine-et-marne": {
    "file": "Château de Fontainebleau, 2013 (26) - Cour du Cheval blanc panoramique.jpg",
    "place": "Cour du Cheval Blanc, château de Fontainebleau",
    "author": ""
  },
  "essonne": {
    "file": "Esplanade Nelson Mandela - Évry-Courcouronnes (FR91) - 2026-08-15 - 1.jpg",
    "place": "Esplanade Nelson Mandela à Évry-Courcouronnes",
    "author": ""
  },
  "hauts-de-seine": {
    "file": "GrandeArche.jpg",
    "place": "Grande Arche et quartier d'affaires de La Défense",
    "author": ""
  },
  "seine-saint-denis": {
    "file": "ParisSaintDenisFromSky April2016.jpg",
    "place": "Vue aérienne de Saint-Denis et du Stade de France",
    "author": "Citizen59"
  },
  "val-de-marne": {
    "file": "Donjon du château de Vincennes (XIVe siècle), vu de la cour entre les pavillons du roi et de la reine (XVIIe siècle).JPG",
    "place": "Donjon du château de Vincennes",
    "author": "Benoît Pupin"
  },
  "yvelines": {
    "file": "Jardin Versailles.jpg",
    "place": "Jardins du château de Versailles et bassin de Latone",
    "author": "Vincent Bloch"
  },
  "val-doise": {
    "file": "Axe majeur de Cergy July 2016 03.jpg",
    "place": "Axe Majeur de Cergy",
    "author": ""
  },
  "paris-secteur": {
    "file": "Eiffel Tower located on the Champ de Mars in Paris, France.jpg",
    "place": "Tour Eiffel depuis le Champ de Mars",
    "author": "Aliva Sahoo"
  }
};

const departmentPhotoSlugs = {
  "seine-et-marne": "fontainebleau",
  "essonne": "evry-courcouronnes",
  "hauts-de-seine": "la-defense",
  "seine-saint-denis": "saint-denis",
  "val-de-marne": "vincennes",
  "yvelines": "versailles",
  "val-doise": "cergy"
};

export function photoForArea(slug) {
  const entry = departmentFiles[slug] || files[departmentPhotoSlugs[slug] || slug];
  if (!entry) return null;
  const filename = encodeURIComponent(entry.file.replace(/ /g, "_"));
  return {
    src: `https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=960`,
    alt: `Photographie réelle : ${entry.place}`,
    caption: entry.place,
    author: entry.author,
    source: `https://commons.wikimedia.org/wiki/File:${filename}`,
  };
}
