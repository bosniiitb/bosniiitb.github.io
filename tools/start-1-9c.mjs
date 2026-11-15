// Webseite 1.9, dritter Schritt (Luka, 15.11.2026, 19:0x, zeit.mjs) — ENTWURF im Zweig start-1-9, Push erst, wenn der Store 1.9 zeigt (Regel 55).
// Fabians Klicks 15.11.2026: Pause über die Feiertage, im neuen Jahr geht es mit dem großen Schritt (Spielmotor und 2D) weiter, wichtige Fehler werden trotzdem repariert.
// Ergänzt den Fahrplan-Absatz „Der große Schritt“ (rp3b_p) je Sprache um einen Satz. Danach: node tools/build-lang.mjs JJJJ-MM-TT.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANG = ['de', 'en', 'hr'];
const ZUSATZ = {
  de: ' Nach 1.9 machen wir über die Feiertage Pause, im neuen Jahr geht es damit weiter. Geht etwas Wichtiges kaputt, reparieren wir es trotzdem.',
  en: ' After 1.9 we take a break over the holidays and carry on with it in the new year. If something important breaks, we still fix it.',
  hr: ' Nakon 1.9 preko blagdana radimo pauzu, a u novoj godini nastavljamo s tim. Ako se pokvari nešto važno, svejedno to popravljamo.',
};
const zaehle = (s, t) => s.split(t).length - 1;
const ersetze = (s, alt, neu, name) => { const n = zaehle(s, alt); if (n !== 1) throw new Error(`${name}: ${n}x gefunden, erwartet 1x`); return s.split(alt).join(neu); };
const htmlEsc = (t) => t.replace(/&/g, '&amp;');

const datei = path.join(W, 'index.html');
let s = fs.readFileSync(datei, 'utf8');
const treffer = [...s.matchAll(/"rp3b_p":("(?:[^"\\]|\\.)*")/g)];
if (treffer.length !== 3) throw new Error(`rp3b_p: ${treffer.length} statt 3`);
treffer.forEach((m, i) => {
  const l = LANG[i];
  const alt = JSON.parse(m[1]);
  if (alt.includes(ZUSATZ[l].trim().slice(0, 12))) throw new Error(`rp3b_p/${l}: schon gesetzt`);
  const neu = alt + ZUSATZ[l];
  s = ersetze(s, `"rp3b_p":${m[1]}`, `"rp3b_p":${JSON.stringify(neu)}`, `rp3b_p/${l}`);
  if (l === 'de') s = ersetze(s, `">${htmlEsc(alt)}<`, `">${htmlEsc(neu)}<`, 'rp3b_p/Markup');
});
fs.writeFileSync(datei, s, 'utf8');
console.log('Fahrplan: Pause über die Feiertage ergänzt. Jetzt: node tools/build-lang.mjs JJJJ-MM-TT');
