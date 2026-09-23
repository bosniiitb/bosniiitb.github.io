// Drei Sprachseiten aus einer: index.html (DE, Quelle der Wahrheit) -> en/index.html + hr/index.html,
// dazu hreflang/canonical/Titel/Beschreibung in allen dreien und die Sitemap.
// Warum: Google las bisher nur die deutsche Seite (Texte wurden erst im Browser getauscht) —
// Search Console 20.09.2026: 37 Anzeigen, 5 Klicks in 3 Monaten, kein einziger Suchbegriff ausser dem Namen.
// Aufruf: node tools/build-lang.mjs   (im Webseiten-Repo). Idempotent: mehrfacher Lauf aendert nichts mehr.
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const SRC = path.join(ROOT, 'index.html');
const SITE = 'https://trainersboardroom.com';
const PATHS = { de: '/', en: '/en/', hr: '/hr/' };

// Titel und Beschreibung je Sprache — Fabians Go 20.09.2026, 01:0x (Suchwoerter: offline · football manager · Android · no ads)
const META = {
  de: {
    title: "Trainer's Boardroom – Fußballmanager für Android, offline",
    desc: "Der Fußballmanager fürs Handy, mit einer Hand spielbar: 100 Ligen, 51 Länder, 1.459 Vereine, echtes Live-Spiel. Kostenlos, komplett offline, ohne Werbung, kein Pay-to-win. Version 1.1.3 im Play Store.",
    locale: 'de_DE',
  },
  en: {
    title: "Trainer's Boardroom – Offline Football Manager for Android",
    desc: "A one-handed football manager for Android: 100 leagues, 51 countries, 1,459 clubs, live matches you can step into. Free, fully offline, no ads, no pay-to-win. Version 1.1.3 on Google Play.",
    locale: 'en_GB',
  },
  hr: {
    title: "Trainer's Boardroom – nogometni menadžer za Android, offline",
    desc: "Nogometni menadžer za mobitel, igra se jednom rukom: 100 liga, 51 država, 1.459 klubova, utakmica uživo. Besplatno, potpuno offline, bez reklama, bez pay-to-wina. Verzija 1.1.3 na Google Playu.",
    locale: 'hr_HR',
  },
};

const stop = (m) => { console.log('STOP ' + m); process.exit(1); };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

