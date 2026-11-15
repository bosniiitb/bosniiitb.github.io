// Webseite 1.9, zweiter Schritt (Luka, 15.11.2026, 18:4x, zeit.mjs) — ENTWURF im Zweig start-1-9, Push erst, wenn der Store 1.9 zeigt (Regel 55).
// Nimmt „Seine Forderungen“ auf (siebte Zeile der Karte „Neu in 1.9“, Fabians Klick 15.11.2026, 17:1x „Karte und Store“) und setzt die Tagebuch-Karte auf das „kurz“
// des fertigen Tagebuch-Eintrags. Ersetzt genau die Texte, die tools/start-1-9.mjs gesetzt hat (je Sprache einmal im Woerterbuch, Deutsch auch im Markup).
// Danach: node tools/build-lang.mjs. Ein zweiter Lauf findet die alten Texte nicht mehr und bricht ab (gewollt).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LANG = ['de', 'en', 'hr'];

const NEU = {
  rp2_p: {
    de: '1.9: Spieler sagen dir, was sie wollen, und du verhandelst. Jeder Spieler bekommt sein eigenes Training, und Arzt und Akademieleiter sind echte Personen. Davor 1.8: Die News haben zwei Fächer, und deine Liga erinnert sich. Meldest du einen Fehler, rückt er auf der Liste nach oben.',
    en: '1.9: players tell you what they want and you negotiate, every player gets his own training, and your doctor and academy manager are real people. Before that, 1.8: the news has two tabs and your league remembers. Report a bug and it moves up the list.',
    hr: '1.9: igrači ti kažu što žele, a ti pregovaraš, svaki igrač ima svoj individualni rad, a liječnik i voditelj akademije prave su osobe. Prije toga 1.8: vijesti imaju dvije kartice, a tvoja liga pamti. Prijaviš grešku, ide gore na listi.',
  },
  dl_neu_p: { // = „kurz“ im Tagebuch-Eintrag 1.9 (Mappe v1.9/tagebuch-1-9.mjs, Stand 15.11.2026)
    de: 'Diesmal geht es um die Woche zwischen den Spielen. Jeder Spieler bekommt sein eigenes Training, und wer neu ist, braucht erst mal Zeit. Spieler sagen dir jetzt, was sie wollen, und du verhandelst mit ihnen. Arzt und Akademieleiter sind echte Personen, gescoutet wird auf der Europakarte, und im Live-Ticker schreibt jetzt ein Kommentator mit.',
    en: 'This one is about the week between matches. Every player gets his own training, and new signings need some time first. Players now tell you what they want and you negotiate with them. Your doctor and academy manager are real people, scouting happens on a map of Europe, and the live ticker has a commentator now.',
    hr: 'Ovaj put sve se vrti oko tjedna između utakmica. Svaki igrač dobiva svoj individualni rad, a pojačanjima prvo treba malo vremena. Igrači ti sada kažu što žele, a ti s njima pregovaraš. Liječnik i voditelj akademije prave su osobe, skauting ide preko karte Europe, a tekstualni prijenos uživo sada vodi komentator.',
  },
  a2_live: {
    de: '1.9 „Zwischen den Spielen“. Jeder Spieler bekommt sein eigenes Training: ein Wert oder eine neue Position. Jeder Spieler fordert Rolle, Laufzeit und Gehalt, und ob dein Angebot passt, sagt erst seine Antwort mit Grund. Neuzugänge brauchen Zeit, bis sie angekommen sind, und das siehst du im Spiel. Mannschaftsarzt und Akademieleiter sind jetzt Personen mit Gehalt, Bewerbern und Angeboten anderer Vereine. Gescoutet wird auf der Europakarte, und der Vorstand nennt sein Saisonziel mit Wettbewerb und Plätzen.',
    en: '1.9, Between matches. Every player gets his own individual work: one attribute or a new position. Players name their demands, role, contract length and wages, and only their answer, with a reason, tells you if your offer fits. New signings need time to settle in, and you see it on the pitch. Your club doctor and academy manager are real people now, with wages, applicants and offers from rival clubs. Scouting happens on a map of Europe, and the board sets its target with the competition and the places.',
    hr: '1.9 „Između utakmica“. Svaki igrač dobiva individualni rad: jednu vrijednost ili novu poziciju. Igrači traže ulogu, trajanje ugovora i plaću, a tek odgovor s razlogom kaže odgovara li tvoja ponuda. Pojačanjima treba vremena da se uklope, a to se vidi i na terenu. Klupski liječnik i voditelj akademije sada su osobe, s plaćom, kandidatima i ponudama drugih klubova. Skauting ide preko karte Europe, a uprava cilj sezone zadaje s natjecanjem i plasmanom.',
  },
};

const zaehle = (s, teil) => s.split(teil).length - 1;
const ersetze = (s, alt, neu, name, soll) => {
  const n = zaehle(s, alt);
  if (n !== soll) throw new Error(`${name}: ${n}x gefunden, erwartet ${soll}x`);
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
    if (!altRoh.startsWith('1.9') && !altRoh.startsWith('Diesmal') && !altRoh.startsWith('This one') && !altRoh.startsWith('Ovaj put')) throw new Error(`${k}/${l}: steht nicht auf 1.9`);
    if (altRoh === neu[l]) throw new Error(`${k}/${l}: schon gesetzt`);
    s = ersetze(s, `"${k}":${m[1]}`, `"${k}":${JSON.stringify(neu[l])}`, `${k}/${l}`, 1);
    if (l === 'de') s = ersetze(s, `">${htmlEsc(altRoh)}<`, `">${htmlEsc(neu.de)}<`, `${k}/Markup`, 1);
  });
}
fs.writeFileSync(datei, s, 'utf8');
console.log('Webseite 1.9: Forderungen und Tagebuch-Karte gesetzt. Jetzt: node tools/build-lang.mjs');
