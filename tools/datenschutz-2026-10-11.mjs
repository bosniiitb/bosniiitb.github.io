// Datenschutz zu 1.2.1: Cloud-Speicher der Karriere und Erfolge ueber Google Play Games (Entwurf 11.10.2026, 17:0x, Marketing-Sitzung).
// Grund: die drei Seiten sagen seit dem 10.10.2026 „Ihre Karriere gehoert nicht dazu, sie bleibt auf Ihrem Geraet“. Mit dem Cloud-Speicher
// (V171, E-768/E-771) stimmt das ab 1.2.1 nicht mehr. Fakten aus dem Code gelesen: src/application/cloud/cloudSicherung.ts (nach jedem Lauf,
// hoechstens alle 15 Minuten, nur im WLAN ausser mit Schalter), PreferencesRepository CLOUD_STANDARD (an: true), i18n cloud.* (Knopfnamen).
// Gezaehlt je Sprache: 5 Stellen (Stand-Datum, Einleitung, Spielstand-Satz, Absatz Google Play Games, Loeschung).
// Pruefen ohne zu schreiben:  node tools/datenschutz-2026-10-11.mjs
// Schreiben (erst am Release-Tag, auf Fabians Wort):  node tools/datenschutz-2026-10-11.mjs --schreiben <Stand-Datum DE> <EN> <HR>
//   z. B. --schreiben "12. Oktober 2026" "12 October 2026" "12. listopada 2026."  (Datum nach Regel 24 vorher nachsehen)
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const schreiben = process.argv[2] === '--schreiben';
const [datumDe, datumEn, datumHr] = process.argv.slice(3);
if (schreiben && !(datumDe && datumEn && datumHr)) { console.log('STOP drei Datumsangaben fehlen'); process.exit(1); }

