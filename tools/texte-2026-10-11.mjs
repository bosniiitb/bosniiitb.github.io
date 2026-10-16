// Webseiten-Texte zu 1.2.1 (Entwurf 11.10.2026, 17:0x, Marketing-Sitzung; wartet auf Fabians Abnahme und darauf, dass 1.2.1 live ist).
// Anwenden: node tools/texte-anwenden.mjs --texte=./texte-2026-10-11.mjs   danach  node tools/build-lang.mjs <JJJJ-MM-TT des Pushs>
// Vergleich alt/neu ohne zu schreiben: node tools/texte-anwenden.mjs --texte=./texte-2026-10-11.mjs --liste <ausgabe.md>
// Gezaehlt (11.10.2026): fuenf Schluessel nennen den Stand 1.2 (status2_live, a2_live, rp2_p, eh_chips) oder versprechen, dass alles auf dem Handy
// bleibt (a6). usp1_p („Kein Server, kein Konto“) bleibt wahr und unveraendert. Dazu ausserhalb des Woerterbuchs: die drei Datenschutzseiten
// (Absatz Google Play Games, Liste „verlaesst Ihr Geraet nicht“, Loeschung) und presse.html („aktuell 1.2“). Jede Sprache fuer sich geschrieben (Regel 48).
export default {
  status2_live: {
    de: "1.2.1 ist im Play Store: jeder Verein mit eigenem Wappen, deine Karriere in der Cloud.",
    en: "1.2.1 is on the Play Store: a crest for every club, and your career backed up.",
    hr: "1.2.1 je na Play Storeu: svaki klub sa svojim grbom, a karijera spremljena u oblak.",
  },

  a2_live: {
    de: "1.2.1. Neu darin: jeder der 1.458 Vereine hat sein eigenes Wappen, und das Spiel trägt die Farben deines Vereins. Deine Karriere sicherst du über Google Play Spiele und spielst sie auch auf einem neuen Handy weiter, dazu kommen 17 Erfolge. Der Pokal wächst Runde für Runde zum Turnierbaum, Talente holst du im Gespräch, und Gebote für deine Spieler fallen verschieden aus. Aus 1.2: Europa spielst du selbst, von der Quali bis zum Finale am neutralen Ort, die Relegation läuft in jedem Land wie dort in echt, und jeder Verein plant seine Saison. Dazu alles aus 1.1: der Vorstand mit Stimme, Stadion, Akademie und Scouting als Räume, Training mit Zeugnis, ein Markt mit KI-Verhandlungen. Es fehlt noch: die Trainerkarriere.",
    en: "1.2.1. New in it: every one of the 1,458 clubs has its own crest, and the game wears your club's colours. Back up your career with Google Play Games and carry on with it on a new phone, with 17 achievements to collect along the way. Cup draws grow into a bracket round by round, prospects are won over in a conversation, and bids for your players vary. From 1.2: you play Europe yourself, from the qualifiers to a final at a neutral venue, relegation play-offs follow each country's real format, and every club plans its season. Plus everything from 1.1: the board with a voice, stadium, academy and scouting as rooms, training with a report, a market where the AI negotiates. Still missing: a manager career.",
    hr: "1.2.1. Novo u njoj: svaki od 1.458 klubova ima svoj grb, a igra nosi boje tvog kluba. Karijeru spremaš u oblak preko Google Play igara i nastavljaš je na novom mobitelu, a usput skupljaš 17 postignuća. Kup se gradi kolo po kolo, talente dovodiš kroz razgovor, a ponude za tvoje igrače više nisu jednake. Iz 1.2: Europu igraš sam, od kvalifikacija do finala na neutralnom terenu, doigravanje se u svakoj zemlji igra kao u stvarnosti, a svaki klub planira sezonu. Uz to sve iz 1.1: uprava s glasom, stadion, akademija i skauting kao prostorije, trening s izvještajem, tržište na kojem AI pregovara. Još nema: trenerske karijere.",
  },

  a6: {
    de: "Nur zum Herunterladen. Danach läuft alles auf deinem Handy, ohne Konto und ohne Server. Wer mag, sichert seine Karriere im WLAN über Google Play Spiele, nötig ist das nicht. Spiel im Zug, im Flugzeug, wo du willst.",
    en: "Only to download it. After that everything runs on your phone, no account, no server. If you like, Google Play Games backs up your career over Wi-Fi, but you don't need it. Play on the train, on a plane, wherever.",
    hr: "Samo za preuzimanje. Nakon toga sve radi na tvom mobitelu, bez računa i bez servera. Ako želiš, karijeru preko Wi-Fi mreže spremaš u Google Play igre, ali nije nužno. Igraj u vlaku, u avionu, gdje god.",
  },

  rp2_p: {
    de: "1.2.1: ein Wappen für jeden Verein, das Spiel in den Farben deines Vereins, die Karriere gesichert über Google Play Spiele, 17 Erfolge, der Pokal als Turnierbaum und Talente, die du im Gespräch überzeugst. Davor 1.2: Europa selbst gespielt, die Relegation wie in jedem Land, eine neue Wirtschaft. Meldest du einen Fehler, rückt er auf der Liste nach oben.",
    en: "1.2.1: a crest for every club, the game in your club's colours, your career backed up with Google Play Games, 17 achievements, cup draws as a bracket, and prospects you win over in a conversation. Before that, 1.2: Europe played by you, relegation play-offs the way each country runs them, a rebuilt economy. Report a bug and it moves up the list.",
    hr: "1.2.1: grb za svaki klub, igra u bojama tvog kluba, karijera spremljena preko Google Play igara, 17 postignuća, kup kolo po kolo i talenti koje moraš uvjeriti u razgovoru. Prije toga 1.2: Europa koju igraš sam, doigravanje kao u svakoj zemlji, nova ekonomija. Prijaviš grešku, ide gore na listi.",
  },

  eh_chips: {
    de: ["1.0.0 · Anpfiff","1.0.2 · Transfermarkt","1.0.4 · Zuschauer & Berichte","1.0.5 · Leihmarkt & Großputz","1.0.6 · Bedienung","1.0.7 · Jugendakademie","1.0.8 · Realistische Leihen","1.0.9 · Verträge & Ausbau","1.1.0 · Wirtschaft & Der erste Tag","1.1.2 · Tempo & Feinschliff","1.1.3 · Der Vorstand","1.2 · Europa","1.2.1 · Wappen & Cloud"],
    en: ["1.0.0 · Kick-off","1.0.2 · Transfer market","1.0.4 · Crowds & reports","1.0.5 · Loan market & clean-up","1.0.6 · Polish & handling","1.0.7 · Youth academy","1.0.8 · Realistic loans","1.0.9 · Contracts & expansion","1.1.0 · Finances & first day","1.1.2 · Speed & polish","1.1.3 · The board","1.2 · Europe","1.2.1 · Crests & cloud save"],
    hr: ["1.0.0 · Prvi sudački zvižduk","1.0.2 · Transferi","1.0.4 · Publika i izvještaji","1.0.5 · Posudbe i veliko spremanje","1.0.6 · Dorada sučelja","1.0.7 · Akademija","1.0.8 · Realistične posudbe","1.0.9 · Ugovori i izgradnja","1.1.0 · Financije i prvi dan","1.1.2 · Brzina i dorada","1.1.3 · Uprava","1.2 · Europa","1.2.1 · Grbovi i oblak"],
  },
};