let src = fs.readFileSync(SRC, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';
if (eol !== '\n') stop('index.html ist CRLF — nicht erwartet');

// ── 1) I18N-Zeile finden und ausfuehren (nie neu schreiben: sie traegt IMG/CAP/LANG/STORE_STATUS/Links) ──
const lines = src.split('\n');
const iLine = lines.findIndex(l => l.trim().startsWith('var I18N='));
if (iLine < 0) stop('I18N-Zeile fehlt');
const runLine = (line) => new Function(line.trim() + ' return {I18N:I18N, IMG:IMG, CAP:CAP, LANG:LANG, STORE_STATUS:STORE_STATUS};')();
const R0 = runLine(lines[iLine]);
if (R0.IMG.length !== 10 || R0.CAP.length !== 10) stop('IMG/CAP-Liste beschaedigt');

// Neue Titel in die I18N-Objekte (document.title wird im Browser aus T.title gesetzt — sonst ueberschreibt das Skript den Titel)
function setI18nTitle(line, lang, title) {
  const blockStart = line.indexOf('"' + lang + '":{');
  if (blockStart < 0) stop('Sprachblock ' + lang + ' fehlt');
  const k = line.indexOf('"title":"', blockStart);
  if (k < 0) stop('title-Schluessel ' + lang + ' fehlt');
  const vStart = k + '"title":"'.length;
  const vEnd = line.indexOf('"', vStart);
  return line.slice(0, vStart) + title.replace(/"/g, '\\"') + line.slice(vEnd);
}
let i18nLine = lines[iLine];
for (const lang of ['de', 'en', 'hr']) i18nLine = setI18nTitle(i18nLine, lang, META[lang].title);
const R = runLine(i18nLine);
for (const lang of ['de', 'en', 'hr']) if (R.I18N[lang].title !== META[lang].title) stop('Titel ' + lang + ' nicht angekommen');
if (R.IMG.length !== 10 || R.STORE_STATUS !== R0.STORE_STATUS) stop('I18N-Schwanz beschaedigt');
lines[iLine] = i18nLine;
src = lines.join('\n');

// ── 2) Head: Sprache, Titel, Beschreibung, og:*, canonical, hreflang (idempotent ueber Marker) ──
function buildHead(html, lang) {
  const M = META[lang];
  html = html.replace(/^<html lang="[a-z]+">/m, '<html lang="' + lang + '">');
  html = html.replace(/<title>[^<]*<\/title>/, '<title>' + esc(M.title) + '</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + esc(M.desc) + '">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + esc(M.title) + '">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + esc(M.desc) + '">');
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + SITE + PATHS[lang] + '">');
  // Block mit canonical + hreflang + og:locale — alten Block (Marker) entfernen, neuen setzen.
  // Dazu jede aeltere Einzelzeile dieser Art (ein frueherer Versuch trug ?lang=…-Adressen und ein zweites canonical).
  html = html.replace(/<!-- lang:start -->[\s\S]*?<!-- lang:end -->\n?/, '');
  html = html.replace(/<link rel="canonical"[^>]*>\n?/g, '').replace(/<link rel="alternate" hreflang="[^"]*"[^>]*>\n?/g, '').replace(/<meta property="og:locale"[^>]*>\n?/g, '');
  const block = '<!-- lang:start -->\n'
    + '<link rel="canonical" href="' + SITE + PATHS[lang] + '">\n'
    + ['de', 'en', 'hr'].map(l => '<link rel="alternate" hreflang="' + l + '" href="' + SITE + PATHS[l] + '">').join('\n') + '\n'
    + '<link rel="alternate" hreflang="x-default" href="' + SITE + '/">\n'
    + '<meta property="og:locale" content="' + M.locale + '">\n'
    + '<!-- lang:end -->\n';
  const anchor = '<meta property="og:type" content="website">';
  if (!html.includes(anchor)) stop('og:type-Anker fehlt');
  html = html.replace(anchor, block + anchor);
  // Strukturdaten (schema.org VideoGame): Beschreibung und Adresse in der Sprache der Seite
  const ld = /(<script type="application\/ld\+json">\{[^<]*?"description": ")[^"]*(")/;
  if (!ld.test(html)) stop('JSON-LD-Beschreibung fehlt');
  html = html.replace(ld, (all, a, b) => a + M.desc.replace(/"/g, '\\"') + b);
  html = html.replace(/("@type": "VideoGame", "name": "Trainer's Boardroom", "url": ")[^"]*(")/, (all, a, b) => a + SITE + PATHS[lang] + b);
  return html;
}

// ── 3) Texte fest einschreiben: jedes [data-i18n] bekommt den Text seiner Sprache ──
function findClose(html, from, tag) {
  // sucht das passende </tag> ab `from`; gleiche Tags dazwischen werden mitgezaehlt (Tiefe)
  const openRe = new RegExp('<' + tag + '(?=[\\s>/])', 'g'); const closeStr = '</' + tag + '>';
  let depth = 1, pos = from;
  for (;;) {
    const c = html.indexOf(closeStr, pos); if (c < 0) return -1;
    openRe.lastIndex = pos; const o = openRe.exec(html);
    if (o && o.index < c) { depth++; pos = o.index + 1; continue; }
    depth--;
    if (depth === 0) return c;
    pos = c + closeStr.length;
  }
}
const VOID = /^(input|img|br|hr|meta|link)$/;
function renderTexts(html, lang) {
  const T = R.I18N[lang];
  const live = R.STORE_STATUS === 'live';
  const LIVE_OV = { status: 'status_live', status2: 'status2_live', a1: 'a1_live', q2: 'q2_live', a2: 'a2_live', play_now: 'play_now_live' };
  const tagRe = /<([a-z0-9]+)([^>]*?)\sdata-i18n="([a-z0-9_]+)"([^>]*)>/g;
  let out = '', last = 0, m, n = 0, miss = [];
  while ((m = tagRe.exec(html))) {
    const [full, tag, , key] = m;
    let text;
    if (key.startsWith('feat')) { const p = key.slice(4).split('_'); text = T.feats[+p[0]][+p[1]]; }
    else if (live && LIVE_OV[key] && T[LIVE_OV[key]] !== undefined) text = T[LIVE_OV[key]];
    else text = T[key];
    if (text === undefined) { miss.push(key); continue; }
    if (VOID.test(tag)) { miss.push(key + ' (void ' + tag + ')'); continue; }
    const start = m.index + full.length;
    const c = findClose(html, start, tag);
    if (c < 0) stop('kein schliessendes </' + tag + '> fuer ' + key);
    out += html.slice(last, start) + text;
    last = c; tagRe.lastIndex = c; n++;
  }
  out += html.slice(last);
  // Platzhalter
  let ph = 0;
  out = out.replace(/(<[a-z]+[^>]*?)\sdata-i18n-ph="([a-z0-9_]+)"([^>]*)>/g, (all, a, key, b) => {
    const t = T[key]; if (t === undefined) { miss.push('ph:' + key); return all; }
    ph++;
    const attrs = (a + ' ' + b.trim()).replace(/\splaceholder="[^"]*"/, '');
    return attrs.replace(/\s+$/, '') + ' data-i18n-ph="' + key + '" placeholder="' + esc(t) + '">';
  });
  // Statistik-Kacheln und Chips (werden im Browser ohnehin neu gezeichnet; hier fuer den Crawler)
  out = out.replace(/(<div class="stats reveal" id="stats">)[\s\S]*?(<\/div>\s*\n)/, (all, a, b) => a
    + T.stats.map(s => '<div class="stat"><span class="v" data-final="' + esc(s[0]) + '">' + esc(s[0]) + '</span><span class="l">' + esc(s[1]) + '</span></div>').join('') + '</div>\n');
  out = out.replace(/(<div class="eh-chips reveal" id="ehChips">)[\s\S]*?(<\/div>)/, (all, a) => a + (T.eh_chips || []).map(c => '<span>' + esc(c) + '</span>').join('') + '</div>');
  return { html: out, n, ph, miss };
}

// ── 4) Skript-Anpassungen: feste Sprache je Seite, Umschalter fuehrt auf die Seite ──
function patchScript(html, lang) {
  // a) LANG im Schwanz der I18N-Zeile
  const lns = html.split('\n'); const i = lns.findIndex(l => l.trim().startsWith('var I18N='));
  if (!/, LANG='[a-z]+', /.test(lns[i])) stop('LANG-Deklaration fehlt');
  lns[i] = lns[i].replace(/, LANG='[a-z]+', /, ", LANG='" + lang + "', ");
  html = lns.join('\n');
  // b) keine Umschaltung nach Geraetesprache mehr — jede Adresse hat ihre Sprache (hreflang fuehrt Google, der Umschalter den Menschen)
  html = html.replace(/\n\s*var nl=\(navigator\.language\|\|'de'\)\.toLowerCase\(\);\n\s*if\(nl\.indexOf\('hr'\)===0\)LANG='hr'; else if\(nl\.indexOf\('en'\)===0\)LANG='en';\n/, '\n');
  if (/navigator\.language\|\|'de'/.test(html)) stop('Geraetesprachen-Zeile nicht entfernt');
  // c) Umschalter: Seite wechseln statt Texte tauschen
  const oldClick = "b.addEventListener('click',function(){applyLang(b.getAttribute('data-lang'));});";
  const newClick = "b.addEventListener('click',function(){var l=b.getAttribute('data-lang');if(l===LANG)return;location.href=({de:'/',en:'/en/',hr:'/hr/'})[l]||'/';});";
  if (html.includes(oldClick)) html = html.replace(oldClick, newClick);
  else if (!html.includes(newClick)) stop('Umschalter-Zeile nicht gefunden');
  // d) relative Verweise in Unterordnern
  if (lang !== 'de') html = html.replace(/src="preview\.mp4"/g, 'src="/preview.mp4"');
  return html;
}

// ── Bauen ──
const report = [];
for (const lang of ['de', 'en', 'hr']) {
  let html = buildHead(src, lang);
  const r = renderTexts(html, lang);
  html = patchScript(r.html, lang);
  const check = runLine(html.split('\n').find(l => l.trim().startsWith('var I18N=')));
  if (check.LANG !== lang || check.IMG.length !== 10) stop('Endpruefung ' + lang);
  const outPath = lang === 'de' ? SRC : path.join(ROOT, lang, 'index.html');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  report.push(lang + ': ' + r.n + ' Texte, ' + r.ph + ' Platzhalter' + (r.miss.length ? ', FEHLT ' + r.miss.join(' ') : '') + ' — ' + Math.round(html.length / 1024) + ' KB → ' + path.relative(ROOT, outPath));
}

// ── Sitemap ──
const smPath = path.join(ROOT, 'sitemap.xml');
const today = process.argv[2] || stop('Datum fehlt: node tools/build-lang.mjs JJJJ-MM-TT (Regel 24)');
const urls = [['/', '1.0'], ['/en/', '1.0'], ['/hr/', '1.0'], ['/presse.html', '0.5'], ['/impressum.html', '0.2'], ['/datenschutz.html', '0.2']];
const sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
  + urls.map(([u, p]) => '  <url><loc>' + SITE + u + '</loc><lastmod>' + today + '</lastmod><priority>' + p + '</priority>'
    + (['/', '/en/', '/hr/'].includes(u) ? ['de', 'en', 'hr'].map(l => '<xhtml:link rel="alternate" hreflang="' + l + '" href="' + SITE + PATHS[l] + '"/>').join('') + '<xhtml:link rel="alternate" hreflang="x-default" href="' + SITE + '/"/>' : '')
    + '</url>').join('\n') + '\n</urlset>\n';
fs.writeFileSync(smPath, sm);
report.push('sitemap.xml: ' + urls.length + ' Adressen, lastmod ' + today);
console.log(report.join('\n'));
