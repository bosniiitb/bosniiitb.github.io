/**
 * rechtstexte.mjs — baut die Rechtsseiten auf Englisch und Kroatisch (MP587, 28.09.2026)
 *
 * Warum ein Erzeuger und nicht vier Dateien von Hand: ein Rechtstext muss in jeder Sprache
 * DIESELBE Auskunft in DERSELBEN Reihenfolge geben. Aus einer Inhaltstabelle gebaut, ist das
 * nachweisbar; von Hand geschrieben, ist es geglaubt.
 *
 * Die DEUTSCHE Seite wird NICHT erzeugt — sie ist die verbindliche Fassung und bleibt, wie sie ist.
 * Dieser Erzeuger liest nur ihre Bauform (CSS, Kopf, Fuss) und fuellt sie mit den anderen Sprachen.
 *
 * Kroatisch benutzt die AMTLICHEN Begriffe der kroatischen Datenschutzbehoerde AZOP
 * (azop.hr): ispitanik, voditelj obrade, izvrsitelj obrade, privola, nadzorno tijelo,
 * Opca uredba o zastiti podataka. Nicht uebersetzt, nachgeschlagen.
 *
 * Aufruf:  node tools/rechtstexte.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const WURZEL = path.resolve(HIER, '..');

/* ---------------------------------------------------------------- Bauform aus der deutschen Seite */
const deSeite = fs.readFileSync(path.join(WURZEL, 'datenschutz.html'), 'utf8');
const STIL = deSeite.slice(deSeite.indexOf('<style>'), deSeite.indexOf('</style>') + 8);
if (!STIL.includes('--gold')) throw new Error('Stil nicht gefunden');

const STAND = { en: '7 October 2026', hr: '7. listopada 2026.' };

/* ---------------------------------------------------------------- Die Inhalte, je Sprache */

