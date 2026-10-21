// Portfolio map notes: one entry per work, shown as a text note on the map.
//
// `id`    – the project's key in projects-data.js (not used by the map yet)
// `title` – first line of the note
// `text`  – short description under the title (shows when zoomed in, or on hover)
// `lat`, `lon` – where the work happened. Set both to null to keep a work off the map.
//
// To get coordinates: right-click a spot in Google Maps and click the numbers
// at the top of the menu (they copy as "lat, lon").
window.MAP_NOTES = [

  { id: 'viewing-conditions',
    title: 'Viewing Conditions',
    text: 'Video installation on a vanished erratic boulder, seen through microscope images of one of its surviving fragments.',
    lat: 51.9142, lon: 4.4720 },   // Nieuwe Instituut, Museumpark 25, Rotterdam

  { id: 'shadow-circuits',
    title: 'I was sure I would find it here',
    text: 'Pipes, survey markers and paper scraps retrace a buried gas pipeline through the poles that mark its route.',
    lat: 51.9162, lon: 4.4779 },   // MaMA, Witte de Withstraat 29–31, Rotterdam

  { id: 'agreat',
    title: 'A great place for a ride',
    text: 'A fictional quad rider tells the history of the national forest of Leiria, pieced together from Google Maps comments.',
    lat: 39.8200, lon: -8.9700 },  // Mata Nacional de Leiria (approximate centre)

  { id: 'ppv',
    title: 'Perfect-Perfect-View',
    text: 'Masking tape on a street-facing window: covering, layering, measuring and cutting.',
    lat: 51.9131, lon: 4.4418 },   // Oud House, Jan Kobellstraat 78D, Rotterdam (approximate)

  { id: '22x11x11',
    title: '22.86 × 11.43 × 11.43',
    text: 'Ongoing dialogue with Sonia Górecka on a vanished granite boulder at the foot of Mottarone.',
    lat: 45.9000, lon: 8.4700 },   // between Mottarone and Baveno (approximate, set to the boulder’s site)

  { id: 'where-to',
    title: 'Fragments of Democracy II',
    text: 'A sunless sundial: projected data on press freedom in Italy falls on 3D-printed reliefs.',
    lat: 45.0649, lon: 7.6869 },   // Circolo del Design, Via San Francesco da Paola 17, Turin

  { id: 'fragments-democracy',
    title: 'Fragments of Democracy I',
    text: 'Thirteen data sculptures in which political and climatic datasets erode, sediment and encrust raw materials.',
    lat: 50.7150, lon: 7.1222 },   // Bundeskunsthalle, Helmut-Kohl-Allee 4, Bonn

  { id: 'a-place',
    title: 'A Place Without a Name',
    text: 'A toponymic map tracing how the Monte Rosa massif became named, legible and governable.',
    lat: 45.9369, lon: 7.8668 },   // Dufourspitze, Monte Rosa

  // ── Not on the map yet: add coordinates to show these ──────────────────────

  { id: 'gas-route',
    title: 'The Gas Route',
    text: 'Eni’s own maps retell a trans-European gas line, long forgotten and never switched off.',
    lat: null, lon: null },

  { id: 'ilsignore',
    title: 'Il signore che viene da lontano',
    text: '',
    lat: null, lon: null },

  { id: 'algo',
    title: 'Algorithmic Memories',
    text: 'How iPhone algorithms turn 20,000 personal photos into measurable memories.',
    lat: null, lon: null },

];