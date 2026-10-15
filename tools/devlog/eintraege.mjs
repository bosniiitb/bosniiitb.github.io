// Entwickler-Tagebuch (E-821, Goldene Regel 55): je Version ein Eintrag, neuester zuerst. Stoff von der Coding-Sitzung (Regel 54),
// Text in Fabians Stimme (Regel 52), jede Sprache für sich (Regel 48), nie das Rezept (Formeln, Schwellen, Gewichte).
// Gebaut wird mit tools/devlog/bauen.mjs → /devlog/, /en/devlog/, /hr/devlog/ und je Version /devlog/<slug>/.
//
// zahlen: { wert, nach?, komma?, text } — „wert“ zählt beim Sichtbarwerden hoch; nur gemessene oder belegte Zahlen.

export const EINTRAEGE = [
  // 1.4 „Der Trainer“ (Regel 55): Stoff Nikola 13./14./15.10.2026 (Fassungen c, e, f), Fabians Klicks „Passt so“, „Ganz rein“, „Ja, dann Update“.
  {
    version: '1.4', slug: '1-4',
    datum: { de: 'Oktober 2026', en: 'October 2026', hr: 'listopad 2026.' },
    name: { de: 'Der Trainer', en: 'The Manager', hr: 'Trener' },
    kurz: {
      de: 'Jeder gegnerische Trainer spielt jetzt nach seiner eigenen Idee und stellt um, wenn das Spiel es verlangt. Und Spieler sagen dir, wie lange sie unterschreiben wollen.',
      en: 'Every opposition manager now plays his own way and changes things when the match calls for it. And players tell you how long they want to sign for.',
      hr: 'Svaki protivnički trener sada igra po svojoj ideji i mijenja formaciju kad utakmica to traži. A igrači ti kažu na koliko godina žele potpisati.',
    },
    blick: {
      de: [
        'Jeder gegnerische Trainer hat seine eigene Idee und stellt sich auf dich ein.',
        'Liegt seine Mannschaft hinten oder in Unterzahl, stellt er im Spiel um.',
        'Spieler wünschen sich eine Vertragslaufzeit. Liegst du daneben, kostet es Gehalt – oder sie sagen ab.',
        'Hast du Europa erreicht, kommt am 1. Juli der Brief mit Wettbewerb und Startrunde.',
        'Bei den anderen Vereinen rücken mehr Talente aus der eigenen Akademie in den Profikader auf.',
      ],
      en: [
        'Opposition managers have their own way of playing and set up their side to face you.',
        'When they fall behind or go down to ten men, they change shape mid-match.',
        'Players want a set contract length. Get it wrong and it costs you wages, or they turn you down.',
        'Qualify for Europe and a letter lands on 1 July with your competition and starting round.',
        'Other clubs now promote more academy graduates to their first-team squad.',
      ],
      hr: [
        'Protivnički treneri imaju svoju ideju igre i postavljaju momčad prema tebi.',
        'Kad gube ili ostanu s igračem manje, mijenjaju formaciju tijekom utakmice.',
        'Igrači žele ugovor određenog trajanja. Ponudiš li prekratak ili predug, traže veću plaću ili odbijaju.',
        'Plasiraš li se u Europu, 1. srpnja stiže pismo s natjecanjem i kolom u kojem počinješ.',
        'Ostali klubovi prvoj momčadi češće priključuju igrače iz vlastite akademije.',
      ],
    },
    zahlen: [
      { wert: 33, nach: { de: ' %', en: '%', hr: ' %' }, text: {
        de: 'der Spiele, in denen eine Mannschaft umstellt. Im echten Fußball sind es 29,6 %. Vorher stellte jede Mannschaft in jedem Spiel um.',
        en: 'of matches in which a side changes shape. In real football it\'s 29.6%. Before, every side changed shape in every match.',
        hr: 'utakmica u kojima momčad mijenja formaciju. U pravom nogometu to je 29,6 %. Prije je svaka momčad mijenjala formaciju u svakoj utakmici.' } },
      { wert: 1.8, komma: 1, nach: { de: '×', en: '×', hr: '×' }, text: {
        de: 'so oft wechselt ein Trainer nach einer Niederlage die Formation wie nach einem Sieg. Echt sind es 1,4- bis 2,1-mal.',
        en: 'as likely: a manager changes formation after a defeat compared with after a win. In real football it\'s 1.4 to 2.1 times.',
        hr: 'češće trener mijenja formaciju nakon poraza nego nakon pobjede. U pravom nogometu to je 1,4 do 2,1 puta.' } },
      { wert: 59, nach: { de: ' %', en: '%', hr: ' %' }, text: {
        de: 'der neuen Trainer bringen eine andere Formation mit. Echt sind es 59 bis 60 %.',
        en: 'of new managers bring a different formation with them. In real football it\'s 59 to 60%.',
        hr: 'novih trenera donosi drugu formaciju. U pravom nogometu to je 59 do 60 %.' } },
      { wert: 2.5, komma: 1, text: {
        de: 'eigene Talente ziehen die Spitzenvereine im Schnitt je Saison in den Profikader hoch. Vorher waren es 1,7.',
        en: 'academy players a season, on average, now make the step up to the first team at the top clubs. Before it was 1.7.',
        hr: 'vlastitih talenata po sezoni u prosjeku prebace vodeći klubovi u prvu momčad. Prije ih je bilo 1,7.' } },
      { wert: 209, text: {
        de: 'Vereine hatten vorher einen Trainer, der nicht zu seiner Aufstellung passte: defensiv mit drei Spitzen oder offensiv mit Fünferkette. Jetzt keiner.',
        en: 'clubs used to have a manager who didn\'t fit his own line-up: defensive with three up front, or attacking with a back five. Now there are none.',
        hr: 'klubova prije je imalo trenera koji nije pristajao svojoj postavi: obrambenog s tri napadača ili napadačkog s petoricom u obrani. Sada nijedan.' } },
      { wert: 21.7, komma: 1, nach: { de: ' %', en: '%', hr: ' %' }, text: {
        de: 'der Spieler trugen vorher einen Namen aus einer ungeprüften Liste oder aus einem anderen Land. Jetzt wird jeder Name geprüft: kein Fehler mehr.',
        en: 'of players used to carry a name from an unchecked list or from another country. Now every single name is checked, and not one is wrong.',
        hr: 'igrača prije je nosilo ime s neprovjerenog popisa ili iz druge zemlje. Sada se provjerava svako ime i nijedno više nije pogrešno.' } },
      { wert: 780, text: {
        de: 'Spieler hießen vorher genau wie ein Landsmann. Jetzt keiner.',
        en: 'players used to share their exact name with a fellow countryman. Now none do.',
        hr: 'igrača prije se zvalo potpuno isto kao neki sunarodnjak. Sada nijedan.' } },
    ],
    hindernis: {
      titel: { de: 'Auf einmal hießen sie anders', en: 'Suddenly the names were different', hr: 'Odjednom su se igrači drukčije zvali' },
      text: {
        de: 'Ich hab es selbst beim Testen gemerkt: bisher hießen alle Spieler bei jedem Start gleich, und auf einmal waren einige Namen neu. Der Prüfer dafür war grün, weil er nur eine Welt angeschaut hat, nie zwei Karrieren nebeneinander. Jetzt ist die Startwelt fest, auf jedem Handy und in jeder Karriere. Danach ist mir noch was aufgefallen: Manche 19-Jährige hießen wie Großväter. Jetzt passt auch das Alter zum Namen.',
        en: 'I noticed it myself while testing: until then every player had the same name every time you started, and suddenly some names were new. The check for it was green, because it only ever looked at one world, never at two careers side by side. Now the starting world is fixed, on every phone and in every career. Then I noticed something else: some 19-year-olds had grandad names. Now the name fits the age too.',
        hr: 'Sam sam to primijetio tijekom testiranja: dotad su se svi igrači pri svakom pokretanju zvali isto, a onda su odjednom neka imena bila nova. Provjera za to bila je zelena jer je gledala samo jedan svijet, nikad dvije karijere jednu uz drugu. Sada je početni svijet uvijek isti, na svakom mobitelu i u svakoj karijeri. Onda sam primijetio još nešto: neki 19-godišnjaci zvali su se kao djedovi. Sada i ime odgovara dobi.',
      },
    },
    aenderungen: {
      de: {
        neu: [
          'Jeder Computer-Trainer hat eine Lieblingsformation und eine Spielweise, passend zu seinem Land. Die Formation wählt er für jedes Spiel aus seiner Idee, seinem Kader und dem Gegner: gegen Stärkere vorsichtiger, gegen Schwächere mutiger. Man sieht es am Spiel, nicht an einer Anzeige.',
          'Liegt eine Mannschaft hinten oder ist in Unterzahl, stellt sie um und wird in der letzten halben Stunde gefährlicher. Das gilt für alle Spiele der Welt, auch für die, die du nicht live siehst.',
          'Nach einer Niederlage stellen die Computer-Trainer öfter um, nach einem Sieg bleiben sie dabei.',
          'Ein neuer Trainer übernimmt etwas von der Tradition: Vereine mit großem Namen bleiben eher bei ihrer Spielweise.',
          'Beim Vertrag sagt der Spieler, wie lange er unterschreiben will. Bietest du etwas anderes, verlangt er mehr Gehalt, liegst du zwei Jahre daneben, sagt er ab. Ältere unterschreiben gern länger. Zu finden unter Team → Spieler → Vertrag verlängern und beim Kauf nach der Einigung über die Ablöse.',
          'Hast du dich für Europa qualifiziert, kommt am 1. Juli ein Brief: Wettbewerb, Startrunde und wie du dich qualifiziert hast. Die Fans reden im Feed darüber.',
          'Jede Karriere beginnt in derselben Welt. Startest du zweimal mit demselben Verein, triffst du dieselben Spieler mit denselben Namen, Altern und Stärken, dieselbe Akademie und dieselben Trainer. Anders wird es erst ab dem ersten Spieltag.',
          'Diese Startwelt bleibt ab jetzt in jedem Update gleich. Wer öfter spielt, kennt irgendwann seine Spieler und die Teams, und das soll so bleiben.',
          'Die Namen klingen nach ihrem Land. Ein Kroate heißt kroatisch, ein Serbe serbisch, Vor- und Nachname passen immer zusammen. Auch die Trainer. Laufende Karrieren behalten ihre Namen.',
          'Jede Generation trägt ihre Namen. Die Spieler heißen wie Leute ihres Jahrgangs, die Trainer wie Leute ihrer Generation. Kein 19-Jähriger heißt mehr wie sein Opa.',
          'Alle Namen sind erfunden, kein echter Profi spielt bei uns mit. Und im selben Land heißt kein Spieler genau wie ein anderer.',
          'Holst du einen Spieler per Leihe, meldet es die Presse unter Nachrichten → Liga, mit Dauer und Kaufoption.',
          '„Was ist neu“ ist eine Zeile im Hauptmenü mit goldenem Punkt nach dem Update. Dahinter stehen die Kernpunkte, der Weg hierher ins Tagebuch und „Im Play Store bewerten“.',
        ],
        besser: [
          'Große und mittlere Vereine ziehen mehr eigene Talente in den Profikader hoch.',
          'Die Computer-Vereine geben Verträge, wie es im echten Fußball üblich ist.',
          'Trainer mit Dreierkette bleiben bei ihrer Idee: Auch ein Außenverteidiger darf auf die Schiene, sie holen echte Schienenspieler und geben ihre Außenverteidiger nicht mehr zuerst ab.',
          'Der Scout sagt jetzt „Wäre ein großer Sprung für uns“ statt „eine Nummer zu groß“. Er bewertet die Stärke, ob der Spieler kommt, zeigt die Verhandlung.',
          'Die Bitte um eine Bewertung kommt früher, nach einem Ligasieg, wenn der Vorstand zufrieden ist, und höchstens zweimal.',
          'Fenster, die von selbst aufgehen, warten, bis das vorige zu ist.',
          'Sind die Torhüter angeschlagen, steht bei den Computer-Vereinen erst der angeschlagene Profi im Tor, dann das Torwart-Talent, erst danach ein Feldspieler.',
          'Für einen kurz Gesperrten holt kein Verein extra einen neuen Spieler.',
          'Jeder Spieltag rechnet so schnell wie in 1.3.',
        ],
        repariert: [
          'Ein Angebot eines Computer-Vereins für deinen Spieler platzt nicht mehr, weil dem Käufer in der Woche das Geld ausgeht.',
          'Nach dem fertigen Scout-Bericht war die Stärke auf der Spielerkarte leer.',
          'Kein Computer-Verein startet mehr ohne spielbaren Torwart in die Saison.',
          'Nach einem Pokalsieg steht unter dem Ergebnis wieder, wann die nächste Runde ist.',
        ],
      },
      en: {
        neu: [
          'Every computer-controlled manager has a favourite formation and a way of playing that suits his country. He picks the shape for each match from his idea, his squad and the opponent: more careful against stronger sides, braver against weaker ones. You see it in how they play, not on a screen.',
          'A side that falls behind or goes down to ten men changes shape and gets more dangerous in the last half hour. That goes for every match in the world, including the ones you don\'t watch live.',
          'After a defeat the computer-controlled managers change things more often, after a win they stick with it.',
          'A new manager keeps some of the club\'s tradition: clubs with a big name tend to stay with their way of playing.',
          'In contract talks the player tells you how long he wants to sign for. Offer something else and he wants more wages, miss by two years and he says no. Older players are happy to sign for longer. You find it under Team → player → Renew contract, and when you sign a player after agreeing the fee.',
          'Qualify for Europe and a letter arrives on 1 July: competition, starting round and how you got there. The fans talk about it in the feed.',
          'Every career starts in the same world. Start twice with the same club and you\'ll find the same players with the same names, ages and ratings, the same academy and the same managers. Things only start to differ from the first matchday.',
          'That starting world now stays the same in every update. Play often enough and you get to know your players and the other teams, and we want to keep it that way.',
          'Names sound like the country they come from. A Croatian has a Croatian name, a Serb a Serbian one, and first name and surname always go together. Managers too. Careers already under way keep their names.',
          'Every generation has its own names. Players are named like people born in their years, managers like people of their generation. No 19-year-old is named like his grandad any more.',
          'All names are made up, so no real professional plays in our game. And within one country, no two players share the exact same name.',
          'Bring a player in on loan and the press reports it under News → League, with the length and any option to buy.',
          '"What\'s new" is a line in the main menu with a gold dot after an update. Behind it are the key points, the way into this diary and "Rate us on Google Play".',
        ],
        besser: [
          'Big and mid-sized clubs promote more of their own academy players to the first team.',
          'Computer-controlled clubs hand out contracts the way real clubs do.',
          'Managers who play a back three stay true to it: a full-back can play wing-back, they sign real wing-backs and no longer sell their full-backs first.',
          'The scout now says "Would be a big step up for us" instead of "A level above us". He rates the player\'s level, and the talks show whether the player will come.',
          'The request to rate the game comes earlier, after a league win when the board is happy, and no more than twice.',
          'Pop-ups that open on their own now wait until the previous one is closed.',
          'If the keepers are carrying knocks, computer-controlled clubs play the injured pro first, then a young keeper, and only then an outfield player.',
          'No club signs an extra player just to cover a short suspension.',
          'Every matchday is calculated as fast as in 1.3.',
        ],
        repariert: [
          'An offer from a computer-controlled club for one of your players no longer falls through because the buyer runs out of money during the week.',
          'After a scouting report was finished, the player card showed no rating.',
          'No computer-controlled club starts the season without a keeper who can play.',
          'After a cup win, the result screen shows when the next round is again.',
        ],
      },
      hr: {
        neu: [
          'Svaki trener kojim upravlja računalo ima omiljenu formaciju i stil igre u skladu sa svojom zemljom. Formaciju za svaku utakmicu bira prema svojoj ideji, kadru i protivniku: oprezniji protiv jačih, hrabriji protiv slabijih. To se vidi po igri, a ne na nekom prikazu.',
          'Momčad koja gubi ili ostane s igračem manje mijenja formaciju i u posljednjih pola sata postaje opasnija. To vrijedi za sve utakmice na svijetu, i za one koje ne gledaš uživo.',
          'Nakon poraza treneri kojima upravlja računalo češće mijenjaju formaciju, a nakon pobjede ostaju pri njoj.',
          'Novi trener preuzima dio tradicije: klubovi s velikim imenom češće ostaju pri svom stilu igre.',
          'U pregovorima o ugovoru igrač kaže na koliko godina želi potpisati. Ponudiš li drugačije, traži veću plaću, a promašiš li za dvije godine, odbija. Stariji igrači rado potpisuju na dulje. Nalazi se pod Momčad → igrač → Produži ugovor i pri kupnji nakon dogovora oko odštete.',
          'Plasiraš li se u Europu, 1. srpnja stiže pismo: natjecanje, kolo u kojem počinješ i kako je klub izborio Europu. Navijači o tome pričaju u feedu.',
          'Svaka karijera počinje u istom svijetu. Kreneš li dvaput s istim klubom, dočekat će te isti igrači s istim imenima, godinama i kvalitetom, ista akademija i isti treneri. Razlike počinju tek od prvog kola.',
          'Taj početni svijet od sada ostaje isti u svakom ažuriranju. Tko igra češće, s vremenom upozna svoje igrače i ostale momčadi, i tako treba ostati.',
          'Imena zvuče kao zemlja iz koje igrač dolazi. Hrvat nosi hrvatsko ime, Srbin srpsko, a ime i prezime uvijek idu zajedno. Isto vrijedi i za trenere. Karijere koje su već u tijeku zadržavaju svoja imena.',
          'Svaka generacija nosi svoja imena. Igrači se zovu kao ljudi njihova godišta, treneri kao ljudi svoje generacije. Nijedan 19-godišnjak više se ne zove kao njegov djed.',
          'Sva su imena izmišljena, u igri nema nijednog pravog profesionalca. I u istoj zemlji nijedan igrač više nema potpuno isto ime i prezime kao drugi.',
          'Dovedeš li igrača na posudbu, javljaju to mediji pod Vijesti → Liga, s trajanjem posudbe i opcijom otkupa.',
          '„Što je novo“ je redak u glavnom izborniku sa zlatnom točkom nakon ažuriranja. Iza njega su glavne novosti, put do ovog dnevnika i „Ocijeni igru na Google Playu“.',
        ],
        besser: [
          'Veliki i srednji klubovi u prvu momčad prebacuju više vlastitih talenata.',
          'Klubovi kojima upravlja računalo nude ugovore kao u pravom nogometu.',
          'Treneri s trojicom u obrani ostaju pri svojoj ideji: i bočni branič smije igrati kao krilni, dovode prave krilne igrače i više ne prodaju prve svoje bočne braniče.',
          'Skaut sada kaže „To bi bio velik iskorak za nas“ umjesto „Prevelik zalogaj za nas“. On procjenjuje kvalitetu, a hoće li igrač doći, pokazuju pregovori.',
          'Molba za ocjenu stiže ranije, nakon pobjede u ligi kad je uprava zadovoljna, i najviše dvaput.',
          'Skočni prozori više ne iskaču jedan preko drugoga: svaki čeka da se prethodni zatvori.',
          'Kad su vratari načeti, klubovi kojima upravlja računalo prvo stave načetog profesionalca, zatim mladog vratara, a tek onda igrača iz polja.',
          'Zbog kratke kazne nijedan klub više ne dovodi dodatnog igrača.',
          'Svako kolo računa se jednako brzo kao u verziji 1.3.',
        ],
        repariert: [
          'Ponuda kluba kojim upravlja računalo za tvog igrača više ne propada zato što kupcu tijekom tjedna ponestane novca.',
          'Nakon gotovog izvještaja skauta na kartici igrača nije bilo ocjene kvalitete.',
          'Nijedan klub kojim upravlja računalo više ne kreće u sezonu bez vratara koji može braniti.',
          'Nakon pobjede u kupu ispod rezultata opet piše kad se igra sljedeće kolo.',
        ],
      },
    },
  },
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