const INHALT = {
  en: {
    lang: 'en',
    titel: 'Privacy Policy — Trainer’s Boardroom',
    h1: ['Privacy ', 'Policy'],
    standLabel: 'Last updated: ',
    zurueck: '← Back to home',
    heim: '/en/',
    app: {
      h2: 'The app „Trainer’s Boardroom“',
      absaetze: [
        '<b>The app does not collect, store, transmit or share any personal data.</b> There are no user accounts and no login. The app runs fully offline. You do not need an internet connection to play; only the update check at launch (see below) briefly uses the network, and without a connection the app starts as usual. Your entire save, meaning your career, squad, finances and results, lives only on your device in a local database. It never leaves your device. The app contains no analytics tools, no advertising and no tracking.',
        '<b>Updates:</b> At launch the app asks the update service of Expo (Expo, Inc., USA; GDPR compliant, certified under the EU–US Data Privacy Framework) whether a newer version of the game code is available, and downloads it in the background if so. What is transmitted is the platform, the version number, the release channel and a random installation number that is not tied to your device: no device identifier, no name, no save data. Your IP address is processed technically for the transfer and is not stored by us. Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in a working app). Without an internet connection the app starts and plays as usual.',
        '<b>Ratings:</b> After special achievements in the game, the app may once per career ask Google Play to show its rating dialog. The dialog comes from Google Play and is subject to Google’s privacy policy; the app itself receives no data from it.',
        '<b>Purchases:</b> You can unlock the full game with a one-off purchase. Google Play handles the whole purchase, and the app never receives your name, your address or your payment details. It asks Google Play whether the Google account on this device owns the purchase, checks Google’s signature on the answer, acknowledges the purchase to Google Play as Google requires, and keeps the result on your device. Whether you installed the app before 1 November 2026, and so keep playing without buying, is also worked out on your device: from the first-install date that Android provides and from any existing saves. None of this leaves your device. In the European Union the seller is Google Commerce Limited (Ireland); the purchase is subject to Google’s terms and privacy policy. Legal basis: Art. 6 (1) (b) GDPR (unlocking the game you bought).',
        '<b>Sharing:</b> None beyond what is described above. The app collects no personal data and shares nothing with anyone.',
        '<b>Deletion:</b> Because your data lives only on your device, you can remove it yourself at any time: through your device’s app settings, through the reset button in the game (Settings → Reset game), or by uninstalling the app.',
        '<b>Permissions:</b> The app requests only the permissions needed to run and to store its local save. It does not access your contacts, location, camera, microphone or files outside its own storage.',
        '<b>Children:</b> The app collects no data from anyone, including children.',
        '<i>Note: the sections below concern the website trainersboardroom.com, where you can sign up for the newsletter voluntarily. The app itself is not affected by them.</i>',
      ],
    },
    vorspann: [
      'Thank you for your interest in our company. Data protection matters a great deal to Lozanite Studio. You can use the Lozanite Studio website without giving any personal data at all. If you want to use particular services through our website, processing personal data may become necessary. Where processing is necessary and there is no legal basis for it, we generally obtain the consent of the data subject.',
      'The processing of personal data, for example a name, an address, an e-mail address or a telephone number, always happens in line with the General Data Protection Regulation and with the country-specific data protection rules that apply to Lozanite Studio. With this privacy policy we want to inform the public about the nature, scope and purpose of the personal data we collect, use and process, and about the rights data subjects have.',
      'As the controller, Fabian Bošnjak (Lozanite Studio) has put numerous technical and organisational measures in place to protect the personal data processed through this website as completely as possible. Even so, internet-based transmissions can have security gaps, so absolute protection cannot be guaranteed. For that reason everyone is free to send us personal data by other means, for example by telephone.',
    ],
    abschnitte: [
      ['1. Definitions', 'This privacy policy uses the terms of the European legislator from the General Data Protection Regulation (GDPR). Our privacy policy should be easy to read and understand, for the public as well as for our customers and business partners. We therefore explain the terms used first. Among others, we use the following terms in this privacy policy: personal data, data subject, processing, restriction of processing, profiling, pseudonymisation, controller, processor, recipient, third party and consent, each in the sense of Art. 4 GDPR.'],
      ['2. Name and address of the controller', 'The controller for the purposes of the General Data Protection Regulation is: Fabian Bošnjak, Lozanite Studio, Von-Einem-Straße 82, 45130 Essen, Germany. Phone: +49 1575 6785606. E-mail: trainersboardroom@outlook.com. Website: www.trainersboardroom.com.'],
      ['3. Collection of general data and information', 'Each time the Lozanite Studio website is called up by a data subject or an automated system, it records a series of general data and information, which are stored in the server log files. What can be recorded is: browser types and versions used, the operating system used, the referrer page, the sub-pages visited, the date and time of access, a shortened IP address, the internet service provider, and other data used to avert danger in the event of attacks. When using these general data, we draw no conclusions about the data subject. This information serves to deliver and optimise the content correctly, to keep the technology working, and to give the authorities the information they need in the event of a cyber attack. These data are stored separately from all other personal data. This website is hosted on GitHub Pages (GitHub, Inc., San Francisco, USA, a Microsoft company). When a page is called up, GitHub logs the visitor’s IP address and stores it for security purposes, whether or not the visitor is signed in to GitHub. We ourselves have no access to these logs and do not evaluate them. GitHub is certified under the EU–US Data Privacy Framework. Legal basis: Art. 6 (1) (f) GDPR (legitimate interest in a securely reachable website).'],
      ['4. Newsletter and waiting list', 'On the Lozanite Studio website you can put yourself on a waiting list or subscribe to the newsletter. Which personal data are transmitted follows from the input form, as a rule only the e-mail address. The newsletter can only be received if the data subject has a valid e-mail address and registers for the mailing. For legal reasons a confirmation e-mail is sent to the address entered, using the double opt-in procedure, to check that the owner of the address has authorised receipt. The e-mail address collected is used only to send information about the game (news, beta test, release). The subscription can be cancelled and consent withdrawn at any time, through the unsubscribe link in every e-mail or by writing to us. The mailing goes out through Brevo (Sendinblue GmbH, Germany, part of the Brevo group based in France). Brevo processes the data solely on our behalf; a data processing agreement is in place for this. Storage is on servers in Germany. What is transmitted is the e-mail address and the time and IP address of the sign-up and of the confirmation, because we need these as proof of consent. Brevo can record whether a message was opened and whether a link in it was clicked; we use that only to see whether a mailing worked, and we build no profiles from it. Legal basis: Art. 6 (1) (a) GDPR (consent).'],
      ['5. Routine erasure and blocking of personal data', 'The controller processes and stores personal data only for the period needed to reach the purpose of storage, or for as long as the law provides. If the purpose ceases or a statutory period expires, the data are routinely blocked or erased in accordance with the rules.'],
      ['6. Rights of the data subject', 'Under the GDPR you have extensive rights: the right to confirmation, to information (Art. 15), to rectification (Art. 16), to erasure, the „right to be forgotten“ (Art. 17), to restriction of processing (Art. 18), to data portability (Art. 20), to object (Art. 21), and the right to withdraw consent at any time. You also have the right to lodge a complaint with a supervisory authority. To exercise these rights you can contact us at any time (contact details under point 2).'],
      ['7. Legal basis for processing', 'Art. 6 (1) (a) GDPR is the legal basis for processing for which we obtain consent, for example the waiting list or the newsletter. Art. 6 (1) (b) GDPR applies to processing needed to perform a contract or to take steps before entering into one. Art. 6 (1) (c) GDPR applies where there is a legal obligation. Art. 6 (1) (f) GDPR applies to safeguard legitimate interests, provided the interests of the data subject do not override them.'],
      ['8. Storage period', 'The criterion for the storage period is the respective statutory retention period, or the duration of the consent given. Once it expires or is withdrawn, the data are routinely erased.'],
      ['9. Automated decision-making', 'As a responsible company we do not use automated decision-making or profiling.'],
    ],
    fussnote: 'The basis of this privacy policy was created with a privacy policy generator. The services we use are named individually above: hosting via GitHub Pages under point 3, the mailing via Brevo under point 4.',
    bindend: '<b>The German version is the legally binding one.</b> This English version is provided for your convenience. In case of any difference, the <a href="/datenschutz.html">German privacy policy</a> applies.',
    fuss: [['/en/legal-notice.html', 'Legal notice'], ['/en/privacy.html', 'Privacy'], ['/en/', 'Home']],
  },

  hr: {
    lang: 'hr',
    titel: 'Politika privatnosti — Trainer’s Boardroom',
    h1: ['Politika ', 'privatnosti'],
    standLabel: 'Ažurirano: ',
    zurueck: '← Natrag na početnu',
    heim: '/hr/',
    app: {
      h2: 'Aplikacija „Trainer’s Boardroom“',
      absaetze: [
        '<b>Aplikacija ne prikuplja, ne pohranjuje, ne prenosi i ne dijeli nikakve osobne podatke.</b> Nema korisničkih računa ni prijave. Aplikacija radi potpuno offline. Za igranje nije potrebna internetska veza; samo provjera ažuriranja pri pokretanju (vidi niže) nakratko koristi mrežu, a bez veze se aplikacija pokreće kao i inače. Cijela spremljena igra, dakle karijera, sastav, financije i rezultati, nalazi se isključivo na tvom uređaju u lokalnoj bazi podataka. Ne napušta tvoj uređaj. Aplikacija ne sadrži alate za analitiku, reklame ni praćenje.',
        '<b>Ažuriranja:</b> Pri pokretanju aplikacija provjerava kod usluge za ažuriranje tvrtke Expo (Expo, Inc., SAD; usklađeno s GDPR-om, certificirano prema okviru EU–SAD Data Privacy Framework) postoji li novija verzija koda igre i po potrebi je preuzima u pozadini. Prenose se platforma, broj verzije, kanal objave i nasumičan broj instalacije koji nije vezan uz tvoj uređaj: nema identifikatora uređaja, nema imena, nema spremljene igre. IP adresa se tehnički obrađuje radi prijenosa i mi je ne pohranjujemo. Pravna osnova: čl. 6. st. 1. toč. (f) Opće uredbe o zaštiti podataka (legitimni interes za ispravnu aplikaciju). Bez internetske veze aplikacija se pokreće i igra kao i inače.',
        '<b>Ocjenjivanje:</b> Nakon posebnih uspjeha u igri aplikacija može jednom po karijeri zatražiti od Google Playa prikaz dijaloga za ocjenu. Dijalog dolazi od Google Playa i podliježe Googleovoj politici privatnosti; sama aplikacija iz njega ne dobiva nikakve podatke.',
        '<b>Kupnja:</b> Cijelu igru možeš otključati jednokratnom kupnjom. Kupnju u cijelosti provodi Google Play, a aplikacija nikada ne dobiva tvoje ime, adresu ni podatke o plaćanju. Ona samo pita Google Play posjeduje li Google račun na ovom uređaju tu kupnju, provjerava Googleov potpis na odgovoru, potvrđuje kupnju Google Playu kako Google to propisuje i rezultat čuva na tvom uređaju. Je li aplikacija na tvom uređaju instalirana prije 1. studenoga 2026., pa za tebe ostaje besplatna, utvrđuje se također na samom uređaju: prema datumu prve instalacije koji daje Android i prema postojećim spremljenim igrama. Ti podaci ne napuštaju tvoj uređaj. U Europskoj uniji prodavatelj je Google Commerce Limited (Irska); za kupnju vrijede Googleovi uvjeti i politika privatnosti. Pravna osnova: čl. 6. st. 1. toč. (b) Opće uredbe (otključavanje kupljene igre).',
        '<b>Dijeljenje:</b> Nema ga izvan gore navedenoga. Aplikacija ne prikuplja osobne podatke i ništa ne prosljeđuje.',
        '<b>Brisanje:</b> Budući da su tvoji podaci samo na tvom uređaju, možeš ih ukloniti sam u svakom trenutku: preko postavki aplikacija na uređaju, preko gumba za vraćanje na početak u igri (Postavke → Vrati igru na početak) ili deinstalacijom aplikacije.',
        '<b>Dopuštenja:</b> Aplikacija traži samo dopuštenja potrebna za rad i za spremanje lokalne igre. Ne pristupa tvojim kontaktima, lokaciji, kameri, mikrofonu ni datotekama izvan vlastite pohrane.',
        '<b>Djeca:</b> Aplikacija ni od koga ne prikuplja podatke, pa tako ni od djece.',
        '<i>Napomena: odjeljci niže odnose se na internetsku stranicu trainersboardroom.com, gdje se dobrovoljno možeš prijaviti na newsletter. Sama aplikacija time nije obuhvaćena.</i>',
      ],
    },
    vorspann: [
      'Hvala na zanimanju za našu tvrtku. Zaštita podataka ima velik značaj za Lozanite Studio. Internetske stranice Lozanite Studija možeš koristiti bez navođenja bilo kakvih osobnih podataka. Želiš li putem naše stranice koristiti posebne usluge, obrada osobnih podataka mogla bi postati potrebna. Ako je obrada potrebna, a za nju ne postoji pravna osnova, u pravilu tražimo privolu ispitanika.',
      'Obrada osobnih podataka, primjerice imena, adrese, adrese e-pošte ili telefonskog broja, uvijek se provodi u skladu s Općom uredbom o zaštiti podataka i s propisima o zaštiti podataka koji vrijede za Lozanite Studio. Ovom politikom privatnosti želimo javnost obavijestiti o vrsti, opsegu i svrsi osobnih podataka koje prikupljamo, koristimo i obrađujemo te o pravima koja ispitanici imaju.',
      'Kao voditelj obrade Fabian Bošnjak (Lozanite Studio) proveo je niz tehničkih i organizacijskih mjera kako bi osobni podaci koji se obrađuju putem ove stranice bili zaštićeni što potpunije. Ipak, prijenosi putem interneta mogu imati sigurnosne propuste, pa se apsolutna zaštita ne može jamčiti. Zbog toga je svakom ispitaniku slobodno osobne podatke dostaviti i na drugi način, primjerice telefonom.',
    ],
    abschnitte: [
      ['1. Pojmovi', 'Ova se politika privatnosti služi pojmovima koje je europski zakonodavac upotrijebio u Općoj uredbi o zaštiti podataka (GDPR). Naša politika privatnosti treba biti lako čitljiva i razumljiva, kako javnosti tako i našim korisnicima i poslovnim partnerima. Zato najprije pojašnjavamo upotrijebljene pojmove. U ovoj politici koristimo, među ostalim, sljedeće pojmove: osobni podaci, ispitanik, obrada, ograničenje obrade, izrada profila, pseudonimizacija, voditelj obrade, izvršitelj obrade, primatelj, treća strana i privola, svaki u smislu čl. 4. Opće uredbe.'],
      ['2. Naziv i adresa voditelja obrade', 'Voditelj obrade u smislu Opće uredbe o zaštiti podataka jest: Fabian Bošnjak, Lozanite Studio, Von-Einem-Straße 82, 45130 Essen, Njemačka. Telefon: +49 1575 6785606. E-pošta: trainersboardroom@outlook.com. Stranica: www.trainersboardroom.com.'],
      ['3. Prikupljanje općih podataka i informacija', 'Pri svakom otvaranju stranice Lozanite Studija od strane ispitanika ili automatiziranog sustava bilježi se niz općih podataka i informacija koje se pohranjuju u datotekama zapisa poslužitelja. Mogu se zabilježiti: vrste i verzije preglednika, operativni sustav, stranica s koje je posjetitelj došao, otvorene podstranice, datum i vrijeme pristupa, skraćena IP adresa, davatelj internetskih usluga te ostali podaci za obranu od napada. Pri korištenju tih općih podataka ne izvodimo zaključke o ispitaniku. Te informacije služe za ispravnu isporuku i optimizaciju sadržaja, za očuvanje tehničke ispravnosti i za to da se tijelima u slučaju kibernapada pruže potrebne informacije. Ti se podaci pohranjuju odvojeno od svih drugih osobnih podataka. Ova se internetska stranica nalazi na poslužiteljima usluge GitHub Pages (GitHub, Inc., San Francisco, SAD, tvrtka u sastavu Microsofta). Pri otvaranju stranice GitHub bilježi IP adresu posjetitelja i pohranjuje je radi sigurnosti, neovisno o tome je li posjetitelj prijavljen na GitHub. Mi sami tim zapisima nemamo pristup i ne analiziramo ih. GitHub je certificiran prema okviru EU–SAD Data Privacy Framework. Pravna osnova: čl. 6. st. 1. toč. (f) Opće uredbe (legitimni interes za sigurno dostupnu internetsku stranicu).'],
      ['4. Newsletter i lista čekanja', 'Na stranici Lozanite Studija možeš se upisati na listu čekanja odnosno pretplatiti na newsletter. Koji se osobni podaci pritom prenose proizlazi iz obrasca za unos, u pravilu samo adresa e-pošte. Newsletter se može primati samo ako ispitanik ima važeću adresu e-pošte i registrira se za slanje. Iz pravnih razloga na prvi upisanu adresu šalje se potvrdna poruka postupkom dvostruke potvrde (double opt-in) kako bi se provjerilo je li vlasnik adrese odobrio primanje. Prikupljena adresa e-pošte koristi se isključivo za slanje informacija o igri (novosti, beta test, objava). Pretplata se može otkazati, a privola povući, u svakom trenutku, putem poveznice za odjavu u svakoj poruci ili porukom nama. Slanje se obavlja putem usluge Brevo (Sendinblue GmbH, Njemačka, dio grupe Brevo sa sjedištem u Francuskoj). Brevo podatke obrađuje isključivo po našem nalogu; za to postoji ugovor o obradi podataka. Pohrana je na poslužiteljima u Njemačkoj. Prenose se adresa e-pošte te vrijeme i IP adresa prijave i potvrde, jer nam to služi kao dokaz privole. Brevo pritom može zabilježiti je li poruka otvorena i je li poveznica u njoj kliknuta; to koristimo samo da vidimo je li slanje uspjelo i iz toga ne izrađujemo profile. Pravna osnova: čl. 6. st. 1. toč. (a) Opće uredbe (privola).'],
      ['5. Rutinsko brisanje i blokiranje osobnih podataka', 'Voditelj obrade obrađuje i pohranjuje osobne podatke samo u razdoblju potrebnom za postizanje svrhe pohrane ili koliko je zakonom predviđeno. Prestane li svrha ili istekne li zakonski rok, podaci se rutinski blokiraju ili brišu u skladu s propisima.'],
      ['6. Prava ispitanika', 'Prema Općoj uredbi imaš opsežna prava: pravo na potvrdu, na pristup (čl. 15.), na ispravak (čl. 16.), na brisanje, takozvano „pravo na zaborav“ (čl. 17.), na ograničenje obrade (čl. 18.), na prenosivost podataka (čl. 20.), na prigovor (čl. 21.) te pravo da danu privolu povučeš u svakom trenutku. Uz to postoji pravo na pritužbu nadzornom tijelu; u Hrvatskoj je to Agencija za zaštitu osobnih podataka (AZOP). Za ostvarivanje tih prava možeš nam se obratiti u svakom trenutku (podaci za kontakt pod točkom 2).'],
      ['7. Pravna osnova obrade', 'Čl. 6. st. 1. toč. (a) Opće uredbe pravna je osnova za obrade za koje tražimo privolu, primjerice listu čekanja ili newsletter. Čl. 6. st. 1. toč. (b) vrijedi za obrade potrebne za izvršenje ugovora ili za radnje prije sklapanja ugovora. Čl. 6. st. 1. toč. (c) vrijedi kod pravnih obveza. Čl. 6. st. 1. toč. (f) vrijedi radi zaštite legitimnih interesa, ako interesi ispitanika ne prevladavaju.'],
      ['8. Razdoblje pohrane', 'Mjerilo za razdoblje pohrane jest zakonski rok čuvanja odnosno trajanje dane privole. Nakon isteka ili povlačenja podaci se rutinski brišu.'],
      ['9. Automatizirano donošenje odluka', 'Kao odgovorna tvrtka ne primjenjujemo automatizirano donošenje odluka ni izradu profila.'],
    ],
    fussnote: 'Osnova ove politike privatnosti izrađena je generatorom politike privatnosti. Usluge kojima se koristimo navedene su pojedinačno iznad: hosting putem GitHub Pagesa pod točkom 3., slanje putem Brevoa pod točkom 4.',
    bindend: '<b>Njemačka je verzija pravno obvezujuća.</b> Ova hrvatska verzija služi radi lakšeg razumijevanja. U slučaju razlike vrijedi <a href="/datenschutz.html">njemačka politika privatnosti</a>.',
    fuss: [['/hr/pravne-informacije.html', 'Pravne informacije'], ['/hr/privatnost.html', 'Privatnost'], ['/hr/', 'Početna']],
  },
};

