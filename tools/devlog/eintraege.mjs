// Entwickler-Tagebuch (E-821, Goldene Regel 55): je Version ein Eintrag, neuester zuerst. Stoff von der Coding-Sitzung (Regel 54),
// Text in Fabians Stimme (Regel 52), jede Sprache für sich (Regel 48), nie das Rezept (Formeln, Schwellen, Gewichte).
// Gebaut wird mit tools/devlog/bauen.mjs → /devlog/, /en/devlog/, /hr/devlog/ und je Version /devlog/<slug>/.
//
// zahlen: { wert, nach?, komma?, text } — „wert“ zählt beim Sichtbarwerden hoch; nur gemessene oder belegte Zahlen.

export const EINTRAEGE = [
  {
    version: '1.3.1', slug: '1-3-1',
    datum: { de: 'Oktober 2026', en: 'October 2026', hr: 'listopad 2026.' },
    name: { de: 'Kassenbuch & Kapitän', en: 'The books & the armband', hr: 'Blagajna i kapetan' },
    kurz: {
      de: 'Käufe klappen wieder, das Kassenbuch zeigt dir die ganze Saison, und dein Kapitän bekommt nach einer Sperre seine Binde zurück.',
      en: 'Signings work again, the books show you the whole season, and your captain gets the armband back after a ban.',
      hr: 'Kupnje igrača opet prolaze, blagajna ti pokazuje cijelu sezonu, a kapetan nakon kazne dobiva traku natrag.',
    },
    blick: {
      de: [
        'Käufe klappen wieder. Seit 1.2 stürzte die Verhandlung mit dem Spieler nach der Einigung über die Ablöse ab.',
        'Das Kassenbuch zeigt oben deine ganze Saison auf einen Blick.',
        'Nach Verletzung oder Sperre bekommt dein Kapitän die Binde zurück.',
        'Fehlen dir Spieler, rücken Talente ab 16 aus der Akademie nach.',
        'Nach der Relegation melden sich die Fans.',
      ],
      en: [
        'Signings work again. Since 1.2 the game crashed when you opened contract talks after agreeing a fee.',
        'The books open with your whole season at a glance.',
        'Back from an injury or a ban, your captain gets the armband back.',
        'Short of players? Academy kids from 16 step in.',
        'Fans have their say after a relegation play-off.',
      ],
      hr: [
        'Kupnje igrača opet prolaze. Od verzije 1.2 igra se rušila u pregovorima s igračem nakon dogovora oko odštete.',
        'Blagajna na vrhu pokazuje cijelu sezonu.',
        'Nakon ozljede ili kazne kapetan dobiva traku natrag.',
        'Kad nedostaje igrača, uskaču talenti iz akademije od 16 godina.',
        'Navijači se javljaju nakon kvalifikacija za ostanak.',
      ],
    },
    zahlen: [
      { wert: 12, nach: { de: ' Std.', en: ' hrs', hr: ' h' }, text: { de: 'knapp, vom Fund des Kauf-Absturzes bis zur Reparatur übers Netz.', en: 'just under, from finding the signing crash to the fix going out over the air.', hr: 'nešto manje, od otkrića rušenja pri kupnji do popravka preko mreže.' } },
      { wert: 318, text: { de: 'Bausteine der Oberfläche nach demselben Fehler abgesucht. Er saß nur an dieser einen Stelle.', en: 'building blocks of the interface checked for the same mistake. It was only in this one place.', hr: 'dijelova sučelja pregledano zbog iste greške. Bila je samo na tom jednom mjestu.' } },
      { wert: 5, nach: { de: ' Min.', en: ' min', hr: ' min' }, text: { de: 'zwischen zwei Cloud-Sicherungen. Vorher frühestens alle 15.', en: 'between two cloud backups. Before: every 15 at the earliest.', hr: 'između dva spremanja u oblak. Prije: najranije svakih 15.' } },
      { wert: 14, text: { de: 'Blätter schließt du jetzt mit einem Wisch nach unten.', en: 'sheets now close with a swipe down.', hr: 'prozora sad zatvaraš povlačenjem prema dolje.' } },
    ],
    hindernis: {
      titel: { de: 'Fast vier Tage ohne Kauf', en: 'Almost four days without a signing', hr: 'Gotovo četiri dana bez kupnje' },
      text: {
        de: 'Beim Bauen von 1.4 ist mir ein Absturz aufgefallen, der schon seit 1.2 im Spiel war: Sobald du dich mit einem Verein über die Ablöse geeinigt hattest und mit dem Spieler verhandeln wolltest, ist das Spiel abgestürzt. Fast vier Tage lang ging also kein Kauf durch, egal ob bar oder auf Raten. Leihen waren nie betroffen. 1.3 war da schon von Google freigegeben, ich habe sie trotzdem nicht veröffentlicht. Stattdessen kam 1.3.1 mit der Reparatur, und wer 1.2.2 spielt, bekommt sie übers Netz, ab dem übernächsten Start. Selbst das hat gehakt: Das Update übers Netz ging erst im dritten Anlauf raus, weil das Werkzeug dafür zweimal neue Pflichtangaben wollte. Danach haben wir alle 318 Bausteine der Oberfläche nach demselben Fehler abgesucht, er saß nur an dieser einen Stelle.',
        en: 'While building 1.4 I found a crash that had been in the game since 1.2: once you agreed a fee with a club and opened contract talks with the player, the game crashed. So for almost four days no signing went through, paid at once or in instalments. Loans were never affected. Google had already approved 1.3, but I didn\'t release it. 1.3.1 came instead with the fix, and if you play 1.2.2 you get it over the air from your second start on. Even that didn\'t go smoothly: the over-the-air update only went out on the third try, because the tool suddenly wanted two new required settings. After that we checked all 318 building blocks of the interface for the same mistake, and it was only in this one place.',
        hr: 'Dok sam radio na 1.4, naišao sam na rušenje koje je u igri bilo još od verzije 1.2: kad bi se s klubom dogovorio oko odštete i otvorio pregovore s igračem, igra bi se srušila. Gotovo četiri dana nije prošla nijedna kupnja, ni odjednom ni na rate. Posudbe nikad nisu bile pogođene. Google je 1.3 već odobrio, ali je nisam objavio. Umjesto nje stigla je 1.3.1 s popravkom, a tko igra 1.2.2, popravak dobiva preko mreže i vrijedi od drugog idućeg pokretanja igre. Ni to nije išlo glatko: ažuriranje preko mreže prošlo je tek iz trećeg pokušaja, jer je alat dvaput tražio nove obavezne podatke. Nakon toga smo pregledali svih 318 dijelova sučelja tražeći istu grešku. Bila je samo na tom jednom mjestu.',
      },
    },
    aenderungen: {
      de: {
        neu: [
          'Fehlt dein Kapitän, trägt der beste einsatzfähige Spieler der Elf die Binde. Steht er wieder in der Elf, bekommt er sie zurück. Im Kader bleibt das „C“ beim echten Kapitän.',
          'Die Fans melden sich zur Relegation und zu den Aufstiegs-Playoffs: nach dem Hinspiel, nach der Entscheidung, auch nach dem Elfmeterschießen.',
          'Fehlen vor dem Anpfiff Spieler, rücken Talente ab 16 aus der Akademie für dieses Spiel nach, und der Einsatz hilft ihnen.',
          'Fällt eine Mannschaft unter sieben Spieler, wird das Spiel abgebrochen wie im echten Fußball. Wer schuld ist, verliert 0:3, außer er lag schon mit drei Toren hinten.',
          'Im Kassenbuch baut sich unter dem Kontostand eine kleine Treppe auf: Saisonbeginn, laufend, einmalig, heute.',
          'Die Statistik-Balken im Spielbericht laden sich beim Öffnen auf wie im Live-Spiel.',
        ],
        besser: [
          'Alle 14 Blätter schließt du mit einem Wisch nach unten.',
          'Die Cloud sichert beim Verlassen, beim Start und alle 5 Minuten statt frühestens alle 15.',
          'Ein Tipp lehnt ab, ohne „Wirklich ablehnen?“.',
          'Im Kasten „Erster Besuch“ schaltet „Keine Tipps mehr“ alle Hinweise ab.',
          'Der Brief „Verträge laufen aus“ nennt auch deine verliehenen Spieler, und du kannst sie während der Leihe verlängern.',
        ],
        repariert: [
          'Nach der Einigung über die Ablöse stürzte das Gespräch mit dem Spieler ab (seit 1.2).',
          'Die Etat-Karte im Kassenbuch schneidet ihre Beschriftungen nicht mehr ab.',
          'Die Postfach-Kachel im Büro zählt nur noch, was wirklich auf dich wartet.',
          'Das Sponsorfenster zeigt beim gewählten Sponsor nicht mehr 0 €.',
          'Beim Leihangebot im Postfach ist der Gegenangebot-Knopf weg, der nichts tat.',
          'Beim Alter der Talente steht jetzt die Einheit („16 J.“).',
        ],
      },
      en: {
        neu: [
          'If your captain is missing, the best available player in the eleven wears the armband. When he is back in the eleven, he gets it back. In the squad the "C" stays with your real captain.',
          'The fans have their say on relegation and promotion play-offs: after the first leg, after the decider, and after penalty shoot-outs too.',
          'If you are short of players before kick-off, academy kids from 16 step in for that match, and the game time helps them.',
          'If a team drops below seven players, the match is abandoned like in real football. The team at fault loses 0-3, unless it was already three goals down.',
          'In the books, a small staircase builds up under your balance: start of season, running, one-off, today.',
          'The stat bars in the match report fill up when you open it, like in the live match.',
        ],
        besser: [
          'All 14 sheets close with a swipe down.',
          'The cloud backs up when you leave, when you start, and every 5 minutes instead of every 15 at the earliest.',
          'One tap rejects an offer, no more "Really reject?".',
          'In the "First visit" box, "Turn off hints" switches all tips off.',
          'The "Contracts running out" letter also lists your players out on loan, and you can extend them during the loan.',
        ],
        repariert: [
          'Contract talks crashed after agreeing a fee (since 1.2).',
          'The budget card in the books no longer cuts off its labels.',
          'The inbox tile in the office only counts what really waits for you.',
          'The sponsor window no longer shows €0 for the sponsor you picked.',
          'The counter-offer button on loan offers in the inbox did nothing. It is gone.',
        ],
      },
      hr: {
        neu: [
          'Kad kapetan nedostaje, traku nosi najbolji raspoloživi igrač u početnoj postavi. Kad se vrati u postavu, traka se vraća njemu. U kadru „C“ ostaje kod pravog kapetana.',
          'Navijači se javljaju oko kvalifikacija za ostanak i doigravanja za ulazak u viši rang: nakon prve utakmice, nakon odluke i nakon izvođenja jedanaesteraca.',
          'Kad prije početka utakmice nedostaje igrača, za tu utakmicu uskaču talenti iz akademije od 16 godina, a minute im pomažu u razvoju.',
          'Ako jedna momčad padne ispod sedam igrača, utakmica se prekida kao u pravom nogometu. Krivac gubi 0:3, osim ako je već gubio s tri gola razlike.',
          'U blagajni se ispod stanja računa slaže mala stepenica: početak sezone, tekuće, jednokratno, danas.',
          'Statistički stupci u izvještaju utakmice pune se pri otvaranju, kao u utakmici uživo.',
        ],
        besser: [
          'Svih 14 prozora zatvaraš povlačenjem prema dolje.',
          'Karijera se sprema u oblak pri izlasku, pri pokretanju i svakih 5 minuta umjesto najranije svakih 15.',
          'Jedan dodir odbija ponudu, bez pitanja „Stvarno odbiti?“.',
          'U okviru „Prvi posjet“ gumb „Isključi savjete“ gasi sve savjete.',
          'Pismo „Ugovori istječu“ navodi i tvoje igrače na posudbi, a možeš im produžiti ugovor dok su na posudbi.',
        ],
        repariert: [
          'Pregovori s igračem rušili su se nakon dogovora oko odštete (od verzije 1.2).',
          'Kartica proračuna u blagajni više ne reže natpise.',
          'Pločica pošte u uredu broji samo ono što te stvarno čeka.',
          'Prozor sponzora više ne prikazuje 0 € kod odabranog sponzora.',
          'Kod ponude za posudbu u pošti nestao je gumb za protuponudu koji nije ništa radio.',
          'Navijačice više ne pišu u muškom rodu.',
        ],
      },
    },
  },
];

