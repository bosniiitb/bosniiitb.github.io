// Fahrplan nachgezogen auf E-827 (Fabian 13.10.2026, 21:1x): bis 2.0 Ende 2026 genau sieben Updates, 1.4 bis 1.9 und dann 2.0,
// kein festes „jede Woche“ mehr. Aendert die Fahrplan-Zeile rp5_p (DE/EN/HR, je Sprache geschrieben) in der deutschen Quellseite und die
// Presse-Zeile. EN/HR baut danach `node tools/build-lang.mjs JJJJ-MM-TT`. Bricht ab, wenn eine Stelle nicht genau einmal da ist.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const genau = (s, alt, neu, name) => { const n = s.split(alt).length - 1; if (n !== 1) throw new Error(`${name}: ${n}x statt 1x`); return s.replace(alt, neu); };

let s = fs.readFileSync(path.join(W, 'index.html'), 'utf8');
s = genau(s, '"rp5_p":"Bis dahin kommt jede Woche ein Update, das letzte des Jahres heißt 2.0. Danach das iPhone, und die Entwicklung geht weiter."',
  '"rp5_p":"Bis dahin kommen noch sieben Updates, 1.4 bis 1.9, und als letztes 2.0. Danach das iPhone, und die Entwicklung geht weiter."', 'rp5_p de');
s = genau(s, '"rp5_p":"Until then there\'s an update every week, and the last one of the year is 2.0. Then iPhone, and development carries on."',
  '"rp5_p":"Seven more updates before then, 1.4 to 1.9, with 2.0 as the last. After that comes iPhone, and development carries on."', 'rp5_p en');
s = genau(s, '"rp5_p":"Do tada svaki tjedan stiže novo ažuriranje, a zadnje u godini zove se 2.0. Zatim iPhone, a razvoj ide dalje."',
  '"rp5_p":"Do tada stiže još sedam ažuriranja, od 1.4 do 1.9, a posljednje je 2.0. Zatim iPhone, a razvoj ide dalje."', 'rp5_p hr');
// Der feste Text im HTML traegt noch die alte Zeile; build-lang schreibt ihn aus dem Woerterbuch neu, geprueft wird danach.
fs.writeFileSync(path.join(W, 'index.html'), s, 'utf8');

let p = fs.readFileSync(path.join(W, 'presse.html'), 'utf8');
p = genau(p, 'Vollversion 2.0 Ende 2026, bis dahin ein Update je Woche.', 'Vollversion 2.0 Ende 2026, bis dahin sieben weitere Updates (1.4 bis 1.9).', 'presse de');
p = genau(p, 'full release (2.0) at the end of 2026, with an update every week until then.', 'full release (2.0) at the end of 2026, with seven more updates (1.4 to 1.9) before then.', 'presse en');
fs.writeFileSync(path.join(W, 'presse.html'), p, 'utf8');
console.log('index.html rp5_p x3, presse.html x2');