/* ---------------------------------------------------------------- Die Rechtsseiten (Impressum) */

const RECHT = {
  en: {
    lang: 'en',
    titel: 'Legal notice — Trainer’s Boardroom',
    h1: ['Legal ', 'notice'],
    unter: 'Information according to § 5 DDG (German Digital Services Act)',
    zurueck: '← Back to home',
    koerper: '<p>Fabian Bošnjak<br>Lozanite Studio<br>Von-Einem-Straße 82<br>45130 Essen<br>Germany</p>'
      + '<p><b>Contact</b><br>Phone: +49 1575 6785606<br>E-mail: trainersboardroom@outlook.com</p>',
    bindend: '<b>The German version is the legally binding one.</b> This English version is provided for your convenience. In case of any difference, the <a href="/impressum.html">German legal notice</a> applies.',
    fuss: [['/en/legal-notice.html', 'Legal notice'], ['/en/privacy.html', 'Privacy'], ['/en/', 'Home']],
  },
  hr: {
    lang: 'hr',
    titel: 'Pravne informacije — Trainer’s Boardroom',
    h1: ['Pravne ', 'informacije'],
    unter: 'Podaci prema čl. 5. njemačkog Zakona o digitalnim uslugama (DDG)',
    zurueck: '← Natrag na početnu',
    koerper: '<p>Fabian Bošnjak<br>Lozanite Studio<br>Von-Einem-Straße 82<br>45130 Essen<br>Njemačka</p>'
      + '<p><b>Kontakt</b><br>Telefon: +49 1575 6785606<br>E-pošta: trainersboardroom@outlook.com</p>',
    bindend: '<b>Njemačka je verzija pravno obvezujuća.</b> Ova hrvatska verzija služi radi lakšeg razumijevanja. U slučaju razlike vrijede <a href="/impressum.html">njemačke pravne informacije</a>.',
    fuss: [['/hr/pravne-informacije.html', 'Pravne informacije'], ['/hr/privatnost.html', 'Privatnost'], ['/hr/', 'Početna']],
  },
};

