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
  { id: 'diary', label: 'Diary' },
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

  // ── Diary ───────────────────────────────────────────────────────────────────
  // Notes dropped on the map, 2025. `text` is the day it was written (UTC).
  // HTML formatting from the original notes is removed; line breaks became " / ".

  { category: 'diary', title: 'Studiooooo', text: '22 Apr 2025', lat: 51.92952221187147, lon: 4.477575749027547 },
  { category: 'diary', title: 'Torno a casa 17:24', text: '22 Apr 2025', lat: 51.92074831580381, lon: 4.452907413451539 },
  { category: 'diary', title: 'La stessa strada', text: '22 Apr 2025', lat: 51.920734157583226, lon: 4.452836046195962 },
  { category: 'diary', title: 'Tiuunfs', text: '22 Apr 2025', lat: 51.9197789317294, lon: 4.448699719153222 },
  { category: 'diary', title: 'Birra con amici Marie va in Corea ciao ciao', text: '22 Apr 2025', lat: 51.909547402077955, lon: 4.448846438228283 },
  { category: 'diary', title: 'dcavcsdc', text: '23 Apr 2025', lat: 51.918784512549045, lon: 4.446758469627617 },
  { category: 'diary', title: 'E alla fine, stiamo andando a mangiare il pesce fritto', text: '27 Apr 2025', lat: 51.48650107268645, lon: 3.6049699020317134 },
  { category: 'diary', title: 'Una patapizza e una pizza che bab', text: '27 Apr 2025', lat: 51.5202153, lon: 3.6017576 },
  { category: 'diary', title: 'Houdilzus vuol dire vecchia diga', text: '27 Apr 2025', lat: 51.5414771, lon: 4.4598831 },
  { category: 'diary', title: 'Hegsvdvdjd', text: '23 Apr 2025', lat: 51.9188047978888, lon: 4.4467653157120814 },
  { category: 'diary', title: 'Quando dico dieci intendo dieci ma dieci dieci', text: '27 Apr 2025', lat: 51.6848432, lon: 4.6655014 },
  { category: 'diary', title: 'Madeor povero coglione', text: '23 Apr 2025', lat: 51.91522311108869, lon: 4.4422659558459205 },
  { category: 'diary', title: 'Perché Sonia è coliona?', text: '23 Apr 2025', lat: 51.915238562914986, lon: 4.442284078817959 },
  { category: 'diary', title: 'matteo Poveraccio di un coglione', text: '23 Apr 2025', lat: 51.91524487355103, lon: 4.442271974165729 },
  { category: 'diary', title: 'Camera di Sonia, 23 aprile guardiamo un’orrenda seria su Netflix lei ha raffreddore. Abbiamo bruciato il pollo e piove parecchio', text: '23 Apr 2025', lat: 51.91522548656174, lon: 4.442287585822681 },
  { category: 'diary', title: 'Dove siete, partigia di tutte le valli, Tarzan, Riccio, Sparviero, Saetta, Ulisse? Molti dormono in tombe decorose, quelli che restano hanno i capelli bianchi e raccontano ai figli dei figli come, al tempo remoto delle certezze, hanno rotto l’assedio dei tedeschi là dove adesso sale la seggiovia.', text: '25 Apr 2025', lat: 51.918793739175456, lon: 4.446834336173292 },
  { category: 'diary', title: 'Pausa banana + ciocco: 70 chilometri dopo e 27 alla fine mi sono ricordato solo ora di avere fatto questa mappa apposta per questo viaggio', text: '27 Apr 2025', lat: 51.67114805900647, lon: 3.704461231831186 },
  { category: 'diary', title: 'Diga assurda gigante pale eoliche assurde manca il secondo pezzo dice cece', text: '27 Apr 2025', lat: 51.638185940242, lon: 3.7052579291649073 },
  { category: 'diary', title: 'Mi piacciono le pale Holly mi piacciono le pale eoliche', text: '27 Apr 2025', lat: 51.63578049284558, lon: 3.701508203524818 },
  { category: 'diary', title: 'Siamo al km, quanto 78 ci sono un sacco di gabbiani e oggi è andato tutto molto lento tutto molto male però siamo qua dai 27 alla fine a 25 alla fine e oggi ho finito', text: '27 Apr 2025', lat: 51.633831686218464, lon: 3.6985810382596296 },
  { category: 'diary', title: 'Gabbiani', text: '27 Apr 2025', lat: 51.63228972673682, lon: 3.696258847011658 },
  { category: 'diary', title: 'Ceci prova la fuga', text: '27 Apr 2025', lat: 51.63168331842696, lon: 3.6953612170051287 },
  { category: 'diary', title: 'Cece sente rumori metallici che fanno paura', text: '27 Apr 2025', lat: 51.631133271810874, lon: 3.6945845855785255 },
  { category: 'diary', title: 'Cece fa lo slalom in strada, perché non c’è nessuno un gabbiano fa il bagno coi piedi dentro la pozzanghera', text: '27 Apr 2025', lat: 51.63028846427861, lon: 3.693344617116751 },
  { category: 'diary', title: 'Non prendi niente', text: '27 Apr 2025', lat: 51.626668809069926, lon: 3.688216558348825 },
  { category: 'diary', title: 'Finita la diga? È la verità?', text: '27 Apr 2025', lat: 51.621058836548166, lon: 3.682911203057675 },
  { category: 'diary', title: 'Qui?', text: '27 Apr 2025', lat: 51.59840295471939, lon: 3.6814181599655806 },
  { category: 'diary', title: 'L’acqua a sx è molto più bassa', text: '27 Apr 2025', lat: 51.59754471731666, lon: 3.6806044264648587 },
  { category: 'diary', title: 'Cosa mi ricordo che era tipo sia il sugo e giù probabilmente ci sono altri ingressi, possiamo anche', text: '27 Apr 2025', lat: 51.59551652978634, lon: 3.6794205446666606 },
  { category: 'diary', title: 'Se viene per i microfoni, tipo quelli che becchi ciclo turistici ce li hanno siete cagnolini, però tipo', text: '27 Apr 2025', lat: 51.596178559594165, lon: 3.6738522387432857 },
  { category: 'diary', title: 'Crisi di pane', text: '27 Apr 2025', lat: 51.5950752050165, lon: 3.670527432117304 },
  { category: 'diary', title: 'Macchina', text: '27 Apr 2025', lat: 51.59490635157711, lon: 3.670016387480935 },
  { category: 'diary', title: 'Anche quella cosa lì solamente', text: '27 Apr 2025', lat: 51.59459759898884, lon: 3.6694847316767336 },
  { category: 'diary', title: 'Se ti ammazza', text: '27 Apr 2025', lat: 51.594055160047944, lon: 3.668513821208961 },
  { category: 'diary', title: 'Twee mini met disco dip', text: '27 Apr 2025', lat: 51.59042030636086, lon: 3.663423655532777 },
  { category: 'diary', title: 'Adesso due secondi e siamo in mezzo al niente', text: '27 Apr 2025', lat: 51.59164235049206, lon: 3.6639930697622893 },
  { category: 'diary', title: 'Mi scappa la pipì', text: '27 Apr 2025', lat: 51.59164059446375, lon: 3.664001198488906 },
  { category: 'diary', title: 'Spero ci sia del pesce Fetto', text: '27 Apr 2025', lat: 51.5661917, lon: 3.6104966 },
  { category: 'diary', title: 'La bici non si è Ancora Rotta', text: '27 Apr 2025', lat: 51.5650657, lon: 3.6085241 },
  { category: 'diary', title: 'Forse dovrei imparare il polacco', text: '27 Apr 2025', lat: 51.5490666, lon: 3.6032878 },
  { category: 'diary', title: 'Lo sapevo che questa mappa sarebbe andata contro di me lo sapevo lo sapevo lo sapevo', text: '27 Apr 2025', lat: 51.5303167, lon: 3.6057718 },
  { category: 'diary', title: 'Non importa se il vento mi gonfia la maglietta vola da dire che devo pirare più forte', text: '27 Apr 2025', lat: 51.5287667, lon: 3.6060327 },
  { category: 'diary', title: 'Chissà se hanno rubato la bici o matteo si è ricordato di prenderla', text: '28 Apr 2025', lat: 50.8990568, lon: 4.4830754 },
  { category: 'diary', title: '2 pomodori €3,99', text: '28 Apr 2025', lat: 51.91743913872736, lon: 4.445222570977191 },
  { category: 'diary', title: 'Questi per i 4 giorni stesse vacanze sono finalmente finite', text: '28 Apr 2025', lat: 45.4761743, lon: 9.2069246 },
  { category: 'diary', title: 'matteo mi ha mandato il link ora per mettere una nota in giappone, ma sono appena tornato', text: '29 Apr 2025', lat: 45.6338625111288, lon: 8.71090338701371 },
  { category: 'diary', title: 'Metterò delle note mentre va il treno così sembra che abbia fatto un sacco di bici', text: '29 Apr 2025', lat: 45.0516108, lon: 9.7614385 },
  { category: 'diary', title: 'Che bello ho visto la prima nota di cic a Milano', text: '29 Apr 2025', lat: 45.0191706, lon: 9.7807029 },
  { category: 'diary', title: 'Ricordi di summer tour 2021', text: '29 Apr 2025', lat: 40.8521653, lon: 14.2739477 },
  { category: 'diary', title: 'Leaving the city !', text: '29 Apr 2025', lat: 51.92454449709643, lon: 4.469619959883527 },
  { category: 'diary', title: '26 gradi 2 maggio 2025 ns trein 16:20', text: '2 May 2025', lat: 52.39059050359642, lon: 4.837933443954699 },
  { category: 'diary', title: 'Rose fuckoff', text: '2 May 2025', lat: 52.37919721757317, lon: 4.884693045173665 },
  { category: 'diary', title: 'Casa di rose geo gate keeping colazione without granola 1 star review', text: '3 May 2025', lat: 52.3937524231497, lon: 4.880532600257847 },
  { category: 'diary', title: 'Oude kerk, zo mooi dat het je bijna gelovig maakt', text: '3 May 2025', lat: 52.374390834200575, lon: 4.898748012881727 },
  { category: 'diary', title: 'bevendo sangria con mf', text: '3 May 2025', lat: 41.37715355932021, lon: 2.188402284944004 },
  { category: 'diary', title: 'Chissà cosa posso dire e cosa non posso dire', text: '15 May 2025', lat: 41.9784719, lon: -87.9102205 },
  { category: 'diary', title: 'Oh no mi sto dimenticando di droppare note', text: '17 May 2025', lat: 43.1487583, lon: -89.2892784 },
  { category: 'diary', title: 'È sabato, piove e passerò la giornata da un marmista', text: '17 May 2025', lat: 43.2085122, lon: -89.1976167 },
  { category: 'diary', title: 'Sonia vota per il presidente Polacco all’ambasciata', text: '18 May 2025', lat: 52.06561809804598, lon: 4.344974935066128 },
  { category: 'diary', title: 'Laan van Voi', text: '18 May 2025', lat: 52.076007202734225, lon: 4.33537130403161 },
  { category: 'diary', title: 'Eheh', text: '1 Aug 2025', lat: 45.64053488794521, lon: 8.720747418282885 },
  { category: 'diary', title: 'Odio wizzair', text: '1 Aug 2025', lat: 45.624978176937894, lon: 8.720338432664413 },
  { category: 'diary', title: 'Se mi calcia il sedile un’altra volta lo uccido giuro', text: '1 Aug 2025', lat: 45.615751405451334, lon: 8.710293807246988 },
  { category: 'diary', title: 'Did you get your glass of water already ? Looking forward. Merci.', text: '1 Aug 2025', lat: 45.62410968058745, lon: 8.720051652363356 },
  { category: 'diary', title: 'Questa è benzina ed io mi do fuoco', text: '1 Aug 2025', lat: 45.62425210882746, lon: 8.720255348320013 },
  { category: 'diary', title: 'sto aspettando che matteo guardi whatsapp e mi confermi la caption per ig post', text: '1 Aug 2025', lat: 45.62740324910688, lon: 8.716930380167662 },
  { category: 'diary', title: 'c’è un bambino italo rumeno che urla e pensa che suo papà è andato a fare la numero 2', text: '1 Aug 2025', lat: 45.62740324910688, lon: 8.716930380167662 },
  { category: 'diary', title: 'Piacenza ducato', text: '1 Aug 2025', lat: 45.05439607703383, lon: 9.680384441823634 },
  { category: 'diary', title: 'Uffffff', text: '1 Aug 2025', lat: 45.626848547888294, lon: 8.716785196664654 },
  { category: 'diary', title: 'In pensiero per i ragazzi', text: '1 Aug 2025', lat: 45.5220668, lon: 9.3824426 },
  { category: 'diary', title: 'hanno distribuito le pringles onion a tutti ci sarà una fiatella evvaiiii', text: '1 Aug 2025', lat: 45.62740325, lon: 8.71693038 },
  { category: 'diary', title: 'Arivedere', text: '1 Aug 2025', lat: 44.569722990640464, lon: 26.07804675862625 },
  { category: 'diary', title: 'Adoro conosciuto mio primo amico Gabriel', text: '1 Aug 2025', lat: 44.49599035573672, lon: 26.07884701165979 },
  { category: 'diary', title: 'Ho fameeeeee', text: '1 Aug 2025', lat: 44.45232153450431, lon: 26.1286967149302 },
  { category: 'diary', title: 'Non credo in tutto questo', text: '1 Aug 2025', lat: 44.45231584370575, lon: 26.12841892989923 },
  { category: 'diary', title: 'Sono l’unica che ha lasciato i commenti su Bucarest, ciao', text: '1 Aug 2025', lat: 44.45232644459349, lon: 26.128384128914842 },
  { category: 'diary', title: 'prima skol bevuta', text: '1 Aug 2025', lat: 44.45212608457267, lon: 26.128801533572258 },
  { category: 'diary', title: 'Amarguinha', text: '1 Aug 2025', lat: 44.437204934219714, lon: 26.09623907371176 },
  { category: 'diary', title: 'Ma basta oh', text: '2 Aug 2025', lat: 44.430166748393724, lon: 26.0965012293552 },
  { category: 'diary', title: 'Mici + starmale with sour cream', text: '2 Aug 2025', lat: 44.43049565720952, lon: 26.101665127841752 },
  { category: 'diary', title: 'sono pieno', text: '2 Aug 2025', lat: 44.43047737473752, lon: 26.10167534086515 },
  { category: 'diary', title: 'Mici, mici ancora no bici', text: '2 Aug 2025', lat: 44.43047976065472, lon: 26.101643743391616 },
  { category: 'diary', title: 'Carlo cassola best writer in Italy', text: '2 Aug 2025', lat: 44.43036602632524, lon: 26.101698074744107 },
  { category: 'diary', title: 'Eheheh', text: '2 Aug 2025', lat: 44.43038740903939, lon: 26.101645257157106 },
  { category: 'diary', title: 'L’uomo e il cane. Carlo Cassola. 1977 I ED.', text: '2 Aug 2025', lat: 44.430482537038216, lon: 26.101616621180433 },
  { category: 'diary', title: 'Excuse me excuse me', text: '2 Aug 2025', lat: 44.430237363321524, lon: 26.10168475572256 },
  { category: 'diary', title: 'mister…. cassola is great… mister… excuse me…', text: '2 Aug 2025', lat: 44.430315274238836, lon: 26.10162654927875 },
  { category: 'diary', title: 'Excuse me sir', text: '2 Aug 2025', lat: 44.43450174391565, lon: 26.084363032627447 },
  { category: 'diary', title: 'matteo mi ha obbligato e sapeva che avrei scritto questa nota', text: '2 Aug 2025', lat: 44.43451836378091, lon: 26.067628576681326 },
  { category: 'diary', title: 'entrata al botanico come il concerto di bad bunny', text: '2 Aug 2025', lat: 44.436949649602916, lon: 26.066442082140004 },
  { category: 'diary', title: 'falafel mega buono qui', text: '2 Aug 2025', lat: 44.443838670810756, lon: 26.096230659327812 },
  { category: 'diary', title: 'Super falafel al posto col tipo simpatico', text: '2 Aug 2025', lat: 44.4390656, lon: 26.10515 },
  { category: 'diary', title: 'Casa di Olesya', text: '2 Aug 2025', lat: 44.443781804540954, lon: 26.094107250760228 },
  { category: 'diary', title: 'sul treno pieno di bici per campina con un fra con bici e pollo come clacson', text: '3 Aug 2025', lat: 44.518183855418506, lon: 25.97318089228039 },
  { category: 'diary', title: 'col fra gypsy thanks god <3', text: '3 Aug 2025', lat: 44.64473452709732, lon: 25.97700435880458 },
  { category: 'diary', title: 'Automatul nu dă rest! Folosiți suma exactă', text: '3 Aug 2025', lat: 44.757848852312094, lon: 26.033510336823813 },
  { category: 'diary', title: 'Patri uno di noi', text: '3 Aug 2025', lat: 44.84620853407449, lon: 26.032078027467133 },
  { category: 'diary', title: 'Ciao siamo sul treno', text: '3 Aug 2025', lat: 44.85207867444099, lon: 26.036481887906408 },
  { category: 'diary', title: 'Matteo made 2 new friends', text: '3 Aug 2025', lat: 44.87506074575975, lon: 26.02326621212387 },
  { category: 'diary', title: 'If you talk, you should understand what you’re saying', text: '3 Aug 2025', lat: 44.92477715485256, lon: 25.994107984030613 },
  { category: 'diary', title: 'Bonjour and some talk of it is not working', text: '3 Aug 2025', lat: 44.92468520537477, lon: 25.9941346384827 },
  { category: 'diary', title: 'En fait on est ici voilà', text: '3 Aug 2025', lat: 44.925081071355955, lon: 25.993489851389786 },
  { category: 'diary', title: 'Succhino piersica già incontrato 7 cani uno s’è preso l’acqua in faccia', text: '3 Aug 2025', lat: 45.169852818178775, lon: 25.677030225780868 },
  { category: 'diary', title: '4 ursus / 3 ursus 1 lemon beers / 1 ursus 3 lemon beers', text: '3 Aug 2025', lat: 45.345206097104565, lon: 25.547029668637553 },
  { category: 'diary', title: 'sopravvissuti agli stray dogs… basta camminare', text: '3 Aug 2025', lat: 45.3452189122995, lon: 25.547057687000642 },
  { category: 'diary', title: 'appena brieffato nel progetto', text: '3 Aug 2025', lat: 45.34510749064327, lon: 25.547136123200758 },
  { category: 'diary', title: 'No ciorba ;(', text: '3 Aug 2025', lat: 45.34645075007327, lon: 25.54737830377813 },
  { category: 'diary', title: 'Voglio la ciorba', text: '3 Aug 2025', lat: 45.344976202451626, lon: 25.546961181910888 },
  { category: 'diary', title: 'Tetto di Andra + Rumeno cattivo con manie di autorità 😤', text: '3 Aug 2025', lat: 44.446489612646346, lon: 26.12743623114549 },
  { category: 'diary', title: 'Ancora zero orsi visti', text: '3 Aug 2025', lat: 45.41424687717189, lon: 25.535343012561196 },
  { category: 'diary', title: 'Non ce la faccio più', text: '3 Aug 2025', lat: 45.414226542082545, lon: 25.53534555973183 },
  { category: 'diary', title: 'pannocchione mangiato', text: '3 Aug 2025', lat: 45.41419167104641, lon: 25.53537509521795 },
  { category: 'diary', title: 'Tibet views Fiume pozzo cavalli in giro', text: '3 Aug 2025', lat: 45.56988090280962, lon: 25.455202823528513 },
  { category: 'diary', title: 'siamo entrati in un campo rom', text: '3 Aug 2025', lat: 45.5900638930985, lon: 25.46500063987631 },
  { category: 'diary', title: 'il reste 16 km pour aller à bras chauve', text: '3 Aug 2025', lat: 45.59002454316541, lon: 25.464909809816177 },
  { category: 'diary', title: 'Allez allez allez', text: '3 Aug 2025', lat: 45.59002434832229, lon: 25.46492645172767 },
  { category: 'diary', title: 'Strada lunga', text: '3 Aug 2025', lat: 45.65611593429526, lon: 25.581948598870618 },
  { category: 'diary', title: 'ho una fame smarmottante', text: '3 Aug 2025', lat: 45.6430620756248, lon: 25.58833573749049 },
  { category: 'diary', title: 'Puzzo', text: '3 Aug 2025', lat: 45.64301310405163, lon: 25.588363521327008 },
  { category: 'diary', title: 'caramel è un gatto piccolissimo', text: '3 Aug 2025', lat: 45.643024921761274, lon: 25.58832309227667 },
  { category: 'diary', title: 'Bonne nuit', text: '3 Aug 2025', lat: 45.64309897220873, lon: 25.58842609309046 },
  { category: 'diary', title: 'Martina 4 / Cassandre 6 / Cic 0 / Mattia 4 / Matteo 3', text: '3 Aug 2025', lat: 45.64306253508419, lon: 25.58833853104899 },
  { category: 'diary', title: 'Cassandre 7 (1 valais point, 2 first night, 3 second night, 1 3rd night) … they are cheating…', text: '3 Aug 2025', lat: 45.64303826879351, lon: 25.58837804861691 },
  { category: 'diary', title: 'Brianna, nice no no no we like to and then then', text: '4 Aug 2025', lat: 45.63549380254257, lon: 25.564946252043345 },
  { category: 'diary', title: 'Very nice views yeah, we’re quite excited about it', text: '4 Aug 2025', lat: 45.63548903745565, lon: 25.56491484937107 },
  { category: 'diary', title: 'marti ha i baffoni', text: '4 Aug 2025', lat: 45.6046427057656, lon: 25.307700731110106 },
  { category: 'diary', title: 'Dopo una limonata, voglio una bella birra', text: '4 Aug 2025', lat: 45.606330102564776, lon: 25.304995710640068 },
  { category: 'diary', title: 'prova', text: '4 Aug 2025', lat: 45.60632016567526, lon: 25.305059939042316 },
  { category: 'diary', title: 'Ursus cooler than me', text: '4 Aug 2025', lat: 45.60884094238281, lon: 25.306808471679688 },
  { category: 'diary', title: 'do not click me', text: '4 Aug 2025', lat: 45.60825769138512, lon: 25.30642127267684 },
  { category: 'diary', title: 'Io / Non / Voglio / Più / Pedalare', text: '4 Aug 2025', lat: 45.60629882769884, lon: 25.3050400873211 },
  { category: 'diary', title: 'Pause dîner avec belle omelette aux champignons et pommes-frittes… c’est assez', text: '4 Aug 2025', lat: 45.60627645397314, lon: 25.3049885375119 },
  { category: 'diary', title: 'stavamo pensando di mangiare qui stasera…..', text: '4 Aug 2025', lat: 45.606335060714244, lon: 25.30500779025994 },
  { category: 'diary', title: 'Martina’s bag touching touchin g', text: '4 Aug 2025', lat: 45.62008967634348, lon: 25.286291010496825 },
  { category: 'diary', title: 'Cane docile', text: '4 Aug 2025', lat: 45.71175888700121, lon: 25.24465427031676 },
  { category: 'diary', title: '55,80km fatti', text: '4 Aug 2025', lat: 45.73520903945503, lon: 25.230063311779155 },
  { category: 'diary', title: 'Bell’asfalto', text: '4 Aug 2025', lat: 45.73765794862059, lon: 25.227247419530975 },
  { category: 'diary', title: 'Sicuro che non erano orsi?', text: '4 Aug 2025', lat: 45.738294934642035, lon: 25.225086821443718 },
  { category: 'diary', title: 'Tia Strada so knowledge set for Calma South Africa', text: '4 Aug 2025', lat: 45.73906191154916, lon: 25.223077710845278 },
  { category: 'diary', title: 'Vallata che scende da poiana marului', text: '4 Aug 2025', lat: 45.74087994177429, lon: 25.216306261741757 },
  { category: 'diary', title: 'fa caldo, penso ci siano 30° e sono le 17:16 stiamo proseguendo verso fascia garage', text: '4 Aug 2025', lat: 45.74297239916473, lon: 25.211361283912503 },
  { category: 'diary', title: 'Oscar downstream', text: '4 Aug 2025', lat: 45.759464423214794, lon: 25.149161433824474 },
  { category: 'diary', title: 'Temporale arriva', text: '4 Aug 2025', lat: 45.84450868080651, lon: 24.971961788433827 },
  { category: 'diary', title: 'Cerca storia Fagaraşan', text: '4 Aug 2025', lat: 45.84514815758923, lon: 24.97141200141589 },
  { category: 'diary', title: 'WiFi Parola: Pensiune', text: '4 Aug 2025', lat: 45.84511159075347, lon: 24.97135349969395 },
  { category: 'diary', title: 'Adana kebab 340g o Ghiveci de pui', text: '4 Aug 2025', lat: 45.84495027096667, lon: 24.970681684001626 },
  { category: 'diary', title: 'sono morto ho messo una pomata nel culo', text: '4 Aug 2025', lat: 45.84504504918343, lon: 24.97189510179279 },
  { category: 'diary', title: 'Mattia mi ha chiuso in stanza', text: '5 Aug 2025', lat: 45.845047584405606, lon: 24.971673604958095 },
  { category: 'diary', title: 'ho rinviato la sveglia ed è suonata troppo tardi… le bici erano chiuse ma col bazar aperto', text: '5 Aug 2025', lat: 45.8450993283773, lon: 24.97161335670154 },
  { category: 'diary', title: 'chiesa del 1995', text: '5 Aug 2025', lat: 45.84356710947167, lon: 24.97168319925802 },
  { category: 'diary', title: 'Windows', text: '5 Aug 2025', lat: 45.824828934898434, lon: 24.893411714606817 },
  { category: 'diary', title: 'La basilica di fagaras è del 1995', text: '5 Aug 2025', lat: 45.8247011946941, lon: 24.89260856064492 },
  { category: 'diary', title: 'Lago succursala idrocentrala', text: '5 Aug 2025', lat: 45.82601275572851, lon: 24.872457402365658 },
  { category: 'diary', title: '10 km fa abbiamo visto una volpe morta, una rana morta e una macchina investire un criceto (sound terribile)', text: '5 Aug 2025', lat: 45.77875080522688, lon: 24.6202988829693 },
  { category: 'diary', title: 'ci sono un sacco di cicogne con i nidi sui pali della luce', text: '5 Aug 2025', lat: 45.778716368657186, lon: 24.620416607825906 },
  { category: 'diary', title: 'abbiamo adottato un gatto 4kat', text: '5 Aug 2025', lat: 45.893999317479455, lon: 24.598191822494922 },
  { category: 'diary', title: 'marti è stata rincorsa da bambini', text: '5 Aug 2025', lat: 45.89403687563211, lon: 24.598242124194012 },
  { category: 'diary', title: 'My first Nuga experience', text: '5 Aug 2025', lat: 45.89408399475202, lon: 24.59828714897657 },
  { category: 'diary', title: 'Stop for a snack', text: '5 Aug 2025', lat: 45.894047006207025, lon: 24.598348452169663 },
  { category: 'diary', title: 'Hbsjfd', text: '5 Aug 2025', lat: 45.81337556712871, lon: 24.363587005086583 },
  { category: 'diary', title: 'Ytr', text: '5 Aug 2025', lat: 45.813157386189154, lon: 24.36323429460112 },
  { category: 'diary', title: 'Yvcd', text: '5 Aug 2025', lat: 45.81291007661616, lon: 24.362728086110963 },
  { category: 'diary', title: 'Mmgfdtgtreured', text: '5 Aug 2025', lat: 45.812654333676605, lon: 24.36220518712678 },
  { category: 'diary', title: 'Odio questa strada', text: '5 Aug 2025', lat: 45.79594430983606, lon: 24.278041636593898 },
  { category: 'diary', title: 'Coccolino c’è', text: '5 Aug 2025', lat: 45.781987602865115, lon: 24.162913598142715 },
  { category: 'diary', title: 'Francesco ha meno punti di tutti ma non vuole dormire nel divano letto', text: '5 Aug 2025', lat: 45.78198604104068, lon: 24.162763777363367 },
  { category: 'diary', title: 'SIbiUUUUUUUUUU (CR7 celebration)', text: '5 Aug 2025', lat: 45.78204730176368, lon: 24.162992343430616 },
  { category: 'diary', title: 'ci siamo / sibiu we are', text: '5 Aug 2025', lat: 45.78205154933041, lon: 24.162963850659803 },
  { category: 'diary', title: 'siamo sul treno per campina, c’è l’alba sono seduto davanti a Cassandre e Mattia carrozza 7 seconda classe troppe bici tarantella ahahahah tipo che suona che bello suonami una canzone a no vuole i soldi bambino con bici downhill dice che gli orsi ci sono ma non in strada intanto però ha attaccato al manubrio un pollo di plastica per fare casino e spaventarli tutti poi abbiamo conosciuto Patri che ha nominato Neijmegen su un treno per Cluj, matti dice che è diretto a calatori ma calatori significato ferrovie', text: '3 Aug 2025', lat: 44.974275761111016, lon: 25.906689838636073 },
  { category: 'diary', title: 'Worst case scenario', text: '5 Aug 2025', lat: 45.78204298579487, lon: 24.162999018820326 },
  { category: 'diary', title: 'I <3 Sibiu', text: '5 Aug 2025', lat: 45.796682799006525, lon: 24.1525997195273 },
  { category: 'diary', title: 'Le case hanno gli occhi', text: '5 Aug 2025', lat: 45.7967334351847, lon: 24.152303945635328 },
  { category: 'diary', title: 'casa con gli occhi', text: '5 Aug 2025', lat: 45.79854567539487, lon: 24.15060536006852 },
  { category: 'diary', title: 'tra 24 anni vivrò qui', text: '5 Aug 2025', lat: 45.79860577982241, lon: 24.150502073288934 },
  { category: 'diary', title: 'Sorbetto', text: '5 Aug 2025', lat: 45.799665659664235, lon: 24.150732111899828 },
  { category: 'diary', title: 'La signora della panetteria ci ha regalato i taralli <3', text: '6 Aug 2025', lat: 45.78243587784886, lon: 24.162827529708725 },
  { category: 'diary', title: 'Anna ci regala i taralli / e ci augura buona fortuna', text: '6 Aug 2025', lat: 45.78239969913483, lon: 24.162916783265924 },
  { category: 'diary', title: 'ci hanno regalato bear spray', text: '6 Aug 2025', lat: 45.78255337446476, lon: 24.162866134984494 },
  { category: 'diary', title: 'Tettoia', text: '6 Aug 2025', lat: 45.791108049355024, lon: 24.09625396253511 },
  { category: 'diary', title: 'Discarica + cani cuccioli cattivi', text: '6 Aug 2025', lat: 45.78348128989185, lon: 23.99023302976736 },
  { category: 'diary', title: 'Salita inaspettata', text: '6 Aug 2025', lat: 45.77931637248616, lon: 23.964798994177734 },
  { category: 'diary', title: '500lei per una cena ci servirebbero', text: '6 Aug 2025', lat: 45.795096088696845, lon: 23.884116062224056 },
  { category: 'diary', title: 'Numeraia', text: '6 Aug 2025', lat: 45.80404284667019, lon: 23.774550969540034 },
  { category: 'diary', title: 'Sione', text: '6 Aug 2025', lat: 45.80487548050055, lon: 23.773970558380682 },
  { category: 'diary', title: 'Pitopagliaccio', text: '6 Aug 2025', lat: 45.80792652479754, lon: 23.734704349811608 },
  { category: 'diary', title: 'Pranzo profiloco', text: '6 Aug 2025', lat: 45.8083504036891, lon: 23.730569096037897 },
  { category: 'diary', title: 'Temporale', text: '6 Aug 2025', lat: 45.80844545821454, lon: 23.730538658338777 },
  { category: 'diary', title: 'Pailloche du vélo under the rain', text: '6 Aug 2025', lat: 45.80844164997708, lon: 23.730569568380897 },
  { category: 'diary', title: 'Team comunicaizone', text: '6 Aug 2025', lat: 45.76873327033071, lon: 23.637979532836617 },
  { category: 'diary', title: 'ho i piedi bagnati', text: '6 Aug 2025', lat: 45.57725706294977, lon: 23.626777642559777 },
  { category: 'diary', title: '4freccie per 1km grazie signore dacia', text: '6 Aug 2025', lat: 45.577358782045486, lon: 23.626753405221713 },
  { category: 'diary', title: 'birra più buona della mia vita', text: '6 Aug 2025', lat: 45.57719413424074, lon: 23.62665626899511 },
  { category: 'diary', title: 'Pistacchio + cocco davvero gelato top nonostante la pistacchiflation', text: '6 Aug 2025', lat: 42.19075681721748, lon: 14.221587542530465 },
  { category: 'diary', title: 'bevuto afinată - epica il mirto est europeo', text: '6 Aug 2025', lat: 45.5772576994093, lon: 23.626700304194095 },
  { category: 'diary', title: 'Capanna nel bosco', text: '7 Aug 2025', lat: 45.57693569677672, lon: 23.626930526779823 },
  { category: 'diary', title: 'Primo', text: '7 Aug 2025', lat: 45.47478277789152, lon: 23.637361903335133 },
  { category: 'diary', title: 'Salita', text: '7 Aug 2025', lat: 45.474979678052016, lon: 23.63779490354684 },
  { category: 'diary', title: 'Mattia maledetto primo', text: '7 Aug 2025', lat: 45.47497809235844, lon: 23.6374856821297 },
  { category: 'diary', title: 'Questa è per te cece <3', text: '7 Aug 2025', lat: 45.36484113938376, lon: 23.651118534665933 },
  { category: 'diary', title: 'Mattia ha vinto il summer tour', text: '7 Aug 2025', lat: 45.36478009079151, lon: 23.651137389264676 },
  { category: 'diary', title: 'Ce l’hai l’halva?', text: '7 Aug 2025', lat: 45.364803653320536, lon: 23.650989143906816 },
  { category: 'diary', title: 'Matt Primo, Matt Seo marti Terza', text: '7 Aug 2025', lat: 45.36469040656935, lon: 23.65106662430216 },
  { category: 'diary', title: 'Narok narok', text: '7 Aug 2025', lat: 45.36440503744317, lon: 23.65116482624287 },
  { category: 'diary', title: 'Transalpina Magali bad sognio…I became a snake', text: '7 Aug 2025', lat: 45.36442819869012, lon: 23.651150351163235 },
  { category: 'diary', title: 'arrivato ultimo sul tappone anche con la bici da 1mln di euro', text: '7 Aug 2025', lat: 45.36439155270895, lon: 23.651164960384058 },
  { category: 'diary', title: 'alva buonissimo qui……', text: '7 Aug 2025', lat: 45.364421557925105, lon: 23.65116739798725 },
  { category: 'diary', title: 'matteo non sa quando è il mio compleanno', text: '7 Aug 2025', lat: 45.36443160333088, lon: 23.651176183063022 },
  { category: 'diary', title: 'zio pera', text: '7 Aug 2025', lat: 45.38316983368452, lon: 23.671680141587085 },
  { category: 'diary', title: 'La tecnologia non batterà mai le gambe (Mahatma Gandhi)', text: '7 Aug 2025', lat: 45.36439041600632, lon: 23.651150795722273 },
  { category: 'diary', title: 'Attacco doppio cane', text: '7 Aug 2025', lat: 45.30402436856674, lon: 23.68314192632556 },
  { category: 'diary', title: 'Altri cani', text: '7 Aug 2025', lat: 45.272313290492754, lon: 23.6872996451503 },
  { category: 'diary', title: 'Dzień dobry', text: '7 Aug 2025', lat: 45.18062117149728, lon: 23.67672238515046 },
  { category: 'diary', title: 'To Christian studio Rotterdam', text: '7 Aug 2025', lat: 45.1806008648908, lon: 23.676808118041535 },

];