// Frühere Versionen ohne eigenen Eintrag (dieselben Namen wie in der Versionsleiste der Startseite)
export const FRUEHER = {
  de: ['1.2.1 · Wappen & Cloud', '1.2 · Europa', '1.1.3 · Der Vorstand', '1.1.2 · Tempo & Feinschliff', '1.1.0 · Wirtschaft & Der erste Tag', '1.0.9 · Verträge & Ausbau', '1.0.8 · Realistische Leihen', '1.0.7 · Jugendakademie', '1.0.6 · Bedienung', '1.0.5 · Leihmarkt & Großputz', '1.0.4 · Zuschauer & Berichte', '1.0.2 · Transfermarkt', '1.0.0 · Anpfiff'],
  en: ['1.2.1 · Crests & cloud save', '1.2 · Europe', '1.1.3 · The board', '1.1.2 · Speed & polish', '1.1.0 · Finances & first day', '1.0.9 · Contracts & expansion', '1.0.8 · Realistic loans', '1.0.7 · Youth academy', '1.0.6 · Polish & handling', '1.0.5 · Loan market & clean-up', '1.0.4 · Crowds & reports', '1.0.2 · Transfer market', '1.0.0 · Kick-off'],
  hr: ['1.2.1 · Grbovi i oblak', '1.2 · Europa', '1.1.3 · Uprava', '1.1.2 · Brzina i dorada', '1.1.0 · Financije i prvi dan', '1.0.9 · Ugovori i izgradnja', '1.0.8 · Realistične posudbe', '1.0.7 · Akademija', '1.0.6 · Dorada sučelja', '1.0.5 · Posudbe i veliko spremanje', '1.0.4 · Publika i izvještaji', '1.0.2 · Transferi', '1.0.0 · Prvi sudački zvižduk'],
};