/* ---------------------------------------------------------------- Bauen */

const SPRACHZEILE = (aktiv) => '\n  <span class="langrow">'
  + [['de', '/datenschutz.html', 'Deutsch'], ['en', '/en/privacy.html', 'English'], ['hr', '/hr/privatnost.html', 'Hrvatski']]
      .map(([k, u, n]) => k === aktiv ? '<b>' + n + '</b>' : '<a href="' + u + '">' + n + '</a>').join(' · ')
  + '</span>';

function huelle({ lang, titel, zurueck, heim, h1, unter, koerper, fuss, sprachzeile }) {
  return '<!DOCTYPE html>\n<html lang="' + lang + '"><head>\n'
    + '<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">\n'
    + '<meta name="robots" content="index,follow">\n'
    + '<title>' + titel + '</title>\n'
    + '<link href="/fonts/rajdhani.css" rel="stylesheet">\n'
    + STIL + '</head><body>\n'
    + '<nav class="nav">\n  <a href="' + heim + '" class="logo">TRAINER’S <b>BOARDROOM</b></a>\n'
    + '  <a href="' + heim + '" class="back">' + zurueck + '</a>\n</nav>\n'
    + '<main>\n  <h1>' + h1[0] + '<span>' + h1[1] + '</span></h1>\n'
    + '  <p class="upd">' + unter + '</p>\n'
    + koerper + '\n</main>\n'
    + '<footer>\n  ' + fuss.map(([u, n]) => '<a href="' + u + '">' + n + '</a>').join(' ·\n  ')
    + sprachzeile + '\n</footer>\n</body></html>\n';
}

