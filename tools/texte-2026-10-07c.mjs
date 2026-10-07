// Webseiten-Texte ohne festen Termin (07.10.2026, E-692 Nachtrag 2: Fabians Klick „Datum raus") — fuenf Schluessel, drei Sprachen.
// Anwenden: node tools/texte-anwenden.mjs --texte=./texte-2026-10-07c.mjs   danach  node tools/build-lang.mjs 2026-10-07
// Grund: die Roadmap plant seit 19.08.2026 bewusst ohne Datum (E-232: „ein gebrochenes Datum ist schlimmer als gar keins").
// Gezaehlt: fuenf Schluessel im Woerterbuch (a1 unsichtbar, a1_live, w_p, a5, rp5_p), dazu Presse- und Willkommensseite.
// Die alten datierten Neuigkeiten vom Juli bleiben, wie sie damals geschrieben wurden.
export default {
  a1: {
    de: "Ja, über die Testgruppe. Zwei Schritte oben auf der Seite, dann bist du drin.",
    en: "Yes, through the test group. Two steps at the top of the page and you're in.",
    hr: "Da, kroz testnu grupu. Dva koraka na vrhu stranice i unutra si.",
  },

  a1_live: {
    de: "Ja. Trainer's Boardroom steht als Early Access im Play Store: laden, Verein aussuchen, Anpfiff. Fertig ist es noch nicht, es wächst Version für Version.",
    en: "Yes. Trainer's Boardroom is on the Play Store as early access: download, pick your club, kick off. It isn't finished yet; it grows with every version.",
    hr: "Da. Trainer's Boardroom je na Play Storeu kao rani pristup: preuzmi, odaberi klub i kreni. Još nije gotov i raste iz verzije u verziju.",
  },

  w_p: {
    de: "Fertig ist es noch nicht, es wächst Version für Version. Wenn du mitbekommen willst, was als Nächstes kommt, trag dich ein.",
    en: "It isn't finished yet; it grows with every version. If you want to hear what's coming next, leave your email.",
    hr: "Igra još nije gotova i raste iz verzije u verziju. Ako želiš pratiti što dolazi, upiši se.",
  },

  a5: {
    de: "Android ist schon da, im Play Store. Das iPhone kommt danach, einen Termin gibt es noch nicht. Trag dich ein, dann sage ich dir Bescheid.",
    en: "Android is already out, on Google Play. iPhone comes after that, with no date yet. Sign up and I'll let you know.",
    hr: "Android je već vani, na Google Playu. iPhone dolazi nakon toga, datuma još nema. Upiši se pa ti javim.",
  },

  rp5_p: {
    de: "Kommt, wenn es fertig ist, nicht an einem Stichtag. Danach das iPhone, und die Entwicklung geht weiter.",
    en: "Out when it's ready, not on a set date. Then iPhone, and development carries on.",
    hr: "Izlazi kad bude gotova, a ne na zadani datum. Zatim iPhone, a razvoj ide dalje.",
  },
};
