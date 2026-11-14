// Fahrplan nach dem Start von 1.9 (Fabians Klick 14.11.2026, 16:4x, „Zeile weg“): die Zeile „Erst noch ein Update“ (rp3, eingebaut am 06.11. mit fahrplan-2026-11-06.mjs)
// faellt weg, „Der grosse Schritt“ (rp3b, Wortlaut vom 06.11.) rueckt als Naechstes nach oben. Entfernt das deutsche Markup der Zeile und die drei Schluessel rp3_ph/rp3_h/rp3_p
// in allen drei Sprachen. Zweig start-1-9, Push erst nach dem Live-Gang. Danach: node tools/build-lang.mjs JJJJ-MM-TT. Bricht ab, wenn eine Stelle nicht so oft da ist wie erwartet.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const datei = path.join(W, 'index.html');
let s = fs.readFileSync(datei, 'utf8');

const zeile = /<div class="tl-item"><span class="tl-dot"><\/span><div class="tl-body"><span class="tl-ph" data-i18n="rp3_ph">[^<]*<\/span><h3 data-i18n="rp3_h">[^<]*<\/h3><p data-i18n="rp3_p">[^<]*<\/p><\/div><\/div>\s*/g;
const z = s.match(zeile) || [];
if (z.length !== 1) throw new Error(`Markup rp3: ${z.length}x statt 1x`);
if (!z[0].includes('Erst noch ein Update')) throw new Error('Markup rp3 ist nicht „Erst noch ein Update“');
s = s.replace(zeile, '');

for (const k of ['rp3_ph', 'rp3_h', 'rp3_p']) {
  const re = new RegExp('"' + k + '":"(?:[^"\\\\]|\\\\.)*",', 'g');
  const n = (s.match(re) || []).length;
  if (n !== 3) throw new Error(`${k}: ${n}x statt 3x`);
  s = s.replace(re, '');
}
if (/data-i18n="rp3_|"rp3_(ph|h|p)"/.test(s)) throw new Error('rp3 steht noch irgendwo');
fs.writeFileSync(datei, s, 'utf8');
console.log('Fahrplan: „Erst noch ein Update“ entfernt, „Der große Schritt“ ist jetzt als Nächstes dran. Jetzt: node tools/build-lang.mjs JJJJ-MM-TT');