function datenschutzSeite(c) {
  const koerper = '<h2>' + c.app.h2 + '</h2>\n'
    + c.app.absaetze.map(a => '<p>' + a + '</p>').join('\n')
    + '\n<hr>\n'
    + c.vorspann.map(a => '<p>' + a + '</p>').join('\n') + '\n'
    + c.abschnitte.map(([h, t]) => '<h2>' + h + '</h2>\n<p>' + t + '</p>').join('\n') + '\n'
    + '<p class="lnote"><i>' + c.fussnote + '</i></p>\n'
    + '<hr>\n<p>' + c.bindend + '</p>';
  return huelle({ ...c, unter: c.standLabel + STAND[c.lang], koerper, sprachzeile: SPRACHZEILE(c.lang) });
}

function rechtSeite(c) {
  const sprach = '\n  <span class="langrow">'
    + [['de', '/impressum.html', 'Deutsch'], ['en', '/en/legal-notice.html', 'English'], ['hr', '/hr/pravne-informacije.html', 'Hrvatski']]
        .map(([k, u, n]) => k === c.lang ? '<b>' + n + '</b>' : '<a href="' + u + '">' + n + '</a>').join(' · ')
    + '</span>';
  return huelle({ ...c, heim: '/' + c.lang + '/', koerper: c.koerper + '\n<hr>\n<p>' + c.bindend + '</p>', sprachzeile: sprach });
}

