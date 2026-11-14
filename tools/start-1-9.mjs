// Webseite auf 1.9 „Zwischen den Spielen“ (Luka, 14.11.2026, 16:2x, zeit.mjs) — ENTWURF im Zweig start-1-9. Push erst, wenn der Store 1.9 zeigt (Regel 55), Texte liest Fabian vorher.
// Aendert in index.html (DE, Quelle) das Woerterbuch je Sprache (de, en, hr) und das deutsche Markup: Laeuft-gerade-Zeile, Tagebuch-Karte, „Welche Version laeuft gerade?“,
// die Versions-Chips. Dazu presse.html (aktuell 1.9) und spiel/nachrichten.json (neueste 1.9.0: bringt „Version 1.9 ist da“ ins Hauptmenue — darum erst nach dem Live-Gang pushen).
// NICHT hier: die Fahrplan-Zeile „Erst noch ein Update“ (Fabian entscheidet), das Startbild (folgt aus den Store-Bildern 1.9), der Tagebuch-Eintrag (tools/devlog/eintraege.mjs).
// Danach: node tools/build-lang.mjs. Bricht ab, wenn eine Stelle nicht so oft da ist wie erwartet. Ein zweiter Lauf findet die alten Texte nicht mehr und bricht ab (gewollt).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANG = ['de', 'en', 'hr'];

const NEU = {
  rp2_p: {
    de: '1.9: Jeder Spieler bekommt sein eigenes Training, Neuzugänge brauchen Zeit, und Arzt und Akademieleiter sind echte Personen. Davor 1.8: Die News haben zwei Fächer, und deine Liga erinnert sich. Meldest du einen Fehler, rückt er auf der Liste nach oben.',
    en: '1.9: every player gets his own training, new signings need time to settle, and your doctor and academy manager are real people. Before that, 1.8: the news has two tabs and your league remembers. Report a bug and it moves up the list.',
    hr: '1.9: svaki igrač ima svoj individualni rad, pojačanjima treba vremena da se uklope, a liječnik i voditelj akademije prave su osobe. Prije toga 1.8: vijesti imaju dvije kartice, a tvoja liga pamti. Prijaviš grešku, ide gore na listi.',
  },
  dl_neu_t: { de: '1.9 · Zwischen den Spielen', en: '1.9 · Between matches', hr: '1.9 · Između utakmica' },
  dl_neu_p: { // = „kurz“ im Tagebuch-Eintrag 1.9 (Mappe v1.9/tagebuch-1-9.mjs)
    de: 'Diesmal geht es um die Woche zwischen den Spielen. Jeder Spieler bekommt jetzt sein eigenes Training, und Neuzugänge brauchen Zeit, bis sie wirklich angekommen sind. Arzt und Akademieleiter sind echte Personen mit Gehalt und Angeboten von anderen Vereinen. Gescoutet wird auf der Europakarte, und der Vorstand sagt klar, was er will.',
    en: 'This one is about the week between matches. Every player gets his own training now, and new signings need time before they really arrive. Your doctor and your academy manager are real people with wages and offers from other clubs. Scouting happens on a map of Europe, and the board tells you clearly what it wants.',
    hr: 'Ovaj put sve se vrti oko tjedna između utakmica. Svaki igrač sada ima svoj individualni rad, a pojačanjima treba vremena da se stvarno uklope. Liječnik i voditelj akademije prave su osobe, s plaćom i ponudama drugih klubova. Skauting ide preko karte Europe, a uprava jasno kaže što želi.',
  },
  a2_live: {
    de: '1.9 „Zwischen den Spielen“. Jeder Spieler bekommt sein eigenes Training: ein Wert oder eine neue Position. Neuzugänge brauchen Zeit, bis sie angekommen sind, und das siehst du im Spiel. Mannschaftsarzt und Akademieleiter sind jetzt Personen mit Gehalt, Bewerbern und Angeboten anderer Vereine. Gescoutet wird auf der Europakarte, und der Vorstand nennt sein Saisonziel mit Wettbewerb und Plätzen.',
    en: '1.9, Between matches. Every player gets his own individual work: one attribute or a new position. New signings need time to settle in, and you see it on the pitch. Your club doctor and academy manager are real people now, with wages, applicants and offers from rival clubs. Scouting happens on a map of Europe, and the board sets its target with the competition and the places.',
    hr: '1.9 „Između utakmica“. Svaki igrač dobiva individualni rad: jednu vrijednost ili novu poziciju. Pojačanjima treba vremena da se uklope, a to se vidi i na terenu. Klupski liječnik i voditelj akademije sada su osobe, s plaćom, kandidatima i ponudama drugih klubova. Skauting ide preko karte Europe, a uprava cilj sezone zadaje s natjecanjem i plasmanom.',
  },
};
const CHIP = { de: '1.9 · Zwischen den Spielen', en: '1.9 · Between matches', hr: '1.9 · Između utakmica' };

