// Textliste anwenden: node tools/texte-anwenden.mjs --liste <ausgabe.md>   → Vergleich alt/neu zum Gegenlesen (nichts wird geschrieben)
//                     node tools/texte-anwenden.mjs                          → patcht die I18N-Zeile in index.html (nur die genannten Schluessel)
// Danach: node tools/build-lang.mjs <JJJJ-MM-TT>
import fs from 'fs';
import path from 'path';
// Welche Textliste angewandt wird: --texte=./texte-JJJJ-MM-TT.mjs (ohne Angabe die vom 20.09.2026)
const MODUL = (process.argv.find(x => x.startsWith('--texte=')) || '--texte=./texte-2026-09-20.mjs').split('=')[1];
const NEU = (await import(MODUL)).default;

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const SRC = path.join(ROOT, 'index.html');
const stop = (m) => { console.log('STOP ' + m); process.exit(1); };
const strip = (v) => (Array.isArray(v) ? v.map(strip).join(' | ') : String(v).replace(/<[^>]+>/g, ''));

const src = fs.readFileSync(SRC, 'utf8');
const lines = src.split('\n');
const i = lines.findIndex(l => l.trim().startsWith('var I18N='));
if (i < 0) stop('I18N-Zeile fehlt');
const run = (line) => new Function(line.trim() + ' return {I18N:I18N, IMG:IMG, STORE_STATUS:STORE_STATUS, LANG:LANG};')();
const ALT = run(lines[i]).I18N;

const LISTE = process.argv[2] === '--liste';
const keys = Object.keys(NEU);
for (const k of keys) { if (ALT.de[k] === undefined) stop('unbekannter Schluessel ' + k); for (const l of ['de', 'en', 'hr']) if (NEU[k][l] === undefined) stop(k + ' ohne ' + l); }

if (LISTE) {
  const out = ['# Webseite — Texte alt → neu (Vorschlag 20.09.2026, wartet auf Fabians Go)', '', keys.length + ' Schlüssel × 3 Sprachen. Fett/kursiv bleibt wie im Original. Wo du etwas anders willst: Schlüssel nennen und den Satz sagen.', ''];
  for (const k of keys) {
    out.push('## ' + k);
    for (const l of ['de', 'en', 'hr']) {
      const a = strip(ALT[l][k]), n = strip(NEU[k][l]);
      out.push('**' + l.toUpperCase() + ' alt:** ' + a);
      out.push('**' + l.toUpperCase() + ' neu:** ' + (a === n ? '(unverändert)' : n));
      out.push('');
    }
  }
  const dest = process.argv[3] || stop('Ausgabedatei fehlt');
  fs.writeFileSync(dest, out.join('\n'));
  console.log('Liste: ' + keys.length + ' Schluessel → ' + dest);
  process.exit(0);
}

// ── Anwenden: je Sprachblock den JSON-Wert des Schluessels ersetzen ──
let line = lines[i];
let n = 0;
for (const l of ['de', 'en', 'hr']) {
  const blockStart = line.indexOf('"' + l + '":{');
  if (blockStart < 0) stop('Sprachblock ' + l);
  const blockEnd = l === 'hr' ? line.length : line.indexOf('"' + (l === 'de' ? 'en' : 'hr') + '":{');
  for (const k of keys) {
    const needle = '"' + k + '":' + JSON.stringify(ALT[l][k]);
    const pos = line.indexOf(needle, blockStart);
    if (pos < 0 || pos > blockEnd) stop('alter Wert nicht gefunden: ' + l + ':' + k);
    if (line.indexOf(needle, pos + 1) > -1 && line.indexOf(needle, pos + 1) < blockEnd) stop('alter Wert mehrfach: ' + l + ':' + k);
    line = line.slice(0, pos) + '"' + k + '":' + JSON.stringify(NEU[k][l]) + line.slice(pos + needle.length);
    n++;
  }
}
const R = run(line);
for (const l of ['de', 'en', 'hr']) for (const k of keys) if (JSON.stringify(R.I18N[l][k]) !== JSON.stringify(NEU[k][l])) stop('Nachpruefung ' + l + ':' + k);
if (R.IMG.length !== 10 || !R.STORE_STATUS) stop('I18N-Schwanz beschaedigt');
lines[i] = line;
fs.writeFileSync(SRC, lines.join('\n'));
// Restbestand Gedankenstriche je Sprache
for (const l of ['de', 'en', 'hr']) { let t = ''; const walk = v => Array.isArray(v) ? v.forEach(walk) : (typeof v === 'string' && (t += v + ' ')); Object.values(R.I18N[l]).forEach(walk); console.log(l + ': Gedankenstriche jetzt ' + (t.match(/—/g) || []).length); }
console.log(n + ' Werte ersetzt (' + keys.length + ' Schluessel × 3)');
