// Die Ratgeber-Seiten: je Seite und Sprache der ganze Text, jede Sprache für sich geschrieben (Goldene Regel 48), ohne fremde Spielnamen
// (Fabian 14.10.2026). Jede Aussage steht so in der Store-Beschreibung (von Coding am 13.10.2026 gegen das Spiel geprüft) oder in den
// abgenommenen Webseiten-Texten. Abnahme: Fabians Klick „So bauen“ am 14.10.2026 auf den Entwurf GpYJy8Wxnmp4mJB7qdu8SK.
//
// `bisGruender` ist der Satz zur Gründer-Frist: er steht nur auf Seiten, die VOR dem Stichtag gebaut werden (bauen.mjs vergleicht mit dem Baudatum).

export const GRUENDER_ENDE = '2026-11-01';

export const SEITEN = [
  {
    id: 'offline',
    pfad: { de: '/fussballmanager-offline/', en: '/en/offline-football-manager/', hr: '/hr/football-manager-offline/' },
    link: { de: 'Offline-Fußballmanager', en: 'Offline football manager', hr: 'Football manager offline' },
    titel: {
      de: 'Fußballmanager fürs Handy: offline, ohne Abo, ohne Werbung',
      en: 'Offline football manager for Android: no subscription, no ads',
      hr: 'Football manager za Android: offline, bez pretplate i reklama',
    },
    beschreibung: {
      de: 'Ein Fußballmanager für Android, der ohne Internet läuft: kein Abo, keine Werbung zwischen den Spielen. Woran du so ein Spiel erkennst.',
      en: 'A football manager for Android that plays without a connection: no subscription, no adverts between matches. What to look for, and how we do it.',
      hr: 'Nogometni menadžer za Android koji radi bez interneta: bez pretplate, bez reklama između utakmica. Na što paziti i kako to radimo mi.',
    },
    h1: {
      de: 'Ein Fußballmanager fürs Handy, der offline läuft',
      en: 'An offline football manager for Android',
      hr: 'Football manager za Android koji radi bez interneta',
    },
    lead: {
      de: 'Ohne Internet, ohne Abo, ohne Werbung vor dem Anpfiff. Hier steht, woran du so einen Manager erkennst und wie Trainer\'s Boardroom es macht.',
      en: 'No signal needed, no subscription, no adverts before kick-off. Here\'s what to look for in a football manager you can play anywhere, and how Trainer\'s Boardroom handles it.',
      hr: 'Bez signala, bez pretplate i bez reklama prije utakmice. Evo na što paziti kod nogometnog menadžera za mobitel i kako to rješava Trainer\'s Boardroom.',
    },
    bloecke: [
      {
        h: { de: 'Läuft er wirklich offline?', en: 'Does it really work offline?', hr: 'Radi li stvarno offline?' },
        p: {
          de: 'Viele Spiele nennen sich offline und brauchen trotzdem eine Verbindung, etwa für Werbung zwischen den Spielen. Am schnellsten findest du es im Flugmodus heraus. Trainer\'s Boardroom braucht weder Internet noch ein Konto: Die ganze Welt rechnet auf deinem Handy.',
          en: 'Plenty of games say offline and still want a connection to show ads between matches. Airplane mode tells you in seconds. Trainer\'s Boardroom needs no internet and no account: the whole world runs on your phone.',
          hr: 'Mnoge igre pišu da su offline, a ipak traže vezu za reklame između utakmica. Način rada u zrakoplovu to otkrije za tren. Za Trainer\'s Boardroom ne trebaš ni internet ni račun: cijeli svijet vrti se na tvom mobitelu.',
        },
      },
      {
        h: { de: 'Abo oder einmal zahlen?', en: 'Subscription or one-off?', hr: 'Pretplata ili jednokratno?' },
        p: {
          de: 'Ein Abo gibt es nicht. Ab November beginnt jede neue Karriere mit einer kostenlosen Saison, danach kostet das ganze Spiel einmalig 6,99 €, angezeigt in deiner Währung.',
          en: 'There\'s no subscription. From November, every new career starts with a free season, and after that the full game is €6.99, paid once and shown in your currency.',
          hr: 'Pretplate nema. Od studenoga svaka nova karijera počinje besplatnom sezonom, a nakon nje cijela igra stoji jednokratno 6,99 €, prikazano u tvojoj valuti.',
        },
        bisGruender: {
          de: 'Wer bis zum 31. Oktober installiert, spielt für immer gratis.',
          en: 'Install by 31 October and it\'s free for good.',
          hr: 'Tko instalira do 31. listopada, igru ima zauvijek besplatno.',
        },
      },
      {
        h: { de: 'Werbung oder gekaufte Vorteile?', en: 'Ads or pay-to-win?', hr: 'Reklame ili kupovanje prednosti?' },
        p: {
          de: 'Keine Werbung und nichts, womit man sich Stärke kauft. Freiwillige Extras, die später dazukommen, kosten extra.',
          en: 'No ads, and nothing that buys you an edge. Optional extras that arrive later are sold separately.',
          hr: 'Nema reklama ni ičega čime se kupuje prednost. Dodaci koji stignu kasnije, ako ih želiš, plaćaju se zasebno.',
        },
      },
      {
        h: { de: 'Genug Tiefe für viele Saisons?', en: 'Enough depth for a long career?', hr: 'Dovoljno dubine za dugu karijeru?' },
        p: {
          de: '100 Ligen in 51 Ländern, 1.459 Vereine, nationale Pokale und drei Europapokale. Transfers laufen in zwei Schritten wie im echten Fußball: erst die Ablöse mit dem Verein, dann Gehalt und Laufzeit mit dem Spieler. Dazu Leihen und Ratenzahlung. Die Spiele laufen Minute für Minute, und du greifst von der Seitenlinie ein. Über dir sitzt ein Vorstand, der dich an deinem Saisonziel misst.',
          en: '100 leagues in 51 countries, 1,459 clubs, domestic cups and three European competitions. Transfers come in two steps, the fee with the club and then wages and length with the player, plus loans and instalments. Matches play out minute by minute and you can make changes from the touchline. Above you sits a board that holds you to your target.',
          hr: '100 liga u 51 zemlji, 1.459 klubova, domaći kupovi i tri europska natjecanja. Transferi idu u dva koraka kao u pravom nogometu: prvo odšteta s klubom, zatim plaća i trajanje ugovora s igračem. Tu su i posudbe i plaćanje na rate. Utakmice se igraju minutu po minutu, a ti reagiraš s klupe. Iznad tebe je uprava koja te ocjenjuje po cilju sezone.',
        },
      },
      {
        h: { de: 'Gemacht für zehn Minuten in der Bahn', en: 'Built for the commute', hr: 'Za kratke pauze' },
        p: {
          de: 'Ein Spieltag, eine Transferentscheidung, Handy weg. Der Spielstand liegt auf deinem Gerät und geht da weiter, wo du aufgehört hast.',
          en: 'Play a matchday, make one transfer call, put the phone away. Your save stays on the device and picks up where you left off.',
          hr: 'Odigraj kolo u tramvaju, donesi jednu odluku o transferu i spremi mobitel. Karijera ostaje na uređaju i nastavlja se ondje gdje je stala.',
        },
      },
    ],
    hinweis: {
      de: 'Das Spiel ist im Early Access: Es wächst mit jedem Update, ein paar Ecken und Kanten hat es noch. Der Wechsel zu einem anderen Verein während der Karriere kommt 2027.',
      en: 'It\'s early access, so there are still rough edges, and it grows with every update. Moving to another club during a career arrives in 2027.',
      hr: 'Igra je u ranom pristupu i raste sa svakim ažuriranjem, ponegdje je još neuglađena. Prelazak u drugi klub tijekom karijere stiže 2027.',
    },
    knopf: { de: 'Bei Google Play laden', en: 'Get it on Google Play', hr: 'Preuzmi na Google Playu' },
    sprachen: {
      de: 'Auf Deutsch, Englisch und Kroatisch. Für Android, das iPhone folgt 2027.',
      en: 'In English, German and Croatian. Android now, iPhone in 2027.',
      hr: 'Na hrvatskom, engleskom i njemačkom. Android sada, iPhone 2027.',
    },
    kicker: { de: 'Ratgeber', en: 'Guide', hr: 'Vodič' },
  },
];
