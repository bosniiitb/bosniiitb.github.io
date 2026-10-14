// Baut die Ratgeber-Seiten aus seiten.mjs (Fabians Klicks 14.10.2026 nach dem Reddit-Faden: Seiten, die echte Google-Fragen beantworten):
//   /fussballmanager-offline/ · /en/offline-football-manager/ · /hr/football-manager-offline/ usw. — je Seite und Sprache eine Datei
// und den Ratgeber-Block der Sitemap. Rahmen (Kopfleiste, Fuß, Grund-CSS) aus tools/seitenrahmen.mjs, wie das Tagebuch.
// Aufruf (im Webseiten-Ordner): node tools/ratgeber/bauen.mjs JJJJ-MM-TT   — das Datum kommt von tools/release/zeit.mjs (Regel 24).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SEITEN, GRUENDER_ENDE } from './seiten.mjs';
import { SPRACHEN, esc, seite, schreiber, sitemapBlock, sitemapEintrag, playLink } from '../seitenrahmen.mjs';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const datum = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(datum || '')) { console.error('Datum fehlt: node tools/ratgeber/bauen.mjs JJJJ-MM-TT'); process.exit(1); }
const gruenderNoch = datum < GRUENDER_ENDE;

const CSS = `.lead{max-width:62ch;font-size:19px;color:var(--text)}
.frage{background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:18px;display:grid;gap:6px}
.frage h2{margin:0;font-size:22px;color:var(--gold)}.frage p{margin:0;max-width:66ch}
.schluss{display:grid;gap:14px;justify-items:start}.schluss p{margin:0;max-width:66ch;color:var(--leise)}
.knopf{display:inline-block;text-decoration:none;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#141209;background:var(--gold);border-radius:999px;padding:11px 22px}`;

const schreibe = schreiber(WURZEL, fs, path);
const geschrieben = [];
for (const r of SEITEN) {
  for (const s of SPRACHEN) {
    const fragen = r.bloecke.filter((b) => !b.nurBisGruender || gruenderNoch).map((b) => `<section class="frage"><h2>${esc(b.h[s])}</h2><p>${esc(b.p[s])}${b.bisGruender && gruenderNoch ? ' ' + esc(b.bisGruender[s]) : ''}</p></section>`).join('');
    const inhalt = `<header><div class="k">Trainer's Boardroom · ${esc(r.kicker[s])}</div><h1>${esc(r.h1[s])}</h1><p class="lead">${esc(r.lead[s])}</p></header>`
      + fragen
      + `<section class="schluss"><p>${esc(r.hinweis[s])}</p><a class="knopf" href="${playLink('ratgeber-' + r.id)}" target="_blank" rel="noopener">${esc(r.knopf[s])}</a><p>${esc(r.sprachen[s])}</p></section>`;
    geschrieben.push(schreibe(`${r.pfad[s].slice(1)}index.html`, seite(s, {
      titel: `${r.titel[s]} · Trainer's Boardroom`, beschreibung: r.beschreibung[s], pfad: r.pfad[s], alternates: r.pfad,
      inhalt, css: CSS, medium: 'ratgeber-' + r.id,
    })));
  }
}
const block = ['  <!-- ratgeber:anfang (tools/ratgeber/bauen.mjs) -->', ...SEITEN.map((r) => sitemapEintrag(r.pfad, '0.7', datum)), '  <!-- ratgeber:ende -->'].join('\n');
const sitemapPfad = path.join(WURZEL, 'sitemap.xml');
fs.writeFileSync(sitemapPfad, sitemapBlock(fs.readFileSync(sitemapPfad, 'utf8'), 'ratgeber', block), 'utf8');
geschrieben.push('sitemap.xml');
console.log(geschrieben.join('\n') + `\nGründer-Satz: ${gruenderNoch ? 'drin (vor ' + GRUENDER_ENDE + ')' : 'raus'}`);
