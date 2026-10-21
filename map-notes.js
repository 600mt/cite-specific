// Portfolio map notes: one entry per note on the map.
//
// MAP_CATEGORIES sets the menu on the side, in this order.
//
// MAP_NOTES fields:
//   `category` – one of the category ids below
//   `id`       – for works: the project’s key in projects-data.js (not used by the map)
//   `title`    – first line of the note, always visible
//   `text`     – short line under the title, shown from region level
//   `long`     – longer description, shown instead of `text` when you zoom in close
//                (taken from projects-data.js; edit freely, use \n\n for a new paragraph)
//   `lat`, `lon` – where it happened. Set both to null to keep it off the map.
//
// To get coordinates: right-click a spot in Google Maps and click the numbers
// at the top of the menu (they copy as "lat, lon").

window.MAP_CATEGORIES = [
  { id: 'works', label: 'Works' },
  { id: 'exhibitions', label: 'Exhibitions' },
  { id: 'teaching', label: 'Workshops, Teaching' },
  { id: 'talks', label: 'Presentations, Lectures' },
  { id: 'residencies', label: 'Residencies, Funding' },
  { id: 'websites', label: 'Web sites' },
  { id: 'writing', label: 'Writing' },
];

window.MAP_NOTES = [

  // ── Works ───────────────────────────────────────────────────────────────────

  { category: 'works', id: 'viewing-conditions',
    title: 'Viewing Conditions',
    text: 'Video installation on a vanished erratic boulder, seen through microscope images of one of its surviving fragments.',
    long: '"Viewing Conditions" is a video installation deconstructing the history of an erratic stone located in the north-western Italian Alps through one of its few surviving fragments. Once a natural landmark and spiritual site, the boulder was gradually dismantled over the last century for the extraction of its valuable pink granite. Today, only its name on maps, fragments from the cutting process, and traces within local memory remain.',
    lat: 51.9142, lon: 4.4720 },   // Nieuwe Instituut, Museumpark 25, Rotterdam

  { category: 'works', id: 'shadow-circuits',
    title: 'I was sure I would find it here',
    text: 'Pipes, survey markers and paper scraps retrace a buried gas pipeline through the poles that mark its route.',
    long: 'Aluminium pipes, survey markers, and improvised measuring tools: precise, directional, indifferent to terrain. They pin fragments of paper to the floor, each scrap pointing to its smallest coloured spot, and towards a place presumed to lie exactly beneath it. The installation repurposes research and knowledge gathered in 2023, when Matteo Bettini travelled for several weeks along a natural gas pipeline in Europe (The Gas Route), following the poles that mark its buried route: cartographic remnants left behind so that mapmakers could relocate what had first been drawn on paper. The path stretched roughly the distance between his home country and the one where he now lives.',
    lat: 51.9162, lon: 4.4779 },   // MaMA, Witte de Withstraat 29–31, Rotterdam

  { category: 'works', id: 'agreat',
    title: 'A great place for a ride',
    text: 'A fictional quad rider tells the history of the national forest of Leiria, pieced together from Google Maps comments.',
    long: 'Miguel, a fictional motorbike enthusiast born and raised near the forest of Leiria in Portugal, shares his personal knowledge of the place while riding his quad bike among the trees. His knowledge is pieced together from Google Maps users’ comments and an offline interview.',
    lat: 39.8200, lon: -8.9700 },  // Mata Nacional de Leiria (approximate centre)

  { category: 'works', id: 'ppv',
    title: 'Perfect-Perfect-View',
    text: 'Masking tape on a street-facing window: covering, layering, measuring and cutting.',
    long: '"Perfect-Perfect-View" is a site-specific installation on the street-facing window of the exhibition space Oud House in Rotterdam, made with a familiar yet overlooked material: masking tape. The work focuses on the gestures of covering, layering, measuring, and cutting. These actions result in a visual composition that suggests ambiguity: is the space under renovation? Decorated? Partially covered from view? Or used as an interface?',
    lat: 51.9131, lon: 4.4418 },   // Oud House, Jan Kobellstraat 78D, Rotterdam (approximate)

  { category: 'works', id: '22x11x11',
    title: '22.86 × 11.43 × 11.43',
    text: 'Ongoing dialogue with Sonia Górecka on a vanished granite boulder at the foot of Mottarone.',
    long: '"22.86 × 11.43 × 11.43" is an artistic dialogue between Matteo Bettini and Sonia Górecka, ongoing since 2023, reconstructing and exploring the history of a vanished stone at the foot of Mottarone in the western Italian Alps.\n\nOnce a natural landmark and sacred place, the massive stone, measured around 1889 at 22.86 metres wide, 11.43 metres deep, and 11.43 metres high, was gradually dismantled over the course of the last century for the extraction of the precious pink granite from which it was made. Today, all that remains is its name on the map, fragments left from the cutting process, and a void in the collective memory.',
    lat: 45.9000, lon: 8.4700 },   // between Mottarone and Baveno (approximate, set to the boulder’s site)

  { category: 'works', id: 'where-to',
    title: 'Fragments of Democracy II',
    text: 'A sunless sundial: projected data on press freedom in Italy falls on 3D-printed reliefs.',
    long: '"Fragments of Democracy II" is a sunless sundial, built together with Studio Folder in June 2025: an architectural diagram on the walls of Circolo del Design. On this structure, not with the sun but with the projector’s light, several datasets on press freedom in Italy emerge. The light falls on 3D-printed reliefs, while a video essay below animates the structure, tracing how visualisation turns something abstract and hard to hold, the state of information itself, into an image.',
    lat: 45.0649, lon: 7.6869 },   // Circolo del Design, Via San Francesco da Paola 17, Turin

  { category: 'works', id: 'fragments-democracy',
    title: 'Fragments of Democracy I',
    text: 'Thirteen data sculptures in which political and climatic datasets erode, sediment and encrust raw materials.',
    long: 'For as long as we’ve had politics, we’ve reached for nature to picture it: growth, climate, erosion standing in for the virtues, the progress, and lately the fragility of democratic life. In "Fragments of Democracy I", thirteen data sculptures take that habit literally. Hundreds of open-source datasets, political, historical, climatic, are laid over raw materials and left to act on them: information that erodes, sediments, deposits, encrusts. The words are borrowed from geology, but they are the same ones we use for democracies in crisis, and that overlap is the point.',
    lat: 50.7150, lon: 7.1222 },   // Bundeskunsthalle, Helmut-Kohl-Allee 4, Bonn

  { category: 'works', id: 'a-place',
    title: 'A Place Without a Name',
    text: 'A toponymic map tracing how the Monte Rosa massif became named, legible and governable.',
    long: '"A Place Without a Name" traces the slow and surprisingly recent process through which the high alpine landscape became visible, recognisable, and ultimately governable through cartography and language. Through a toponymic map of the massif, it examines how naming transforms the unknown into something culturally and politically legible, revealing how maps do not merely reflect territory but actively produce it.',
    lat: 45.9369, lon: 7.8668 },   // Dufourspitze, Monte Rosa

  { category: 'works', id: 'gas-route',
    title: 'The Gas Route',
    text: 'Eni’s own maps retell a trans-European gas line, long forgotten and never switched off.',
    long: 'A pipeline can move a country’s energy for half a century and still go unseen. Eni’s trans-European gas line is one such case: heavily publicised once, long since forgotten, yet never switched off. "The Gas Route" returns it to view by reading the story its own maps once told.',
    lat: null, lon: null },

  { category: 'works', id: 'ilsignore',
    title: 'Il signore che viene da lontano',
    text: '',
    lat: null, lon: null },

  { category: 'works', id: 'algo',
    title: 'Algorithmic Memories',
    text: 'How iPhone algorithms turn 20,000 personal photos into measurable memories.',
    long: 'By examining the influence of algorithms on a collection of 20,000 personal images, "Algorithmic Memories" dissects how iOS devices and their interfaces affect the perception of ourselves and of our visual memories. The publication visually deconstructs each section of the "Photos" app, and the way every image is transformed into a measurable value.',
    lat: null, lon: null },

  // ── Exhibitions ─────────────────────────────────────────────────────────────
  // Not repeated here, already on the map as works: -1 DEMO (Viewing Conditions),
  // Shadow Circuits, Where to, from Here? (Fragments of Democracy II),
  // Always Container, Sometimes Contained (Perfect-Perfect-View),
  // All in! Re-Designing Democracy (Fragments of Democracy I).

  { category: 'exhibitions',
    title: 'To The Horizon',
    text: 'Aspekty Gallery, Warsaw, with Sonia Górecka, 2026',
    lat: 52.2244, lon: 21.0232 },  // Aleje Ujazdowskie 16, Warsaw

  { category: 'exhibitions',
    title: 'Fuori Pista/Off-track',
    text: 'GresArt 671, Bergamo, with Studio Folder, 2025',
    lat: 45.6786, lon: 9.6597 },   // Via San Bernardino 141, Bergamo

  { category: 'exhibitions',
    title: 'Emergence',
    text: 'Palazzo Bronzo, Genova, with Sonia Górecka, 2025',
    lat: 44.4076, lon: 8.9305 },   // Salita di Mascherona 18r, Genova (approximate)

  // ── Workshops, Teaching ─────────────────────────────────────────────────────

  { category: 'teaching',
    title: 'JPG Investigation Unit',
    text: 'Accademia Aldo Galli, Milan, 2026',
    lat: 45.8048, lon: 9.0905 },   // Accademia Galli is in Como (Via Petrarca); move to Milan if it was held there

  { category: 'teaching',
    title: 'Ultra Paesaggio Continuo: Photo-finish e osservatori mobili',
    text: 'Circolo del Design, Torino, with 4kHD, 2025',
    lat: 45.0649, lon: 7.6869 },   // Circolo del Design, Turin

  { category: 'teaching',
    title: 'Ultra Paesaggio Continuo: Laboratorio di immagini in movimento',
    text: 'Lost APS, Treviso, with 4kHD, 2024',
    lat: 45.6669, lon: 12.2430 },  // Treviso centre (approximate, venue address unknown)

  { category: 'teaching',
    title: 'Anti-Navigation Tools',
    text: 'EKA Stand-in School, Berlin, with 4kHD, 2024',
    lat: 52.5200, lon: 13.4050 },  // Berlin centre (approximate, venue address unknown)

  { category: 'teaching',
    title: 'Archiving Memories Workshop',
    text: 'Hogeschool Rotterdam, 2022',
    lat: 51.9118, lon: 4.4705 },   // Hogeschool Rotterdam, Museumpark (approximate, check location)

  { category: 'teaching',
    title: 'Digital Methods Winter/Summer School',
    text: 'University of Amsterdam, 2022–25',
    lat: 52.3684, lon: 4.8955 },   // University of Amsterdam, city centre (approximate)

  { category: 'teaching',
    title: 'Density Design',
    text: 'Politecnico di Milano, Teaching assistant, 2020–21',
    lat: 45.5032, lon: 9.1556 },   // Politecnico di Milano, Bovisa campus

  // ── Presentations, Lectures ─────────────────────────────────────────────────

  { category: 'talks',
    title: 'New Approaches to Critical Geovisualisation',
    text: 'Burg Halle, 2026',
    lat: 51.4970, lon: 11.9580 },  // Burg Giebichenstein Kunsthochschule, Halle (approximate)

  { category: 'talks',
    title: 'Data Fragments',
    text: 'SUPSI, Mendrisio, with Studio Folder, 2024',
    lat: 45.8692, lon: 8.9817 },   // SUPSI campus Mendrisio (approximate)

  { category: 'talks',
    title: 'Racconti dai margini dell’urbanizzazione',
    text: 'Società Studi Geografici, Milan, 2023',
    lat: 45.4642, lon: 9.1900 },   // Milan centre (approximate, venue unknown)

  // ── Residencies, Funding ────────────────────────────────────────────────────
  // Not repeated here: -1 Digital Lab Residency (Viewing Conditions was made there).

  { category: 'residencies',
    title: 'Practical Contribution',
    text: 'CBK Rotterdam, 2025',
    lat: 51.9163, lon: 4.4733 },   // CBK Rotterdam, Eendrachtsstraat 10

  { category: 'residencies',
    title: 'Matching fund with Voordekunst',
    text: 'Het Cultuurfonds, Rotterdam, 2025',
    lat: 51.9225, lon: 4.4792 },   // Rotterdam centre (approximate)

  // ── Web sites (no place yet, so not on the map) ─────────────────────────────

  { category: 'websites',
    title: 'Literary Atlas of Volcanic and seismic Activities',
    text: 'With Federico Poni, Henry Albert, Alice Bisio, 2025',
    lat: null, lon: null },

  { category: 'websites',
    title: 'Transmedia Research Institute',
    text: 'With Sonia Górecka, 2025',
    lat: null, lon: null },

  { category: 'websites',
    title: 'Frontiere della Transizione',
    text: 'With Alberto Valz Gris, Luca Draisci, 2023',
    lat: null, lon: null },

  { category: 'websites',
    title: 'Xenoplex, Antikythera 2023',
    text: 'With Jennifer Carniel, Filippo Elgorni, 2023',
    lat: null, lon: null },

  // ── Writing ─────────────────────────────────────────────────────────────────
  // Not repeated here: A Place Without a Name (Metamorphic Zone, 2026) is on the map as a work.

];