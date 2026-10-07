// Webseiten-Texte nach der Gewerbeanmeldung und mit dem Bezahlmodell aus 1.2 (07.10.2026, E-692/2) — vier Schluessel, drei Sprachen.
// Anwenden: node tools/texte-anwenden.mjs --texte=./texte-2026-10-07.mjs   danach  node tools/build-lang.mjs 2026-10-07
// Die Frist („bis 31. Oktober") steht bewusst nur in hero_lead und a4: am 01.11.2026 werden nur diese zwei umgestellt.
// play_live_hint und usp2_t sind zeitlos (kein „kostenlos" mehr, das ab November nicht mehr stimmt).
// Die Frist-Saetze sind die abgenommenen Saetze der Store-Texte 1.2 (E-690); der Rest je Sprache fuer sich geschrieben (Regel 48),
// Kroatisch genusfrei („Igru imaš od prije", wie im Spiel), nach den .hr-Quellen.
export default {
  hero_lead: {
    de: "Wer bis 31. Oktober installiert, spielt für immer gratis. Komplett offline, ohne Werbung. Eine Welt aus 1.459 Vereinen, die auch ohne dich weiterspielt. Läuft, fertig ist es nicht: ich baue jede Woche weiter dran.",
    en: "Install by 31 October and the game stays free for you, for good. Fully offline, no ads. A world of 1,459 clubs that keeps playing without you. It runs, but it isn't finished: I keep building on it every week.",
    hr: "Tko instalira do 31. listopada, igra zauvijek besplatno. Potpuno offline, bez reklama. Svijet od 1.459 klubova koji igra i bez tebe. Radi, ali gotova nije: gradim dalje, svaki tjedan.",
  },

  play_live_hint: {
    de: "Early Access: ohne Werbung, ohne Abo, ganz offline.",
    en: "Early access: no ads, no subscription, fully offline.",
    hr: "Rani pristup: bez reklama, bez pretplate, potpuno offline.",
  },

  usp2_t: {
    de: "Keine Werbung · kein Abo",
    en: "No ads · no subscription",
    hr: "Bez reklama · bez pretplate",
  },

  a4: {
    de: "Wer bis 31. Oktober installiert, spielt für immer gratis. Ab November beginnt jede neue Karriere mit einer freien Saison, danach kostet das ganze Spiel einmalig 6,99 €, angezeigt in deiner Währung. Kein Abo, kein Pay-to-Win, keine Werbung, sonst nichts zu kaufen. Und wenn du schon vorher dabei warst und nach einer Neuinstallation plötzlich zahlen sollst: schreib mir, ich regle das.",
    en: "Install by 31 October and you play for free, for good. From November, every new career starts with a free season, and after that the whole game costs 6.99 € once, shown in your own currency. No subscription, no pay-to-win, no ads, nothing else to buy. If you were in early and a reinstall suddenly asks you to pay, write to me and I will sort it out.",
    hr: "Tko instalira do 31. listopada, igra zauvijek besplatno. Od studenoga svaka nova karijera počinje besplatnom sezonom, a zatim cijela igra jednokratno stoji 6,99 €, prikazano u tvojoj valuti. Bez pretplate, bez pay-to-wina, bez reklama, ništa drugo se ne kupuje. Ako igru imaš od prije, a nakon ponovne instalacije odjednom traži plaćanje, javi mi i riješit ću to.",
  },
};
