// Startseite: Entwickler-Tagebuch einhängen (Fabians Klick 13.10.2026: Menü oben + Hinweis auf der Startseite, E-821 / Regel 55).
// Menüpunkt im Burger-Menü, Link im Fuß, kleiner Hinweis auf den neuesten Eintrag vor den FAQ. Je Datei in ihrer Sprache, Wörterbuch für alle drei.
// Ein Durchlauf; zählt jede Einfügung und bricht ab, wenn eine Stelle fehlt oder schon eingefügt ist. Aufruf: node tools/tagebuch-2026-10-13.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { EINTRAEGE } from './devlog/eintraege.mjs';

const W = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const neu = EINTRAEGE[0];
const T = {
  de: { pfad: '/devlog/', m: 'Tagebuch', l: 'Tagebuch', link: 'Zum Entwickler-Tagebuch' },
  en: { pfad: '/en/devlog/', m: 'Dev diary', l: 'Dev diary', link: 'Read the dev diary' },
  hr: { pfad: '/hr/devlog/', m: 'Dnevnik razvoja', l: 'Dnevnik razvoja', link: 'Otvori dnevnik razvoja' },
};
const DATEIEN = { de: 'index.html', en: 'en/index.html', hr: 'hr/index.html' };
const json = (s) => JSON.stringify(s).slice(1, -1);
const html = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const CSS = '.tb-teaser{padding-top:0}.tb-karte{display:grid;gap:8px;max-width:720px;margin:0 auto;padding:20px 22px;border:1px solid rgba(201,168,76,.45);border-radius:16px;background:var(--surface);text-decoration:none;color:var(--text)}.tb-karte:hover{border-color:var(--gold)}.tb-v{font-size:22px;font-weight:700;color:var(--gold)}.tb-p{opacity:.8;line-height:1.5}.tb-l{font-weight:700;color:var(--gold)}';

function einmal(s, alt, neuText, name) {
  const n = s.split(alt).length - 1;
  if (n !== 1) throw new Error(`${name}: ${n}× gefunden statt 1×`);
  return s.replace(alt, neuText);
}

for (const [lang, datei] of Object.entries(DATEIEN)) {
  let s = fs.readFileSync(path.join(W, datei), 'utf8');
  if (s.includes('id="tagebuch"')) throw new Error(`${datei}: schon eingefügt`);
  const t = T[lang];
  // 1 · Menü: vor „FAQ“
  s = einmal(s, '<a href="#faq" data-close data-i18n="m_faq">', `<a href="${t.pfad}" data-i18n="m_devlog">${html(t.m)}</a><a href="#faq" data-close data-i18n="m_faq">`, 'Menü');
  // 2 · Fuß: vor „Presse“
  s = einmal(s, '<a href="/presse.html" data-i18n="l_press">', `<a href="${t.pfad}" data-i18n="l_devlog">${html(t.l)}</a><a href="/presse.html" data-i18n="l_press">`, 'Fuß');
  // 3 · Hinweis auf den neuesten Eintrag, vor den FAQ
  const teaser = `<section id="tagebuch" class="tb-teaser"><div class="wrap"><div class="kicker reveal" data-i18n="dl_k">x</div>` +
    `<a class="tb-karte reveal" href="${t.pfad}"><span class="tb-v" data-i18n="dl_neu_t">${html(`${neu.version} · ${neu.name[lang]}`)}</span>` +
    `<span class="tb-p" data-i18n="dl_neu_p">${html(neu.kurz[lang])}</span><span class="tb-l" data-i18n="dl_link">${html(t.link)}</span></a></div></section>\n  `;
  s = einmal(s, '<section id="faq">', teaser + '<section id="faq">', 'Hinweis');
  // 4 · Wörterbuch: alle drei Sprachen, hinter „dl_empty“
  for (const L of ['de', 'en', 'hr']) {
    const m = s.match(new RegExp(`"dl_empty":"[^"]*"`, 'g'));
    if (!m || m.length !== 3) throw new Error(`${datei}: dl_empty ${m ? m.length : 0}× statt 3×`);
  }
  let k = 0;
  s = s.replace(/"dl_empty":"[^"]*"/g, (treffer) => {
    const L = ['de', 'en', 'hr'][k++]; const x = T[L];
    return treffer + `,"m_devlog":"${json(x.m)}","l_devlog":"${json(x.l)}","dl_neu_t":"${json(`${neu.version} · ${neu.name[L]}`)}","dl_neu_p":"${json(neu.kurz[L])}","dl_link":"${json(x.link)}"`;
  });
  // 5 · Stil: vor das Ende des ersten Stil-Blocks im Kopf (weitere „</style>“ stehen später in Skripten)
  const ende = s.indexOf('</style>');
  if (ende < 0 || ende > s.indexOf('</head>')) throw new Error(`${datei}: kein Stil-Block im Kopf`);
  s = s.slice(0, ende) + CSS + s.slice(ende);
  fs.writeFileSync(path.join(W, datei), s, 'utf8');
  console.log(`${datei}: Menü, Fuß, Hinweis, Wörterbuch, Stil`);
}