const SEITEN = {
  'datenschutz.html': [
    ['<p class="upd">Stand: 10. Oktober 2026</p>', `<p class="upd">Stand: ${datumDe}</p>`],
    ['Einzige Ausnahme ab Version 1.2.1:\ndie Anmeldung bei Google Play Games, wenn Sie dort ein Profil haben (siehe unten).',
     'Einzige Ausnahme ab Version 1.2.1:\nGoogle Play Games, wenn Sie dort ein Profil haben (siehe unten).'],
    ['liegt <b>ausschließlich auf\n      Ihrem Gerät</b> in einer lokalen Datenbank. Er verlässt Ihr Gerät nicht.</li>',
     'liegt <b>auf\n      Ihrem Gerät</b> in einer lokalen Datenbank. Eine Kopie verlässt Ihr Gerät nur, wenn Sie den Cloud-Speicher von\n      Google Play Games nutzen (siehe unten); sie liegt dann in Ihrem Google-Konto, nicht bei uns.</li>'],
    [/<p><b>Google Play Games \(ab Version 1\.2\.1\):<\/b>[\s\S]*?\(Erhalt der zugesagten Freischaltung\)\.<\/p>/,
     `<p><b>Google Play Games (ab Version 1.2.1):</b> Ab Version 1.2.1 nutzt die App die Dienste von Google Play Games (Google Ireland
Limited) für drei Dinge: den Gründer-Vermerk, die Erfolge und den Cloud-Speicher Ihrer Karriere. Haben Sie ein Play-Games-Profil und
lassen Sie sich von Play Games automatisch bei Spielen anmelden, meldet sich die App beim Start im Hintergrund an. Ohne Profil passiert
nichts; die App bietet in ihren Einstellungen nur einen Knopf an, mit dem Sie sich freiwillig anmelden können.</p>
<p><b>Gründer-Vermerk:</b> Wer die App vor dem 1. November 2026 installiert hat, soll das Spiel auch nach einer Neuinstallation ohne
Datensicherung oder auf einem neuen Gerät frei behalten. Dafür legt die App in Ihrem Play-Games-Konto einen gespeicherten Spielstand mit
der Bezeichnung „Trainer's Boardroom" ab, der nur diese Angabe enthält.</p>
<p><b>Erfolge:</b> Erreichen Sie im Spiel bestimmte Ziele (etwa den ersten Sieg oder eine Meisterschaft), meldet die App den Erfolg an
Play Games, wo er in Ihrem Profil erscheint.</p>
<p><b>Cloud-Speicher:</b> Ist er eingeschaltet (Voreinstellung; abschaltbar unter Einstellungen → Cloud-Speicher), sichert die App Ihre
Karriere nach dem Spielen in Ihrem Play-Games-Konto, höchstens alle 15 Minuten und nur im WLAN, sofern Sie mobile Daten nicht
ausdrücklich erlauben. Gesichert wird der vollständige Spielstand dieser Karriere (Verein, Kader, Finanzen, Ergebnisse), als
Beschreibung dazu Vereinsname, Saison und Datum im Spiel. Nach einer Neuinstallation oder auf einem neuen Gerät fragt die App, ob Sie
die Karriere zurückholen möchten.</p>
<p>Die App liest weder Ihren Play-Games-Namen noch Ihr Profilbild noch Ihre E-Mail-Adresse. Wir selbst erhalten keine dieser Daten;
sie liegen in Ihrem Google-Konto. Google verarbeitet bei der Nutzung von Play Games nach eigenen Angaben Ihre Spieler-Identität (Name
und Bild Ihres Profils), die gespeicherten Spielstände, Ihre Erfolge sowie Analyse- und Diagnosedaten zur Stabilität der Dienste; dafür
gilt die Datenschutzerklärung von Google. Gespeicherte Spiele, Erfolge und alle übrigen Play-Games-Daten können Sie in Ihrem
Play-Games-Profil oder in Ihrem Google-Konto ansehen und löschen, eine gesicherte Karriere auch im Spiel beim Löschen eines Spielstands
(„Auch in der Cloud"). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DS-GVO (Erhalt der zugesagten Freischaltung und Bereitstellung der
Funktionen, die Sie nutzen).</p>`],
    ['<p><b>Löschung:</b> Da Ihre Daten nur auf Ihrem Gerät liegen, können Sie sie jederzeit selbst\nentfernen — über die App-Einstellungen Ihres Geräts, über den Zurücksetzen-Knopf im Spiel\n(Einstellungen → Spiel zurücksetzen) oder indem Sie die App deinstallieren.</p>',
     '<p><b>Löschung:</b> Da Ihre Daten auf Ihrem Gerät liegen, können Sie sie jederzeit selbst\nentfernen — über die App-Einstellungen Ihres Geräts, über den Zurücksetzen-Knopf im Spiel\n(Einstellungen → Spiel zurücksetzen) oder indem Sie die App deinstallieren. Eine Sicherung im Cloud-Speicher\nlöschen Sie im Spiel beim Löschen eines Spielstands („Auch in der Cloud") oder in Ihrem Play-Games-Profil bzw. Google-Konto.</p>'],
  ],
  'en/privacy.html': [
    ['<p class="upd">Last updated: 10 October 2026</p>', `<p class="upd">Last updated: ${datumEn}</p>`],
    ['The one exception, from version 1.2.1, is signing in to Google Play Games if you have a profile there (see below).',
     'The one exception, from version 1.2.1, is Google Play Games if you have a profile there (see below).'],
    ['lives only on your device in a local database. It never leaves your device.',
     'lives on your device in a local database. A copy only leaves your device if you use the cloud save in Google Play Games (see below); it then sits in your Google Account, not with us.'],
    [/<p><b>Google Play Games \(from version 1\.2\.1\):<\/b>[\s\S]*?\(keeping the unlock we promised you\)\.<\/p>/,
     `<p><b>Google Play Games (from version 1.2.1):</b> From version 1.2.1 the app uses Google Play Games services (Google Ireland Limited) for three things: the founder note, achievements and the cloud save for your career. If you have a Play Games profile and let Play Games sign you in to games automatically, the app signs in quietly when it starts. If you don’t have a profile, nothing happens; the app only offers a button in its settings so you can sign in if you choose to.</p>
<p><b>Founder note:</b> If you installed the app before 1 November 2026, the game should stay free for you even after a reinstall without a backup, or on a new phone. For this the app keeps one saved game called “Trainer’s Boardroom” in your Play Games account, holding nothing but that fact.</p>
<p><b>Achievements:</b> When you reach certain goals in the game (your first win or a league title, for example), the app reports the achievement to Play Games, where it shows in your profile.</p>
<p><b>Cloud save:</b> While it is switched on (the default; you can turn it off under Settings → Cloud save), the app backs up your career to your Play Games account after you play, at most every 15 minutes and only over Wi-Fi unless you allow mobile data. What is backed up is the complete save of that career (club, squad, finances, results), described by the club name, season and in-game date. After a reinstall or on a new device, the app asks whether you want to restore it.</p>
<p>The app does not read your Play Games name, your profile picture or your email address. We receive none of this data; it stays in your Google Account. According to Google, Play Games itself processes your gamer identity (your profile name and picture), saved games, achievements, and analytics and diagnostics data used to keep its services stable; Google’s privacy policy applies to that. You can view and delete saved games, achievements and all your other Play Games data in your Play Games profile or your Google Account, and a backed-up career also in the game when you delete a save (“Cloud copy too”). Legal basis: Art. 6 (1) (b) GDPR (keeping the unlock we promised you and providing the features you use).</p>`],
    ['or by uninstalling the app.</p>',
     'or by uninstalling the app. A career backed up to the cloud can be deleted in the game when you delete a save (“Cloud copy too”), or in your Play Games profile or Google Account.</p>'],
  ],
  'hr/privatnost.html': [
    ['<p class="upd">Ažurirano: 10. listopada 2026.</p>', `<p class="upd">Ažurirano: ${datumHr}</p>`],
    ['Jedina iznimka, od verzije 1.2.1, jest prijava na Google Play igre ako ondje imaš profil (vidi niže).',
     'Jedina iznimka, od verzije 1.2.1, jesu Google Play igre ako ondje imaš profil (vidi niže).'],
    ['nalazi se isključivo na tvom uređaju u lokalnoj bazi podataka. Ne napušta tvoj uređaj.',
     'nalazi se na tvom uređaju u lokalnoj bazi podataka. Kopija napušta uređaj samo ako koristiš spremanje u oblaku preko Google Play igara (vidi niže); tada je na tvom Google računu, a ne kod nas.'],
    [/<p><b>Google Play igre \(od verzije 1\.2\.1\):<\/b>[\s\S]*?\(zadržavanje obećanog otključavanja\)\.<\/p>/,
     `<p><b>Google Play igre (od verzije 1.2.1):</b> Od verzije 1.2.1 aplikacija koristi usluge Google Play igre (Google Play Games; Google Ireland Limited) za tri stvari: oznaku osnivača, postignuća i spremanje karijere u oblaku. Ako imaš profil na Play igrama i dopuštaš da te Play igre automatski prijavljuju u igre, aplikacija se pri pokretanju prijavljuje u pozadini. Bez profila ne događa se ništa; aplikacija u postavkama nudi samo gumb kojim se možeš prijaviti ako to želiš.</p>
<p><b>Oznaka osnivača:</b> Ako je aplikacija kod tebe instalirana prije 1. studenoga 2026., igra ti treba ostati besplatna i nakon ponovne instalacije bez sigurnosne kopije ili na novom mobitelu. Zato aplikacija na tvom računu Play igara čuva jednu spremljenu igru pod nazivom „Trainer’s Boardroom“ u kojoj piše samo to.</p>
<p><b>Postignuća:</b> Kad u igri ostvariš određeni cilj (primjerice prvu pobjedu ili naslov prvaka), aplikacija javlja postignuće Play igrama i ono se pojavljuje u tvom profilu.</p>
<p><b>Spremanje u oblaku:</b> Dok je uključeno (zadana postavka; isključuje se u Postavke → Spremanje u oblaku), aplikacija nakon igranja sprema karijeru na tvoj račun Play igara, najviše svakih 15 minuta i samo preko Wi-Fi mreže, osim ako dopustiš mobilne podatke. Sprema se cijela spremljena igra te karijere (klub, sastav, financije, rezultati), a kao opis naziv kluba, sezona i datum u igri. Nakon ponovne instalacije ili na novom uređaju aplikacija te pita želiš li karijeru preuzeti.</p>
<p>Aplikacija ne čita tvoje ime na Play igrama, profilnu sliku ni adresu e-pošte. Mi ne primamo nijedan od tih podataka; oni ostaju na tvom Google računu. Prema Googleovim navodima, same Play igre obrađuju tvoj identitet igrača (ime i sliku profila), spremljene igre, postignuća te analitičke i dijagnostičke podatke za stabilnost usluge; za to vrijedi Googleova politika privatnosti. Spremljene igre, postignuća i sve ostale podatke Play igara možeš pregledati i izbrisati u svom profilu Play igara ili na svom Google računu, a karijeru spremljenu u oblaku i u igri pri brisanju spremljene igre („I u oblaku“). Pravna osnova: čl. 6. st. 1. toč. (b) Opće uredbe (zadržavanje obećanog otključavanja i pružanje funkcija koje koristiš).</p>`],
    ['ili deinstalacijom aplikacije.</p>',
     'ili deinstalacijom aplikacije. Karijeru spremljenu u oblaku brišeš u igri pri brisanju spremljene igre („I u oblaku“) ili u svom profilu Play igara odnosno na Google računu.</p>'],
  ],
};

let fehler = 0;
const fertig = [];
for (const [datei, ersatz] of Object.entries(SEITEN)) {
  const pfad = path.join(ROOT, datei);
  let s = fs.readFileSync(pfad, 'utf8');
  for (const [alt, neu] of ersatz) {
    const treffer = typeof alt === 'string' ? s.split(alt).length - 1 : (s.match(new RegExp(alt.source, 'g')) || []).length;
    if (treffer !== 1) { console.log(`✗ ${datei}: ${treffer} Treffer fuer ${String(alt).slice(0, 70)}`); fehler++; continue; }
    s = s.replace(alt, () => neu);
  }
  fertig.push([pfad, s, datei, ersatz.length]);
}
if (fehler) { console.log(`STOP ${fehler} Stelle(n) nicht eindeutig, nichts geschrieben`); process.exit(1); }
for (const [pfad, s, datei, n] of fertig) { if (schreiben) fs.writeFileSync(pfad, s); console.log(`${schreiben ? 'geschrieben' : 'geprueft'}: ${datei} (${n} Stellen)`); }
