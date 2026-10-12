// privatsphaere-2026-10-12.mjs — Fabians Wort 12.10.2026, 10:4x: „Sperren, eine Stelle, Nummer raus“ (kostenlose Lösung).
// 1) Impressum und Datenschutz in DE/EN/HR für Suchmaschinen sperren (noindex). Die Seiten bleiben über den Fuß jeder Seite erreichbar,
//    wie § 5 DDG es verlangt („leicht erkennbar, unmittelbar erreichbar, ständig verfügbar“), nur die Google-Suche führt nicht mehr hin.
// 2) Die Anschrift steht nur noch im Impressum. Die Datenschutzerklärung nennt Name und E-Mail und verweist für die Anschrift aufs Impressum.
// 3) Die Telefonnummer fällt weg. Der zweite schnelle Kontaktweg neben der E-Mail (§ 5 Abs. 1 Nr. 2 DDG, EuGH C-298/07) ist ein
//    Kontaktformular im Impressum. Es benutzt denselben Weg wie „Vorschlag senden“ (Cloudflare-Dienst tb-signup → Brevo → Outlook), also
//    keinen neuen Dienst. Die Datenschutzerklärung nennt es im Absatz zu den Vorschlägen.
// 4) Impressum und Datenschutz verlassen die Sitemap (build-lang.mjs), sonst meldet Google „eingereicht, aber noindex“.
// Alles oder nichts: jede Ersetzung muss genau einmal greifen, sonst bricht das Skript ab, bevor eine Datei geschrieben wird.
// ⚠ tools/rechtstexte.mjs wird NICHT laufen gelassen: er ist seit dem 11.10.2026 nicht mehr deckungsgleich mit en/privacy.html und
//    hr/privatnost.html (Play-Games-Absätze stehen nur in den Seiten). Er bekommt eine Warnung an den Kopf.
// Aufruf: node tools/privatsphaere-2026-10-12.mjs   danach  node tools/build-lang.mjs 2026-10-12
import fs from 'fs';

const W = 'C:/Users/IF/Desktop/TB-Website/';
const dateien = {};
const lies = (f) => (dateien[f] ??= fs.readFileSync(W + f, 'utf8'));
const stop = (m) => { console.log('STOP ' + m); process.exit(1); };
function ersetze(f, alt, neu) {
  const s = lies(f);
  const n = alt instanceof RegExp ? (s.match(new RegExp(alt.source, 'g')) || []).length : s.split(alt).length - 1;
  if (n !== 1) stop(`${f}: ${n}-mal gefunden: ${String(alt).slice(0, 80)}`);
  dateien[f] = s.replace(alt, () => neu);
}

const ROBOTS_ALT = '<meta name="robots" content="index,follow">';
const ROBOTS_NEU = '<meta name="robots" content="noindex,follow">';
for (const f of ['impressum.html', 'datenschutz.html', 'en/legal-notice.html', 'en/privacy.html', 'hr/pravne-informacije.html', 'hr/privatnost.html']) {
  ersetze(f, ROBOTS_ALT, ROBOTS_NEU);
}

// ---- Kontaktformular im Impressum, je Sprache eigene Texte (Regel 48) --------------------------------------------------------------
const CSS = '.kform{display:flex;flex-direction:column;gap:10px;margin:14px 0 6px;max-width:520px}'
  + '.kform textarea,.kform input{font:inherit;color:var(--text);background:#161616;border:1px solid var(--line);border-radius:10px;padding:10px 12px}'
  + '.kform textarea:focus,.kform input:focus{outline:2px solid var(--gold);outline-offset:1px}'
  + '.kform button{font:inherit;font-weight:600;color:#0E0E0E;background:var(--gold);border:0;border-radius:999px;padding:10px 18px;align-self:flex-start;cursor:pointer}'
  + '.kform button:disabled{opacity:.6}.kmsg{min-height:1.2em;font-size:.95em}.kmsg.err{color:#E07A6A}.kok{color:var(--gold)}';