const zaehle = (s, teil) => s.split(teil).length - 1;
const ersetze = (s, alt, neu, name, soll) => {
  const n = zaehle(s, alt);
  if (soll != null ? n !== soll : n < 1) throw new Error(`${name}: ${n}x gefunden${soll != null ? `, erwartet ${soll}x` : ''}`);
  return s.split(alt).join(neu);
};
const htmlEsc = (t) => t.replace(/&/g, '&amp;');

const datei = path.join(W, 'index.html');
let s = fs.readFileSync(datei, 'utf8');

for (const [k, neu] of Object.entries(NEU)) {
  const treffer = [...s.matchAll(new RegExp('"' + k + '":("(?:[^"\\\\]|\\\\.)*")', 'g'))];
  if (treffer.length !== 3) throw new Error(`${k}: ${treffer.length} Woerterbuch-Eintraege statt 3`);
  treffer.forEach((m, i) => {
    const l = LANG[i];
    const altRoh = JSON.parse(m[1]);
    s = ersetze(s, `"${k}":${m[1]}`, `"${k}":${JSON.stringify(neu[l])}`, `${k}/${l}`, 1);
    // nur Text hinter einem Attribut (data-i18n="…">), nicht die Chips (<span>…)
    if (l === 'de') s = ersetze(s, `">${htmlEsc(altRoh)}<`, `">${htmlEsc(neu.de)}<`, `${k}/Markup`, 1);
  });
}

// Versions-Chips: Woerterbuch je Sprache und deutsches Markup
const chips = [...s.matchAll(/"eh_chips":(\[[^\]]*\])/g)];
if (chips.length !== 3) throw new Error(`eh_chips: ${chips.length} statt 3`);
chips.forEach((m, i) => {
  const l = LANG[i];
  const liste = JSON.parse(m[1]);
  if (liste.includes(CHIP[l])) throw new Error(`eh_chips/${l}: 1.9 steht schon da`);
  s = ersetze(s, `"eh_chips":${m[1]}`, `"eh_chips":${JSON.stringify([...liste, CHIP[l]])}`, `eh_chips/${l}`, 1);
});
s = ersetze(s, '<span>1.8 · Die Welt erzählt</span></div>', '<span>1.8 · Die Welt erzählt</span><span>1.9 · Zwischen den Spielen</span></div>', 'Chips/Markup', 1);
fs.writeFileSync(datei, s, 'utf8');

// Presse und Hinweis im Spiel
const presse = path.join(W, 'presse.html');
let p = fs.readFileSync(presse, 'utf8');
p = ersetze(p, '(aktuell 1.8)', '(aktuell 1.9)', 'Presse/de', 1);
p = ersetze(p, '(currently 1.8)', '(currently 1.9)', 'Presse/en', 1);
fs.writeFileSync(presse, p, 'utf8');

const nachr = path.join(W, 'spiel', 'nachrichten.json');
const n = JSON.parse(fs.readFileSync(nachr, 'utf8'));
if (n.neueste !== '1.8.0') throw new Error(`nachrichten.json: neueste ist ${n.neueste}, erwartet 1.8.0`);
n.neueste = '1.9.0';
fs.writeFileSync(nachr, JSON.stringify(n, null, 2) + '\n', 'utf8');

console.log('Webseite auf 1.9 gesetzt (Woerterbuch, Markup, Chips, Presse, Hinweis). Jetzt: node tools/build-lang.mjs');
