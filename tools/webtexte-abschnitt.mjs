// Setzt die abgenommenen Texte eines Abschnitts in das Woerterbuch der deutschen Quellseite (alle drei Sprachen; Regel 48: je Sprache
// eigens geschrieben, Fabian nimmt jeden Abschnitt ab). EN/HR und der feste Text im HTML entstehen danach mit
// `node tools/build-lang.mjs JJJJ-MM-TT`. Aufruf: node tools/webtexte-abschnitt.mjs <abschnitt.json>
// Format der Datei: { "texte": { "<schluessel>": { "de": "...", "en": "...", "hr": "..." } } } — fehlt eine Sprache, bleibt sie.
// Bricht ab, wenn ein Schluessel fehlt oder der alte Wert nicht genau einmal im Sprachblock steht.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const datei = process.argv[2];
if (!datei) throw new Error('Aufruf: node tools/webtexte-abschnitt.mjs <abschnitt.json>');
const A = JSON.parse(fs.readFileSync(datei, 'utf8'));
const quelle = path.join(W, 'index.html');
const s = fs.readFileSync(quelle, 'utf8');
const zeilen = s.split('\n');
const i = zeilen.findIndex((l) => l.trim().startsWith('var I18N='));
if (i < 0) throw new Error('I18N-Zeile fehlt');
let line = zeilen[i];
const { I18N } = new Function(line.trim() + ' return {I18N:I18N};')();

const bloecke = () => ['de', 'en', 'hr'].map((l) => [l, line.indexOf(`"${l}":{`)]).sort((a, b) => a[1] - b[1]);
let n = 0;
for (const [k, t] of Object.entries(A.texte)) {
  for (const l of ['de', 'en', 'hr']) {
    if (!(l in t)) continue;
    if (!(k in I18N[l])) throw new Error(`${k} fehlt in ${l}`);
    const alt = `"${k}":${JSON.stringify(I18N[l][k])}`;
    const neu = `"${k}":${JSON.stringify(t[l])}`;
    if (alt === neu) continue;
    const b = bloecke(); const pos = b.findIndex(([x]) => x === l);
    const von = b[pos][1], bis = pos + 1 < b.length ? b[pos + 1][1] : line.length;
    const teil = line.slice(von, bis);
    const anzahl = teil.split(alt).length - 1;
    if (anzahl !== 1) throw new Error(`${l}.${k}: alter Wert ${anzahl}x im Block statt 1x`);
    line = line.slice(0, von) + teil.replace(alt, neu) + line.slice(bis);
    n++;
  }
}
// Gegenprobe: das neue Woerterbuch laesst sich ausfuehren und traegt genau die neuen Werte
const { I18N: J } = new Function(line.trim() + ' return {I18N:I18N};')();
for (const [k, t] of Object.entries(A.texte)) for (const l of ['de', 'en', 'hr']) if (l in t && JSON.stringify(J[l][k]) !== JSON.stringify(t[l])) throw new Error(`Gegenprobe ${l}.${k}`);
zeilen[i] = line;
fs.writeFileSync(quelle, zeilen.join('\n'), 'utf8');
console.log(`index.html: ${n} Texte gesetzt`);
