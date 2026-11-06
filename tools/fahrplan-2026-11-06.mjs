// Fahrplan nachgezogen auf E-1217 und E-1220 (Fabians Klick 06.11.2026, „Ohne Inhalt“): 1.9 kommt vor dem neuen Spielmotor,
// darum steht „Erst noch ein Update“ als Nächstes, 2D rückt als „Der große Schritt“ eine Zeile nach unten. Kein Termin, nichts aus 1.9.
// Ändert das Wörterbuch (DE/EN/HR, je Sprache geschrieben) und das Markup der deutschen Quellseite.
// EN/HR baut danach `node tools/build-lang.mjs JJJJ-MM-TT`. Bricht ab, wenn eine Stelle nicht genau einmal da ist.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const genau = (s, alt, neu, name) => { const n = s.split(alt).length - 1; if (n !== 1) throw new Error(`${name}: ${n}x statt 1x`); return s.replace(alt, neu); };

const T = {
  de: {
    altH: 'Deine Spiele in 2D',
    altP: 'Ein neuer Spielmotor, und du siehst deine Spiele in 2D: alle 22 Spieler, jeden Pass, jeden Laufweg. Das wird unser größtes Update und dauert länger als die davor. Einen Termin gibt es noch nicht, kleinere Updates beheben bis dahin Fehler.',
    neuH: 'Erst noch ein Update',
    neuP: 'Bevor der neue Spielmotor kommt, bekommt das Spiel noch ein Update. Was drin ist, siehst du, wenn es da ist. Kleinere Updates beheben weiter Fehler, wenn sie auftauchen.',
    marke: 'Der große Schritt',
    zweiD: 'Ein neuer Spielmotor, und du siehst deine Spiele in 2D: alle 22 Spieler, jeden Pass, jeden Laufweg. Das wird unser größtes Update und dauert länger als die davor. Einen Termin gibt es noch nicht.',
  },
  en: {
    altH: 'Your matches in 2D',
    altP: 'A new match engine, and you see your matches in 2D: all 22 players, every pass, every run. It will be our biggest update and takes longer than the ones before. There’s no date yet, and smaller updates fix bugs until then.',
    neuH: 'Another update first',
    neuP: 'Before the new match engine, the game gets another update. You’ll see what’s in it when it’s out. Smaller updates keep fixing bugs as they turn up.',
    marke: 'The big step',
    zweiD: 'A new match engine, and you see your matches in 2D: all 22 players, every pass, every run. It will be our biggest update and takes longer than the ones before. There’s no date yet.',
  },
  hr: {
    altH: 'Tvoje utakmice u 2D',
    altP: 'Novi motor utakmice, a svoje utakmice gledaš u 2D: svih 22 igrača, svako dodavanje, svako kretanje. Bit će to naše najveće ažuriranje i traje dulje od prethodnih. Datuma još nema, a do tada manja ažuriranja popravljaju greške.',
    neuH: 'Prvo još jedno ažuriranje',
    neuP: 'Prije novog motora utakmice igra dobiva još jedno ažuriranje. Što je u njemu, vidjet ćeš kad izađe. Manja ažuriranja i dalje popravljaju greške kad se pojave.',
    marke: 'Veliki korak',
    zweiD: 'Novi motor utakmice, a svoje utakmice gledaš u 2D: svih 22 igrača, svako dodavanje, svako kretanje. Bit će to naše najveće ažuriranje i traje dulje od prethodnih. Datuma još nema.',
  },
};

let s = fs.readFileSync(path.join(W, 'index.html'), 'utf8');
for (const [l, t] of Object.entries(T)) {
  s = genau(s, `"rp3_h":"${t.altH}","rp3_p":"${t.altP}"`,
    `"rp3_h":"${t.neuH}","rp3_p":"${t.neuP}","rp3b_ph":"${t.marke}","rp3b_h":"${t.altH}","rp3b_p":"${t.zweiD}"`, 'Wörterbuch ' + l);
}

const zeile = (k, ph, h, p) => `<div class="tl-item"><span class="tl-dot"></span><div class="tl-body"><span class="tl-ph" data-i18n="${k}_ph">${ph}</span><h3 data-i18n="${k}_h">${h}</h3><p data-i18n="${k}_p">${p}</p></div></div>`;
const d = T.de;
s = genau(s, zeile('rp3', 'Als Nächstes', d.altH, d.altP),
  zeile('rp3', 'Als Nächstes', d.neuH, d.neuP) + '\n      ' + zeile('rp3b', d.marke, d.altH, d.zweiD), 'Markup');

fs.writeFileSync(path.join(W, 'index.html'), s, 'utf8');
console.log('ok');