function formular(t) {
  return `<p><b>${t.kontakt}</b><br>${t.mailLabel}: trainersboardroom@outlook.com<br>${t.oder}</p>`
    + `<form id="kform" class="kform" novalidate>`
    + `<label for="ktext">${t.nachricht}</label><textarea id="ktext" rows="5" maxlength="2000"></textarea>`
    + `<label for="kmail">${t.mail}</label><input id="kmail" type="email" autocomplete="email">`
    + `<button type="submit">${t.senden}</button></form>`
    + `<p class="kmsg" id="kmsg" aria-live="polite"></p><p class="kok" id="kok" hidden>${t.danke}</p>`
    + `<script>(function(){var f=document.getElementById('kform');if(!f)return;var m=document.getElementById('kmsg'),ok=document.getElementById('kok'),`
    + `t=document.getElementById('ktext'),e=document.getElementById('kmail'),b=f.querySelector('button');`
    + `f.addEventListener('submit',function(ev){ev.preventDefault();var tx=(t.value||'').trim(),ma=(e.value||'').trim();m.className='kmsg';m.textContent='';`
    + `if(tx.length<3||!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(ma)){m.textContent=${JSON.stringify(t.fehltWas)};m.className='kmsg err';return;}b.disabled=true;`
    + `fetch('https://tb-signup.trainersboardroom.workers.dev',{method:'POST',headers:{'Content-Type':'application/json'},`
    + `body:JSON.stringify({suggestion:${JSON.stringify(t.kennung)}+tx,contact:ma})})`
    + `.then(function(r){return r.json().catch(function(){return{ok:r.ok};});})`
    + `.then(function(res){b.disabled=false;if(res&&res.ok){f.hidden=true;ok.hidden=false;}else{m.textContent=${JSON.stringify(t.fehler)};m.className='kmsg err';}})`
    + `.catch(function(){b.disabled=false;m.textContent=${JSON.stringify(t.fehler)};m.className='kmsg err';});});})();</script>`;
}
const T = {
  de: { kontakt: 'Kontakt', mailLabel: 'E-Mail', oder: 'oder über dieses Formular:', nachricht: 'Deine Nachricht', mail: 'Deine E-Mail für die Antwort',
    senden: 'Nachricht senden', danke: 'Danke, deine Nachricht ist angekommen.', fehltWas: 'Bitte schreib eine Nachricht und gib deine E-Mail-Adresse an.',
    fehler: 'Das hat nicht geklappt. Schreib mir bitte an trainersboardroom@outlook.com.', kennung: '[Kontakt Impressum DE] ' },
  en: { kontakt: 'Contact', mailLabel: 'E-mail', oder: 'or use this form:', nachricht: 'Your message', mail: 'Your e-mail for the reply',
    senden: 'Send message', danke: 'Thanks, your message has arrived.', fehltWas: 'Please write a message and add your e-mail address.',
    fehler: 'That didn’t work. Please write to trainersboardroom@outlook.com.', kennung: '[Contact legal notice EN] ' },
  hr: { kontakt: 'Kontakt', mailLabel: 'E-pošta', oder: 'ili putem ovog obrasca:', nachricht: 'Tvoja poruka', mail: 'Tvoja e-pošta za odgovor',
    senden: 'Pošalji poruku', danke: 'Hvala, poruka je stigla.', fehltWas: 'Upiši poruku i svoju adresu e-pošte.',
    fehler: 'Nešto nije u redu. Piši mi na trainersboardroom@outlook.com.', kennung: '[Kontakt pravne informacije HR] ' },
};
ersetze('impressum.html', /<p><b>Kontakt<\/b><br>Telefon: [^<]+<br>E-Mail: trainersboardroom@outlook\.com<\/p>/, formular(T.de));
ersetze('en/legal-notice.html', /<p><b>Contact<\/b><br>Phone: [^<]+<br>E-mail: trainersboardroom@outlook\.com<\/p>/, formular(T.en));
ersetze('hr/pravne-informacije.html', /<p><b>Kontakt<\/b><br>Telefon: [^<]+<br>E-pošta: trainersboardroom@outlook\.com<\/p>/, formular(T.hr));
for (const f of ['impressum.html', 'en/legal-notice.html', 'hr/pravne-informacije.html']) ersetze(f, '</style></head>', CSS + '</style></head>');

// ---- Datenschutz: Anschrift nur noch im Impressum, kein Telefon, das Kontaktformular im Absatz zu den Vorschlägen --------------------
ersetze('datenschutz.html', /Verantwortlicher im Sinne der Datenschutz-Grundverordnung ist: Fabian Bošnjak, Lozanite Studio, [^<]*?Website: www\.trainersboardroom\.com\./,
  'Verantwortlicher im Sinne der Datenschutz-Grundverordnung ist Fabian Bošnjak (Lozanite Studio). Die ladungsfähige Anschrift steht im <a href="/impressum.html">Impressum</a>. E-Mail: trainersboardroom@outlook.com. Website: www.trainersboardroom.com.');
ersetze('en/privacy.html', /The controller for the purposes of the General Data Protection Regulation is: Fabian Bošnjak, Lozanite Studio, [^<]*?Website: www\.trainersboardroom\.com\./,
  'The controller for the purposes of the General Data Protection Regulation is Fabian Bošnjak (Lozanite Studio). The postal address is in the <a href="/en/legal-notice.html">legal notice</a>. E-mail: trainersboardroom@outlook.com. Website: www.trainersboardroom.com.');
ersetze('hr/privatnost.html', /Voditelj obrade u smislu Opće uredbe o zaštiti podataka jest: Fabian Bošnjak, Lozanite Studio, [^<]*?Stranica: www\.trainersboardroom\.com\./,
  'Voditelj obrade u smislu Opće uredbe o zaštiti podataka jest Fabian Bošnjak (Lozanite Studio). Poštanska adresa navedena je u <a href="/hr/pravne-informacije.html">pravnim informacijama</a>. E-pošta: trainersboardroom@outlook.com. Stranica: www.trainersboardroom.com.');

ersetze('datenschutz.html', 'beispielsweise telefonisch, an uns', 'beispielsweise per Post, an uns');
ersetze('en/privacy.html', 'for example by telephone', 'for example by post');
ersetze('hr/privatnost.html', 'primjerice telefonom.', 'primjerice poštom.');

