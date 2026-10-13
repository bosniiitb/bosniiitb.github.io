// Startseite: Bitte um eine ehrliche Bewertung unter dem Play-Knopf (Fabians Klick 13.10.2026: „Beides“, dann „Nur Webseite und Reddit“).
// Zweite Zeile im Stil der Newsletter-Zeile (nl-line), Link direkt auf die Store-Seite. Nur die deutsche Quellseite; EN/HR baut danach
// `node tools/build-lang.mjs JJJJ-MM-TT`. Ein Durchlauf; bricht ab, wenn eine Stelle fehlt oder schon eingefuegt ist.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const datei = path.join(W, 'index.html');
let s = fs.readFileSync(datei, 'utf8');
if (s.includes('data-i18n="rv_q"')) throw new Error('schon eingefuegt');

const STORE = 'https://play.google.com/store/apps/details?id=com.bosniii.trainersboardroom&referrer=utm_source%3Dwebsite%26utm_medium%3Dweb%26utm_content%3Dbewerten';
const alt = '<a href="#waitlist" data-i18n="nl_a">Trag dich in den Newsletter ein</a></p>';
if (s.split(alt).length !== 2) throw new Error('Newsletter-Zeile nicht genau 1x gefunden');
s = s.replace(alt, alt + `<p class="nl-line"><span data-i18n="rv_q">Du spielst schon?</span> <a href="${STORE}" target="_blank" rel="noopener" data-i18n="rv_a">Bewerte es ehrlich im Play Store</a></p>`);

// Woerterbuch: je Sprache fuer sich geschrieben (Regel 48), hinter „nl_a“
const T = [
  ['Du spielst schon?', 'Bewerte es ehrlich im Play Store'],
  ['Already playing?', 'Leave an honest review on Google Play'],
  ['Već igraš?', 'Ostavi iskrenu ocjenu na Google Playu'],
];
const treffer = s.match(/"nl_a":"[^"]*"/g) || [];
if (treffer.length !== 3) throw new Error(`nl_a ${treffer.length}x statt 3x`);
let k = 0;
s = s.replace(/"nl_a":"[^"]*"/g, (t) => { const [q, a] = T[k++]; return `${t},"rv_q":"${q}","rv_a":"${a}"`; });
fs.writeFileSync(datei, s, 'utf8');
console.log('index.html: Zeile + 6 Woerterbuch-Eintraege');