const gebaut = [];
for (const sp of ['en', 'hr']) {
  const dsName = sp === 'en' ? 'en/privacy.html' : 'hr/privatnost.html';
  const rName = sp === 'en' ? 'en/legal-notice.html' : 'hr/pravne-informacije.html';
  fs.writeFileSync(path.join(WURZEL, dsName), datenschutzSeite(INHALT[sp]));
  fs.writeFileSync(path.join(WURZEL, rName), rechtSeite(RECHT[sp]));
  gebaut.push(dsName, rName);
}

/* ---------------------------------------------------------------- Probe: gleiche Abschnitte? */
const zahlDe = (deSeite.match(/<h2>/g) || []).length;
console.log('gebaut:');
for (const g of gebaut) {
  const t = fs.readFileSync(path.join(WURZEL, g), 'utf8');
  console.log('  ' + g.padEnd(30) + (t.length + ' Zeichen, ' + (t.match(/<h2>/g) || []).length + ' Abschnitte'));
}
console.log('\nzum Vergleich: datenschutz.html hat ' + zahlDe + ' Abschnitte');
console.log('Abschnittszahl EN = HR: '
  + ((fs.readFileSync(path.join(WURZEL, 'en/privacy.html'), 'utf8').match(/<h2>/g) || []).length
     === (fs.readFileSync(path.join(WURZEL, 'hr/privatnost.html'), 'utf8').match(/<h2>/g) || []).length));
