// Text-Ueberarbeitung 20.09.2026 (Durchsicht: TB/docs/belege/webseite-texte-durchsicht-20-09-2026.md)
// Je Schluessel der NEUE Wert in drei Sprachen. HTML-Auszeichnung (<b>, <i>) bleibt wie im Original.
// Regeln: kein Gedankenstrich mehr (36 je 100 Saetze war das Generator-Muster), keine Schluss-Sprueche,
// Dreier-Reihen auf zwei Glieder, Fakten (a3 Vorstand, hero_lead ohne Datum, eh_p2 ohne Monat).
// Anwenden: node tools/texte-anwenden.mjs  (patcht die I18N-Zeile in index.html), danach node tools/build-lang.mjs <Datum>.
export default {
  sub: {
    de: "Dein Klub. Deine Saison. Jede Entscheidung liegt bei dir, und dein Spiel erlebst du live, Minute für Minute.",
    en: "Your club. Your season. Every decision is yours, and you follow every match live, minute by minute.",
    hr: "Tvoj klub. Tvoja sezona. Svaka odluka je na tebi, a utakmicu pratiš uživo, iz minute u minutu.",
  },
  hero_lead: {
    de: "Kostenlos, komplett offline, ohne Werbung, <b>mit einer Hand im Zug</b> spielbar. Läuft, fertig ist es nicht: ich baue jede Woche weiter dran.",
    en: "Free, fully offline, no ads, playable <b>with one hand on the train</b>. It runs, but it isn't finished: I keep building on it every week.",
    hr: "Besplatno, potpuno offline, bez reklama, igra se <b>jednom rukom u vlaku</b>. Radi, ali gotova nije: gradim dalje, svaki tjedan.",
  },
  s_p1: {
    de: "Hi, ich bin <b>Fabian</b>, der Entwickler hinter Trainer's Boardroom. Ich baue den Fußball-Manager, den ich selbst immer spielen wollte: Du übernimmst einen Verein und führst ihn <b>Saison für Saison</b>. Du stellst auf, verhandelst Transfers, hältst die Finanzen im Griff und kämpfst um den Aufstieg oder gegen den Abstieg.",
    en: "Hi, I'm <b>Fabian</b>, the developer behind Trainer's Boardroom. I'm building the football manager I always wanted to play: you take over a club and lead it <b>season after season</b>. You pick the lineup, negotiate transfers, keep the finances in check and fight for promotion or against relegation.",
    hr: "Bok, ja sam <b>Fabian</b>, developer koji stoji iza Trainer's Boardrooma. Gradim nogometnog menadžera kakvog sam oduvijek želio igrati: preuzimaš klub i vodiš ga <b>sezonu za sezonom</b>. Slažeš postavu, pregovaraš transfere, držiš financije pod kontrolom i boriš se za viši rang ili protiv ispadanja.",
  },
  s_p2: {
    de: "Der Unterschied: du liest nicht nur ein Ergebnis ab. Du <b>erlebst dein Spiel live</b> und greifst mittendrin ein. Dein Fortschritt wird gespeichert, du spielst <b>wann immer du Zeit hast</b>.",
    en: "The difference: you don't just read a result. You <b>follow your match live</b> and step in mid-game. Your progress is saved, so you play <b>whenever you have a moment</b>.",
    hr: "Razlika: ne čitaš samo rezultat. Utakmicu <b>pratiš uživo</b> i reagiraš usred igre. Napredak se sprema, pa igraš <b>kad god imaš vremena</b>.",
  },
  mt_p: {
    de: "Kein Ergebnis zum Ablesen. Du verfolgst dein Spiel Minute für Minute: Tore, Karten, Verletzungen. Und wenn es kippt, greifst du ein. Formation ändern, Taktik umstellen, bis zu <b>fünf Wechsel</b>, mitten im laufenden Spiel. Keine Zeit? Dann drückst du <b>Simulieren</b> und nimmst nur das Ergebnis.",
    en: "No result to read off. You follow your match minute by minute: goals, cards, injuries. And when it turns, you step in. Change the formation, change the tactics, up to <b>five substitutions</b>, while the match is still running. No time? Hit <b>Simulate</b> and just take the result.",
    hr: "Ne dobivaš samo rezultat. Utakmicu pratiš minutu po minutu: golovi, kartoni, ozljede. A kad krene po zlu, ulaziš. Mijenjaš formaciju, mijenjaš taktiku, do <b>pet izmjena</b>, dok utakmica još traje. Nemaš vremena? Stisneš <b>Simuliraj</b> i dobiješ rezultat.",
  },
  u_h: { de: "Wer das baut", en: "Who's building this", hr: "Tko ovo radi" },
  u_p: {
    de: "Hinter Trainer's Boardroom steht kein Studio, sondern ich: abends nach der Arbeit, seit zwei Jahren. Kein Pay-to-Win, keine Abkürzungen. Ein Spiel, das mit jedem Update besser wird.",
    en: "There's no studio behind Trainer's Boardroom, just me, in the evenings after work, for two years now. No pay-to-win, no shortcuts. A game that gets better with every update.",
    hr: "Iza Trainer's Boardrooma ne stoji studio, nego ja: navečer nakon posla, već dvije godine. Bez pay-to-wina, bez prečaca. Igra koja sa svakim ažuriranjem postaje bolja.",
  },
  a3: {
    de: "Ein Spiel, das läuft, aber noch Ecken und Kanten hat. Drin ist alles Wichtige: 100 Ligen mit Auf- und Abstieg, Pokale, Live-Matches mit Taktik-Eingriff, Verhandlungen mit Klub und Spieler, Leihen, Ratenzahlung, Jugendakademie, Scouting, Training, Spieler mit Charakter, Verletzungen, Sperren, Finanzen, Sponsoren und der Etat vom Vorstand. <b>Noch nicht drin: Vorstandsziele, Trainer-Karriere und Europapokale.</b> Und ehrlich: Fehler gibt es auch noch. Wenn dir einer begegnet, schreib mir.",
    en: "A game that runs but still has rough edges. Everything important is in: 100 leagues with promotion and relegation, cups, live matches with tactical changes, negotiations with club and player, loans, instalments, a youth academy, scouting, training, players with character, injuries, suspensions, finances, sponsors and a budget from the board. <b>Not in yet: board targets, a manager's career and European cups.</b> And honestly: there are still bugs. If you meet one, write to me.",
    hr: "Igra koja radi, ali još nije uglađena. Unutra je sve bitno: 100 liga s ulaskom u viši rang i ispadanjem, kupovi, utakmice uživo s promjenama taktike usred igre, pregovori s klubom i igračem, posudbe, plaćanje na rate, akademija, skauting, trening, igrači s karakterom, ozljede, suspenzije, financije, sponzori i proračun od uprave. <b>Još nema: ciljeva uprave, trenerske karijere i europskih kupova.</b> I iskreno: grešaka još ima. Ako naletiš na neku, piši mi.",
  },
  w_ok: {
    de: "Fast geschafft. Bestätige die E-Mail in deinem Postfach. <b>Schau bitte auch im Spam-Ordner nach.</b>",
    en: "Almost there. Confirm the email in your inbox. <b>Please check your spam folder too.</b>",
    hr: "Skoro gotovo. Potvrdi e-mail u svojem sandučiću. <b>Provjeri i neželjenu poštu.</b>",
  },
  w_unsub: {
    de: "Abmelden? Jederzeit über den Link in jeder E-Mail, oder kurz an trainersboardroom@outlook.com.",
    en: "Unsubscribe anytime via the link in every email, or with a quick note to trainersboardroom@outlook.com.",
    hr: "Odjaviti se možeš bilo kada, poveznicom u e-mailu ili porukom na trainersboardroom@outlook.com.",
  },
  feats: {
    de: [["Taktik & Aufstellung","Deine Elf, dein Plan","Formation und beste Elf auf einen Blick. Mit Mentalität, Tempo, Pressing und Breite bestimmst du, wie dein Team spielt. Vor dem Anpfiff eingestellt, im Spiel angepasst."],["Dein Kader","Kenne jeden Spieler","Stärken, Potenzial, Marktwert und die Form der letzten Spiele: jeder Spieler ein echtes Profil mit Statistiken. Finde das Juwel, bevor die Großen zuschlagen."],["Transfers","Du verhandelst","Durchsuche den Markt, filtere nach Wert, Alter oder Vertrag. Und wenn ein Klub für deinen Spieler bietet: annehmen, kontern oder ablehnen. Kaufen, verkaufen, leihen, in Raten zahlen: der Markt lebt."],["Dein Büro","Alles im Griff","Nächstes Spiel, Postfach, Tabelle, News: deine Schaltzentrale. Und der Kalender zeigt Spieltage, Pokalrunden und Transferfenster auf einen Blick."],["Liga & Statistiken","Die ganze Liga im Blick","Tabelle, Torschützenliste, Team-Statistiken. Sieh, wo du stehst und wer vorne trifft. Jede Liga, jede Saison, alle Zahlen."]],
    en: [["Tactics & Lineup","Your eleven, your plan","Formation and best XI at a glance. With mentality, tempo, pressing and width you decide how your team plays. Set before kickoff, adjusted in-game."],["Your Squad","Know every player","Strengths, potential, market value and recent form: every player a real profile with stats. Spot the gem before the big clubs do."],["Transfers","You do the deal","Browse the market, filter by value, age or contract. And when a club bids for your player: accept, counter or reject. Buy, sell, loan, pay in instalments: the market is alive."],["Your Office","Everything in hand","Next match, inbox, table, news: your hub. And the calendar shows matchdays, cup rounds and transfer windows at a glance."],["League & Stats","The whole league at a glance","Table, top scorers, team stats. See where you stand and who's finding the net. Every league, every season, all the numbers."]],
    hr: [["Taktika i postava","Tvojih jedanaest, tvoj plan","Formacija i najbolja postava na prvi pogled. Mentalitetom, tempom, pressingom i širinom određuješ kako tvoja momčad igra. Postaviš prije početka, prilagodiš tijekom utakmice."],["Tvoja momčad","Upoznaj svakog igrača","Snaga, potencijal, tržišna vrijednost i forma u zadnjim utakmicama: svaki igrač pravi profil sa statistikom. Otkrij dragulj prije velikih."],["Transferi","Ti sklapaš posao","Pretražuj tržište, filtriraj po vrijednosti, dobi ili ugovoru. A kad klub ponudi za tvog igrača: prihvati, uzvrati ili odbij. Kupnja, prodaja, posudba, rate: tržište je živo."],["Tvoj ured","Sve na dohvat ruke","Sljedeća utakmica, pretinac, tablica, novosti: tvoja centrala. A kalendar pokazuje kola, kup i prijelazne rokove na prvi pogled."],["Liga i statistika","Cijela liga na oku","Tablica, lista strijelaca, statistika momčadi. Vidi gdje si i tko zabija. Svaka liga, svaka sezona, svi brojevi."]],
  },
  sc_p: {
    de: "Kein kleines Manager-Spiel: <b>100 Ligen in 51 Ländern</b>, <b>1.459 Vereine</b> und über <b>26.000 Spieler</b>, mit Auf- und Abstieg, Relegations-Playoffs in 70 Ligen, nationalen Pokalen und einem Transfermarkt, auf dem die anderen Vereine selbstständig handeln. Alles von einem einzigen Entwickler, ohne Pay-to-Win.",
    en: "No lightweight manager game: <b>100 leagues across 51 countries</b>, <b>1,459 clubs</b> and over <b>26,000 players</b>, with promotion and relegation, relegation play-offs in 70 leagues, national cups and a transfer market where the other clubs do their own wheeling and dealing. All built by a single developer, no pay-to-win.",
    hr: "Ovo nije mala menadžerska igra: <b>100 liga u 51 zemlji</b>, <b>1.459 klubova</b> i preko <b>26.000 igrača</b>, s ulaskom u viši rang i ispadanjem, doigravanjem u 70 liga, nacionalnim kupovima i prijelaznim rokovima u kojima ostali klubovi sami kupuju, prodaju i posuđuju. Sve od jednog jedinog developera, bez pay-to-wina.",
  },
  a5: {
    de: "Android ist zuerst dran, Dezember 2026. iPhone folgt Anfang 2027. Trag dich trotzdem ein, dann sage ich dir Bescheid.",
    en: "Android comes first, December 2026. iPhone follows in early 2027. Sign up anyway and I'll let you know.",
    hr: "Android je prvi na redu, prosinac 2026. iPhone stiže početkom 2027. Upiši se svejedno, javim ti se.",
  },
  a6: {
    de: "Nur zum Herunterladen. Danach läuft alles auf deinem Handy, ohne Konto und ohne Server. Spiel im Zug, im Flugzeug, wo du willst.",
    en: "Only to download it. After that everything runs on your phone, no account, no server. Play on the train, on a plane, wherever.",
    hr: "Samo za preuzimanje. Nakon toga sve radi na tvom mobitelu, bez računa i bez servera. Igraj u vlaku, u avionu, gdje god.",
  },
  ti_h: { de: "Was das Spiel schwer macht", en: "What makes it hard", hr: "Što igru čini teškom" },
  ti_bp: {
    de: "2,58 Tore pro Spiel, gemessen, nicht behauptet. Karten nach echten Liga-Daten, 54 recherchierte Liga-Profile, Leihen nach den Regeln des echten Fußballs, Marktwerte an echten Ablösen kalibriert.",
    en: "2.58 goals per match, measured, not claimed. Cards tuned to real league data, 54 researched league profiles, a loan system modelled on real football, market values calibrated to real fees.",
    hr: "2,58 golova po utakmici, izmjereno, ne izmišljeno. Kartoni prema stvarnim podacima liga, 54 istražena profila liga, posudbe po pravilima pravog nogometa, tržišne vrijednosti prema stvarnim odštetama.",
  },
  ti_ip: {
    de: "Bleiben die Schulden zu lange, wirst du freigestellt, mitten in der Saison. <i>„Das hättest du selbst regeln müssen.“</i>",
    en: "Let the debt sit too long and you're out, mid-season. <i>“You should have sorted that out yourself.”</i>",
    hr: "Ostanu li dugovi predugo, gotov si, usred sezone. <i>„To si trebao sam riješiti.“</i>",
  },
  ti_np: {
    de: "Deine Jugendakademie bringt jedes Jahr eigene Talente hervor. Fremde Spieler zeigen dir zunächst nur Spannen. Je besser dein Verein scoutet, desto schärfer wird der Blick.",
    en: "Your youth academy produces its own talents every year. Scouted players show only ranges at first. The better your club scouts, the sharper the picture.",
    hr: "Tvoja akademija svake godine iznjedri vlastite talente. Tuđi igrači isprva pokazuju samo raspone. Što tvoj klub bolje skautira, slika je oštrija.",
  },
  ti_mp: {
    de: "Wer zu lange auf der Bank sitzt, wird unzufrieden und lässt es dich spüren. Wer etabliert ist, geht nicht überallhin, auch nicht auf Leihe in eine kleine Liga. Die Kabine ist dein Job.",
    en: "Leave a player on the bench too long and he'll let you know. An established player won't go just anywhere, not even on loan to a small league. The dressing room is your job.",
    hr: "Tko predugo sjedi na klupi, nezadovoljan je i to ćeš čuti. Tko je etabliran, ne ide bilo kamo, ni na posudbu u malu ligu. Svlačionica je tvoj posao.",
  },
  w_soon: { de: "Gleich geht's los. Schau in einem Moment nochmal vorbei.", en: "Nearly there. Check back in a moment.", hr: "Samo što nije. Navrati za koji trenutak." },
  w_pending: { de: "Du bist schon eingetragen. Bitte bestätige noch die E-Mail in deinem Postfach.", en: "You're already signed up. Please confirm the email in your inbox.", hr: "Već si prijavljen. Potvrdi e-mail u svojem sandučiću." },
  w_resent: { de: "Du warst schon eingetragen. Wir haben dir die Bestätigungsmail nochmal geschickt, bitte im Postfach bestätigen.", en: "You were already signed up. We've re-sent the confirmation email, please confirm it in your inbox.", hr: "Već si bio prijavljen. Ponovno smo poslali e-mail za potvrdu, potvrdi ga u svojem sandučiću." },
  vid_p: { de: "Ein erster Blick ins Spiel: echtes Gameplay, direkt vom Handy.", en: "A first look at the game: real gameplay, straight from the phone.", hr: "Prvi pogled na igru: pravi gameplay, izravno s mobitela." },
  rp1_p: {
    de: "14 Tage geschlossener Test, kein einziger Absturz. Nebenbei habe ich Jugendakademie, Scouting und Spielercharakter eingebaut und mehrere hundert Fehler behoben.",
    en: "14 days of closed testing, not a single crash. Along the way I built in the youth academy, scouting and player character, and fixed several hundred bugs.",
    hr: "14 dana zatvorenog testa, nijednog pada. Usput sam ugradio akademiju, skauting i karakter igrača te popravio nekoliko stotina grešaka.",
  },
  rp2_h: { de: "Early Access, Version für Version", en: "Early access, version by version", hr: "Rani pristup, verziju po verziju" },
  rp2_p: {
    de: "1.1.2, das Tempo-Update: der Tag rechnet im Hintergrund, das Büro bleibt bedienbar, die Transfertage sind um ein Vielfaches schneller. Dazu der Wettbewerb am nächsten Spiel, der Kader zum Sortieren und ein Sponsorenblatt, das man auf einen Blick liest. Meldest du einen Fehler, rückt er auf der Liste nach oben.",
    en: "1.1.2, the speed update: the day is computed in the background, the office stays usable, transfer days are many times faster. Plus the competition on your next match, a squad you can sort, and a sponsor sheet you read at a glance. Report a bug and it moves up the list.",
    hr: "1.1.2, ažuriranje brzine: dan se računa u pozadini, ured ostaje upotrebljiv, dani prijelaznog roka višestruko su brži. Uz to natjecanje uz sljedeću utakmicu, sastav koji se može sortirati i sponzorski list koji se čita na prvi pogled. Prijaviš grešku, ide gore na listi.",
  },
  rp3_p: {
    de: "Saisonziele zum Start, ein Zwischenstand im Winter, das Urteil am Saisonende. Wer zweimal in Folge verfehlt, wird freigestellt. Und endlich die Meldungen, die bisher fehlten: Meister, Aufstieg, Abstieg.",
    en: "Season targets at the start, a word from the board in winter, the verdict at the end of the season. Miss twice in a row and you're out. And at last the news that was missing: champions, promotion, relegation.",
    hr: "Ciljevi sezone na startu, riječ uprave zimi, presuda na kraju sezone. Tko dvaput zaredom promaši, dobiva otkaz. I napokon vijesti kojih dosad nije bilo: naslov prvaka, ulazak u višu ligu, ispadanje.",
  },
  rp4_h: { de: "Europapokal-Nächte und die Trainer-Karriere", en: "European nights and a manager's career", hr: "Europske noći i trenerska karijera" },
  rp4_p: {
    de: "Die große Bühne auf dem Kontinent: Qualifikation über die Liga, Spiele gegen die Besten Europas und die Einnahmen, die ein Verein davon hat. Danach dein Weg von Verein zu Verein, mit dem Ruf, den du dir erspielt hast.",
    en: "The big stage on the continent: qualify through the league, face the best in Europe, and the money a club makes from it. Then your path from club to club, with the reputation you've earned.",
    hr: "Velika pozornica na kontinentu: plasman kroz ligu, utakmice protiv najboljih u Europi i prihodi koje klub od toga ima. Zatim tvoj put od kluba do kluba, s ugledom koji si zaradio.",
  },
  rp5_p: { de: "Android im Dezember 2026, iPhone Anfang 2027. Und danach geht die Entwicklung weiter.", en: "Android in December 2026, iPhone in early 2027. And development doesn't stop there.", hr: "Android u prosincu 2026., iPhone početkom 2027. A onda dalje." },
  sg_p: { de: "Sag mir, was das Spiel besser machen würde. Die guten Ideen landen auf meiner Liste.", en: "Tell me what would make the game better. The good ideas go on my list.", hr: "Reci mi što bi igru učinilo boljom. Dobre ideje završe na mojoj listi." },
  status_live: { de: "Early Access: der Ball rollt.", en: "Early access: we're under way.", hr: "Rani pristup: sudac je odsvirao početak." },
  status2_live: { de: "1.1.2 ist im Play Store, das Tempo-Update.", en: "1.1.2 is on the Play Store, the speed update.", hr: "1.1.2 je na Play Storeu, ažuriranje brzine." },
  play_live_hint: { de: "Early Access: kostenlos, ohne Werbung, ganz offline.", en: "Early access: free, no ads, fully offline.", hr: "Rani pristup: besplatno, bez reklama, potpuno offline." },
  eh_k: { de: "Kein Kleingedrucktes", en: "No small print", hr: "Bez sitnih slova" },
  eh_h: { de: "Wo das Spiel steht", en: "Where it stands", hr: "Gdje je igra sada" },
  eh_p1: {
    de: "Trainer's Boardroom ist noch nicht fertig, und das sage ich dir lieber vor dem Anpfiff als im Kleingedruckten: <b>Es gibt noch Fehler.</b>",
    en: "Trainer's Boardroom isn't finished, and I'd rather tell you before kick-off than in the small print: <b>there are still bugs.</b>",
    hr: "Trainer's Boardroom još nije gotov, i radije ti to kažem prije početka nego sitnim slovima: <b>grešaka još ima.</b>",
  },
  eh_p2: {
    de: "Zuletzt habe ich die Wirtschaft von A bis Z durchgerechnet und gegen den echten Fußball geeicht: Etat, Gehälter, Ablösen, Sponsoren. Danach das Tempo: ein Transfertag brauchte am Handy bis zu zwölf Sekunden, jetzt eine. Fehler gibt es weiter. Meine Liste ist lang, und sie wird Version für Version kürzer.",
    en: "Most recently I worked through the club's finances from A to Z and calibrated them against real football: budgets, wages, fees, sponsors. Then the speed: a transfer day took up to twelve seconds on the phone, now one. There are still bugs. My list is long, and it gets shorter version by version.",
    hr: "Nedavno sam prošao financije od A do Ž i uskladio ih sa stvarnim nogometom: proračun, plaće, odštete, sponzori. Zatim brzina: dan prijelaznog roka trajao je na mobitelu do dvanaest sekundi, sada jednu. Grešaka još ima. Lista je duga i svaka je verzija skraćuje.",
  },
  eh_p3: {
    de: "Wenn dir etwas auffällt, melde es gern. Ich lese jede Meldung und ordne sie ein. Was das Spiel besser macht, kommt in eines der nächsten Updates. Ansonsten bleibe ich stur bei meiner Liste: Version für Version.",
    en: "If something feels off, do report it. I read every report and sort it in. Whatever makes the game better goes into one of the next updates. Beyond that I stick to my list, stubbornly: version by version.",
    hr: "Ako ti nešto zaškripi, slobodno javi. Svaku prijavu pročitam i razvrstam. Ono što igru čini boljom ulazi u jedno od sljedećih izdanja. Inače ostajem pri svome: radim po listi, verziju po verziju.",
  },
  eh_note: { de: "Was hilft: dein Gerät, was du gerade getan hast, und ein Screenshot, wenn's geht.", en: "What helps: your device, what you were doing, and a screenshot if you can.", hr: "Pomaže: tvoj uređaj, što si upravo radio i screenshot ako možeš." },
  a1_live: {
    de: "Ja. Trainer's Boardroom steht als Early Access im Play Store: laden, Verein aussuchen, Anpfiff. Das fertige Spiel kommt im Dezember 2026.",
    en: "Yes. Trainer's Boardroom is on the Play Store as early access: download, pick your club, kick off. The finished game arrives in December 2026.",
    hr: "Da. Trainer's Boardroom je na Play Storeu kao rani pristup: preuzmi, odaberi klub i kreni. Gotova igra stiže u prosincu 2026.",
  },
  a2_live: {
    de: "1.1.2, das Tempo-Update mit einem Hotfix vom selben Tag. Neu darin: der Tag rechnet im Hintergrund, die Transfertage sind um ein Vielfaches schneller, der Kader lässt sich sortieren, der Wettbewerb steht am nächsten Spiel. Dazu alles aus 1.1.0: Kassenbuch mit Etat vom Vorstand, Sponsoren zur Wahl, Stadion, Akademie und Scouting als Räume, Training mit Zeugnis, ein Markt mit KI-Verhandlungen, der Rundgang beim ersten Start. Es fehlen noch: Vorstandsziele, Europapokale, Trainerkarriere.",
    en: "1.1.2, the speed update with a same-day hotfix. New in it: the day is computed in the background, transfer days are many times faster, the squad can be sorted, the competition shows on your next match. Plus everything from 1.1.0: the books with a budget from the board, sponsors to choose from, stadium, academy and scouting as rooms, training with a report, a market where the AI negotiates, the tour on first start. Still missing: board targets, European competitions, a manager career.",
    hr: "1.1.2, ažuriranje brzine s hitnim ispravkom istog dana. Novo u njoj: dan se računa u pozadini, dani prijelaznog roka višestruko su brži, sastav se može sortirati, natjecanje piše uz sljedeću utakmicu. Uz to sve iz 1.1.0: blagajna s proračunom od uprave, sponzori po izboru, stadion, akademija i skauting kao prostorije, trening s izvještajem, tržište na kojem AI pregovara, obilazak pri prvom pokretanju. Još nema: ciljeva uprave, europskih kupova, trenerske karijere.",
  },
  a7: {
    de: "Direkt an <b>trainersboardroom@outlook.com</b> oder auf Reddit. Was mir hilft: dein Gerät, was du gerade getan hast, und ein Screenshot, wenn's geht. Jede Meldung lese ich selbst.",
    en: "Straight to <b>trainersboardroom@outlook.com</b> or on Reddit. What helps me: your device, what you were doing, and a screenshot if you can. I read every report myself.",
    hr: "Izravno na <b>trainersboardroom@outlook.com</b> ili na Redditu. Pomaže mi: tvoj uređaj, što si upravo radio i screenshot ako možeš. Svaku prijavu čitam sam.",
  },
  usp1_p: { de: "Kein Server, kein Konto. Zug, Flieger, Funkloch: deine Saison läuft weiter.", en: "No server, no account. Train, plane, dead zone: your season keeps running.", hr: "Bez servera, bez računa. Vlak, avion, tunel: tvoja sezona ide dalje." },
  usp2_p: { de: "Und kein Pay-to-Win: keine Münzen, keine Abkürzung für Geld.", en: "And no pay-to-win: no coins, no shortcut for money.", hr: "I bez pay-to-wina: nema kovanica, nema prečaca za novac." },
  usp3_p: {
    de: "Die KI-Klubs verdienen, zahlen Gehälter, übernehmen sich und geraten in dieselben Schulden wie du. Niemand mogelt.",
    en: "The AI clubs earn, pay wages, overspend and run into the same debt you do. Nobody cheats.",
    hr: "AI klubovi zarađuju, plaćaju plaće, troše previše i upadaju u iste dugove kao i ti. Nitko ne vara.",
  },
  tk: {
    de: [["21'","Wechsel",""],["43'","TOR! 1:0 Bourgoin","g"],["55'","Wechsel",""],["62'","Wechsel",""],["68'","läuft …",""]],
    en: [["21'","Substitution",""],["43'","GOAL! 1-0 Bourgoin","g"],["55'","Substitution",""],["62'","Substitution",""],["68'","live …",""]],
    hr: [["21'","Izmjena",""],["43'","GOL! 1:0 Bourgoin","g"],["55'","Izmjena",""],["62'","Izmjena",""],["68'","traje …",""]],
  },
};
