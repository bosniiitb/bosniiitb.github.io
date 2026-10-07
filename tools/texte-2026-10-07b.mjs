// Webseiten-Texte fuer Version 1.2 (07.10.2026, E-692 Nachtrag: Fabians Klick „Ja, mit vorbereiten") — acht Schluessel, drei Sprachen.
// Anwenden: node tools/texte-anwenden.mjs --texte=./texte-2026-10-07b.mjs   danach  node tools/build-lang.mjs 2026-10-07
// Inhalt aus den abgenommenen Store-Texten 1.2 (E-690): Europa selbst spielen · Relegation wie im jeweiligen Land · neu gebaute Wirtschaft
// mit Saisonplan · Talente aus fremden Akademien mit Vorwarnung. „Als Naechstes" aus der Roadmap (nach 1.2: Pakete 3–5).
// sc_p: „Relegation in 70 Ligen" ersetzt — seit MP590 sind es 49 Grenzen in sieben Formen, die Zahl stimmte nicht mehr.
// Je Sprache fuer sich geschrieben (Regel 48), Kroatisch nach den .hr-Quellen, keine Gedankenstriche.
export default {
  status2_live: {
    de: "1.2 ist im Play Store: Europa spielst du jetzt selbst.",
    en: "1.2 is on the Play Store: take your club into Europe.",
    hr: "1.2 je na Play Storeu: Europu sada igraš sam.",
  },

  rp2_p: {
    de: "1.2, Europa: Quali, Gruppenabende, K.-o.-Runden und ein Finale am neutralen Ort, alles selbst gespielt. Dazu die Relegation in jedem Land, wie sie dort wirklich läuft, eine neu gebaute Wirtschaft mit einem Saisonplan für jeden Verein und Talente, die du dir aus fremden Akademien holst. Meldest du einen Fehler, rückt er auf der Liste nach oben.",
    en: "1.2, Europe: qualifiers, group nights, knockout ties and a final at a neutral venue, all played by you. Plus relegation play-offs run the way each country runs them, a rebuilt economy where every club plans its season, and prospects you can prise away from other academies. Report a bug and it moves up the list.",
    hr: "1.2, Europa: kvalifikacije, večeri u skupinama, nokaut-runde i finale na neutralnom terenu, sve igraš sam. Uz to doigravanje u svakoj zemlji kako se ondje stvarno igra, iznova izgrađena ekonomija u kojoj svaki klub planira sezonu i talenti koje dovodiš iz tuđih akademija. Prijaviš grešku, ide gore na listi.",
  },

  rp3_h: {
    de: "Vereine mit eigenem Kopf",
    en: "Clubs with a mind of their own",
    hr: "Klubovi koji odlučuju sami",
  },

  rp3_p: {
    de: "Trainer bringen ihre Spielidee mit, und wenn sie gehen, geht die Idee mit. Vorstände reagieren auf die Lage statt auf den Kalender, Stadion und Akademie wachsen und schrumpfen mit dem Verein. Und die Welt erzählt davon: Rivalen, Riesen, Überraschungsteams und deine ehemaligen Spieler.",
    en: "Managers bring their own way of playing, and it leaves with them. Boards react to how things are going rather than to the calendar, and stadiums and academies grow or shrink with the club. And the world talks about it: rivals, giants, surprise packages and your former players.",
    hr: "Treneri donose svoju ideju igre, a kad odu, odlazi i ona. Uprave reagiraju na stanje, a ne na kalendar, a stadion i akademija rastu i smanjuju se zajedno s klubom. I svijet o tome priča: rivali, velikani, iznenađenja sezone i tvoji bivši igrači.",
  },

  a2_live: {
    de: "1.2, Europa. Neu darin: Europa spielst du selbst, von der Quali über Gruppenabende und K.-o.-Runden bis zum Finale am neutralen Ort. Die Relegation läuft in jedem Land so, wie sie dort wirklich ausgetragen wird. Die Wirtschaft ist neu gebaut: jeder Verein plant seine Saison, Zuschauer und Umsatz passen zur Liga, das Kassenbuch läuft Monat für Monat. Und du holst dir Talente aus fremden Akademien; will ein Großer eines deiner Talente, erfährst du es vorher. Dazu alles aus 1.1: der Vorstand mit Stimme, Stadion, Akademie und Scouting als Räume, Training mit Zeugnis, ein Markt mit KI-Verhandlungen, der Tag rechnet im Hintergrund. Es fehlt noch: die Trainerkarriere.",
    en: "1.2, Europe. New in it: you play Europe yourself, from the qualifiers through group nights and knockout ties to a final at a neutral venue. Relegation play-offs follow each country's real format. The economy has been rebuilt: every club plans its season, crowds and revenue fit the league, and your ledger runs month by month. And you can sign prospects from other academies; when a bigger club comes for one of yours, you hear about it first. Plus everything from 1.1: the board with a voice, stadium, academy and scouting as rooms, training with a report, a market where the AI negotiates, the day computed in the background. Still missing: a manager career.",
    hr: "1.2, Europa. Novo u njoj: Europu igraš sam, od kvalifikacija preko večeri u skupinama i nokaut-rundi do finala na neutralnom terenu. Doigravanje za ostanak igra se u svakoj zemlji onako kako se ondje stvarno igra. Ekonomija je izgrađena iznova: svaki klub planira sezonu, gledatelji i prihodi prate ligu, a blagajna se vodi iz mjeseca u mjesec. Talente dovodiš i iz tuđih akademija, a kad veći klub krene po tvoj talent, saznaš to na vrijeme. Uz to sve iz 1.1: uprava s glasom, stadion, akademija i skauting kao prostorije, trening s izvještajem, tržište na kojem AI pregovara, dan se računa u pozadini. Još nema: trenerske karijere.",
  },

  a3: {
    de: "Ein Spiel, das läuft, aber noch Ecken und Kanten hat. Drin ist alles Wichtige: 100 Ligen mit Auf- und Abstieg, Pokale und Europapokal, Live-Matches mit Taktik-Eingriff, Verhandlungen mit Klub und Spieler, Leihen, Ratenzahlung, Jugendakademie, Scouting, Training, Spieler mit Charakter, Verletzungen, Sperren, Finanzen, Sponsoren und der Etat vom Vorstand. <b>Noch nicht drin: die Trainer-Karriere.</b> Und ehrlich: Fehler gibt es auch noch. Wenn dir einer begegnet, schreib mir.",
    en: "A game that runs but still has rough edges. Everything important is in: 100 leagues with promotion and relegation, domestic and European cups, live matches with tactical changes, negotiations with club and player, loans, instalments, a youth academy, scouting, training, players with character, injuries, suspensions, finances, sponsors and a budget from the board. <b>Not in yet: a manager's career.</b> And honestly: there are still bugs. If you meet one, write to me.",
    hr: "Igra koja radi, ali još nije uglađena. Unutra je sve bitno: 100 liga s ulaskom u viši rang i ispadanjem, domaći i europski kupovi, utakmice uživo s promjenama taktike usred igre, pregovori s klubom i igračem, posudbe, plaćanje na rate, akademija, skauting, trening, igrači s karakterom, ozljede, suspenzije, financije, sponzori i proračun od uprave. <b>Još nema: trenerske karijere.</b> I iskreno: grešaka još ima. Ako naletiš na neku, piši mi.",
  },

  sc_p: {
    de: "Kein kleines Manager-Spiel: <b>100 Ligen in 51 Ländern</b>, <b>1.459 Vereine</b> und über <b>30.000 Spieler</b>, mit Auf- und Abstieg, einer Relegation, wie sie in jedem Land wirklich gespielt wird, nationalen Pokalen, Europapokal und einem Transfermarkt, auf dem die anderen Vereine selbstständig handeln. Alles von einem einzigen Entwickler, ohne Pay-to-Win.",
    en: "No lightweight manager game: <b>100 leagues across 51 countries</b>, <b>1,459 clubs</b> and over <b>30,000 players</b>, with promotion and relegation, play-offs run the way each country really runs them, national cups, European competition and a transfer market where the other clubs do their own wheeling and dealing. All built by a single developer, no pay-to-win.",
    hr: "Ovo nije mala menadžerska igra: <b>100 liga u 51 zemlji</b>, <b>1.459 klubova</b> i preko <b>30.000 igrača</b>, s ulaskom u viši rang i ispadanjem, doigravanjem kakvo se u svakoj zemlji stvarno igra, nacionalnim kupovima, europskim natjecanjima i prijelaznim rokovima u kojima ostali klubovi sami kupuju, prodaju i posuđuju. Sve od jednog jedinog developera, bez pay-to-wina.",
  },

  eh_chips: {
    de: ["1.0.0 · Anpfiff", "1.0.2 · Transfermarkt", "1.0.4 · Zuschauer & Berichte", "1.0.5 · Leihmarkt & Großputz", "1.0.6 · Bedienung", "1.0.7 · Jugendakademie", "1.0.8 · Realistische Leihen", "1.0.9 · Verträge & Ausbau", "1.1.0 · Wirtschaft & Der erste Tag", "1.1.2 · Tempo & Feinschliff", "1.1.3 · Der Vorstand", "1.2 · Europa"],
    en: ["1.0.0 · Kick-off", "1.0.2 · Transfer market", "1.0.4 · Crowds & reports", "1.0.5 · Loan market & clean-up", "1.0.6 · Polish & handling", "1.0.7 · Youth academy", "1.0.8 · Realistic loans", "1.0.9 · Contracts & expansion", "1.1.0 · Finances & first day", "1.1.2 · Speed & polish", "1.1.3 · The board", "1.2 · Europe"],
    hr: ["1.0.0 · Prvi sudački zvižduk", "1.0.2 · Transferi", "1.0.4 · Publika i izvještaji", "1.0.5 · Posudbe i veliko spremanje", "1.0.6 · Dorada sučelja", "1.0.7 · Akademija", "1.0.8 · Realistične posudbe", "1.0.9 · Ugovori i izgradnja", "1.1.0 · Financije i prvi dan", "1.1.2 · Brzina i dorada", "1.1.3 · Uprava", "1.2 · Europa"],
  },
};