ersetze('datenschutz.html', '<b>Vorschläge.</b> Wer über das Formular „Vorschlag senden“ eine Idee schickt, übermittelt den eingegebenen Text und, falls angegeben, eine E-Mail-Adresse für Rückfragen.',
  '<b>Vorschläge und Nachrichten.</b> Wer über das Formular „Vorschlag senden“ eine Idee oder über das Kontaktformular im Impressum eine Nachricht schickt, übermittelt den eingegebenen Text und eine E-Mail-Adresse für die Antwort (beim Vorschlag freiwillig).');
ersetze('datenschutz.html', 'um den Vorschlag zu lesen', 'um den Vorschlag oder die Nachricht zu lesen');
ersetze('datenschutz.html', 'Vorschläge zum Spiel entgegenzunehmen und zu beantworten', 'Vorschläge und Nachrichten entgegenzunehmen und zu beantworten');
ersetze('en/privacy.html', '<b>Suggestions.</b> If you send us an idea through the “Send idea” form, we receive the text you entered and, if you add one, an e-mail address for follow-up questions.',
  '<b>Suggestions and messages.</b> If you send us an idea through the “Send idea” form or a message through the contact form in the legal notice, we receive the text you entered and an e-mail address for our reply (optional for ideas).');
ersetze('en/privacy.html', 'to read your suggestion', 'to read your suggestion or message');
ersetze('en/privacy.html', 'receiving and answering suggestions about the game', 'receiving and answering suggestions and messages');
ersetze('hr/privatnost.html', '<b>Prijedlozi.</b> Pošalješ li nam ideju putem obrasca „Pošalji ideju”, primamo upisani tekst i, ako je navedeš, adresu e-pošte za eventualna pitanja.',
  '<b>Prijedlozi i poruke.</b> Pošalješ li nam ideju putem obrasca „Pošalji ideju” ili poruku putem obrasca za kontakt u pravnim informacijama, primamo upisani tekst i adresu e-pošte za odgovor (kod ideje nije obavezna).');
ersetze('hr/privatnost.html', 'kako bismo pročitali prijedlog', 'kako bismo pročitali prijedlog ili poruku');
ersetze('hr/privatnost.html', 'da primamo prijedloge o igri i odgovaramo na njih', 'da primamo prijedloge i poruke te odgovaramo na njih');

ersetze('datenschutz.html', 'Stand: 11. Oktober 2026', 'Stand: 12. Oktober 2026');
ersetze('en/privacy.html', 'Last updated: 11 October 2026', 'Last updated: 12 October 2026');
ersetze('hr/privatnost.html', 'Ažurirano: 11. listopada 2026.', 'Ažurirano: 12. listopada 2026.');

// ---- Sitemap: Impressum und Datenschutz raus ---------------------------------------------------------------------------------------
ersetze('tools/build-lang.mjs', ", ['/impressum.html', '0.2'], ['/datenschutz.html', '0.2']];", '];  // Impressum/Datenschutz bewusst nicht: noindex seit 12.10.2026 (privatsphaere-2026-10-12.mjs)');

// ---- Warnung an den Erzeuger, damit niemand ihn blind laufen lässt -----------------------------------------------------------------
ersetze('tools/rechtstexte.mjs', ' * Aufruf:  node tools/rechtstexte.mjs',
  ' * ⚠⚠ NICHT BLIND LAUFEN LASSEN (12.10.2026): en/privacy.html, hr/privatnost.html, en/legal-notice.html und hr/pravne-informacije.html\n'
  + ' *    wurden am 11.10. (datenschutz-2026-10-11.mjs: Play Games) und 12.10. (privatsphaere-2026-10-12.mjs: noindex, Anschrift nur im Impressum,\n'
  + ' *    Kontaktformular statt Telefon) DIREKT geändert. Dieser Erzeuger kennt das nicht und würde es überschreiben. Erst nachziehen.\n'
  + ' * Aufruf:  node tools/rechtstexte.mjs');

// Prüfung VOR dem Schreiben: keine Telefonnummer mehr auf den sechs Seiten, die Straße nur noch in den drei Impressen.
const SECHS = ['impressum.html', 'datenschutz.html', 'en/legal-notice.html', 'en/privacy.html', 'hr/pravne-informacije.html', 'hr/privatnost.html'];
const mitTelefon = SECHS.filter((f) => /\+49 ?1\d/.test(lies(f)));
const mitStrasseImDatenschutz = ['datenschutz.html', 'en/privacy.html', 'hr/privatnost.html'].filter((f) => /Von-Einem/.test(lies(f)));
if (mitTelefon.length || mitStrasseImDatenschutz.length) stop('noch Telefon in: ' + mitTelefon.join(', ') + ' · noch Straße in: ' + mitStrasseImDatenschutz.join(', '));
for (const [f, s] of Object.entries(dateien)) fs.writeFileSync(W + f, s);
console.log('Privatsphäre: 6 Seiten noindex, Anschrift nur im Impressum, Telefon raus, Kontaktformular DE/EN/HR, Sitemap ohne Rechtsseiten.');
