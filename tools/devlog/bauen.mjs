// Baut das Entwickler-Tagebuch aus eintraege.mjs (E-821, Goldene Regel 55):
//   /devlog/index.html · /en/devlog/index.html · /hr/devlog/index.html  — alle Einträge, neuester oben (fester Link aus dem Spiel)
//   /devlog/<slug>/index.html usw.                                     — je Version eine eigene Seite zum Teilen
// Aufruf (im Webseiten-Ordner): node tools/devlog/bauen.mjs
// Der Rahmen (Kopfleiste, Fuß, Grund-CSS) steht seit 14.10.2026 in tools/seitenrahmen.mjs, den auch der Ratgeber nutzt.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { EINTRAEGE, FRUEHER } from './eintraege.mjs';
import { SPRACHEN, esc, seite, schreiber, sitemapBlock, sitemapEintrag, playLink } from '../seitenrahmen.mjs';

const WURZEL = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

const L = {
  de: {
    ordner: '/devlog/', titel: 'Entwickler-Tagebuch', kicker: 'Entwickler-Tagebuch',
    h1: 'Was neu ist, und wie es entstand',
    intro: 'Hier schreibe ich zu jeder Version auf, was neu ist, was besser wurde und was beim Bauen schiefging. Mit Zahlen, aber ohne die Rechnung dahinter. Fabian',
    beschreibung: 'Das Entwickler-Tagebuch von Trainer\'s Boardroom: je Version, was neu ist, was besser wurde und was beim Bauen schiefging.',
    blick: 'Auf einen Blick', zahlen: 'In Zahlen', hindernis: 'Was beim Bauen schiefging', alle: 'Alle Änderungen in',
    neu: 'Neu', besser: 'Besser', repariert: 'Repariert', frueher: 'Frühere Versionen',
    alleEintraege: 'Alle Einträge im Tagebuch', teilen: 'Eigene Seite zu',
    bitteFrage: 'Du spielst schon?', bitteLink: 'Bewerte es ehrlich im Play Store',
  },
  en: {
    ordner: '/en/devlog/', titel: 'Dev diary', kicker: 'Dev diary',
    h1: "What's new, and how it was made",
    intro: "For every version I write down what's new, what got better and what went wrong while building it. With numbers, but not the maths behind them. Fabian",
    beschreibung: "The Trainer's Boardroom dev diary: for every version, what's new, what got better and what went wrong while building it.",
    blick: 'At a glance', zahlen: 'In numbers', hindernis: 'What went wrong while building it', alle: 'All changes in',
    neu: 'New', besser: 'Better', repariert: 'Fixed', frueher: 'Earlier versions',
    alleEintraege: 'All diary entries', teilen: 'Own page for',
    bitteFrage: 'Already playing?', bitteLink: 'Leave an honest review on Google Play',
  },
  hr: {
    ordner: '/hr/devlog/', titel: 'Dnevnik razvoja', kicker: 'Dnevnik razvoja',
    h1: 'Što je novo i kako je nastalo',
    intro: 'Ovdje za svaku verziju zapisujem što je novo, što je bolje i što je pošlo po zlu dok sam je radio. S brojkama, ali bez računa iza njih. Fabian',
    beschreibung: 'Dnevnik razvoja igre Trainer\'s Boardroom: za svaku verziju što je novo, što je bolje i što je pošlo po zlu.',
    blick: 'Ukratko', zahlen: 'U brojkama', hindernis: 'Što je pošlo po zlu', alle: 'Sve promjene u verziji',
    neu: 'Novo', besser: 'Bolje', repariert: 'Popravljeno', frueher: 'Ranije verzije',
    alleEintraege: 'Svi zapisi u dnevniku', teilen: 'Zasebna stranica za',
    bitteFrage: 'Već igraš?', bitteLink: 'Ostavi iskrenu ocjenu na Google Playu',
  },
};

// Eigenes CSS des Tagebuchs; Grund und Fuss kommen aus dem Rahmen
const CSS = `.eintrag{background:var(--surface);border:1px solid var(--line);border-radius:18px;overflow:hidden;scroll-margin-top:80px}
.kopf{padding:22px 18px 18px;background:radial-gradient(ellipse 80% 120% at 85% 0%,rgba(201,168,76,.2),transparent 60%),var(--surface2);display:grid;gap:6px}
.kopf .v{font-size:clamp(36px,8vw,54px);font-weight:700;line-height:1;color:var(--gold)}.kopf h2{margin:0;font-size:24px}.kopf p{margin:0;color:var(--leise);max-width:64ch}
.koerper{padding:18px;display:grid;gap:24px}ul{margin:0;padding-left:20px;display:grid;gap:6px}.blick li::marker{color:var(--gold)}
.zahlen{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(210px,100%),1fr));gap:10px;margin-top:8px}
.zahl{background:var(--surface2);border:1px solid var(--line);border-radius:12px;padding:14px;display:grid;gap:6px;align-content:start}
.zahl .wert{font-size:36px;font-weight:700;color:var(--gold);line-height:1;font-variant-numeric:tabular-nums}.zahl .t{font-size:15px;color:var(--leise)}
.hindernis{border-left:3px solid var(--gold);padding-left:14px;display:grid;gap:8px}.hindernis h3{margin:0;font-size:20px}.hindernis p{margin:0;max-width:66ch}
details{background:var(--surface2);border:1px solid var(--line);border-radius:12px;padding:12px 14px}summary{cursor:pointer;font-weight:700;color:var(--gold)}
.gruppe{margin-top:12px}.gruppe b{display:block;font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:var(--leise);margin-bottom:6px}
.fuss-eintrag{display:flex;flex-wrap:wrap;gap:8px 16px;font-size:15px}
.bitte{margin:0;font-size:16px}.bitte a{color:var(--gold)}
.frueher{display:flex;flex-wrap:wrap;gap:8px}.frueher span{font-size:14px;color:var(--leise);border:1px solid var(--line);border-radius:999px;padding:4px 10px}`;

const SKRIPT = `(function(){var ruhig=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(ruhig||!('IntersectionObserver' in window))return;
function zeige(el,w){var k=+(el.dataset.komma||0);el.textContent=w.toFixed(k).replace('.',el.dataset.dez||'.')+(el.dataset.nach||'');}
document.querySelectorAll('[data-gruppe]').forEach(function(g){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.disconnect();
var ws=g.querySelectorAll('[data-ziel]');ws.forEach(function(w){zeige(w,0);});setTimeout(function(){var t0=null;function f(ts){if(!t0)t0=ts;var p=Math.min(1,(ts-t0)/900);p=1-Math.pow(1-p,3);
ws.forEach(function(w){zeige(w,+w.dataset.ziel*p);});if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);},150);});},{threshold:.4});io.observe(g);});})();`;

const zahlText = (z, s) => (z.komma ? z.wert.toFixed(z.komma).replace('.', s === 'en' ? '.' : ',') : String(z.wert)) + (z.nach ? z.nach[s] : '');

function eintragHtml(e, s, eigeneSeite) {
  const t = L[s];
  const blick = e.blick[s].map((x) => `<li>${esc(x)}</li>`).join('');
  const zahlen = (e.zahlen || []).map((z) => `<div class="zahl"><span class="wert" data-ziel="${z.wert}"${z.komma ? ` data-komma="${z.komma}" data-dez="${s === 'en' ? '.' : ','}"` : ''}${z.nach ? ` data-nach="${esc(z.nach[s])}"` : ''}>${esc(zahlText(z, s))}</span><span class="t">${esc(z.text[s])}</span></div>`).join('');
  const a = e.aenderungen[s];
  const gruppe = (titel, liste) => (liste && liste.length ? `<div class="gruppe"><b>${esc(titel)}</b><ul>${liste.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>` : '');
  // Bitte um eine ehrliche Bewertung am Ende jedes Eintrags (Fabians Klick 16.10.2026: „offen bitten“, nie mit Belohnung);
  // dieselben Worte wie unter dem Play-Knopf der Startseite (tools/bewerten-2026-10-13.mjs), damit die Sache überall gleich heißt.
  const bitte = `<p class="bitte">${esc(t.bitteFrage)} <a href="${playLink('devlog-bewerten')}" target="_blank" rel="noopener">${esc(t.bitteLink)}</a></p>`;
  const fuss = eigeneSeite
    ? `${bitte}<div class="fuss-eintrag"><a href="${t.ordner}">${esc(t.alleEintraege)}</a></div>`
    : `${bitte}<div class="fuss-eintrag"><a href="${t.ordner}${e.slug}/">${esc(t.teilen)} ${esc(e.version)}</a></div>`;
  return `<article class="eintrag" id="v${e.slug}">
<div class="kopf"><div class="k">${esc(t.kicker)} · ${esc(e.datum[s])}</div><div class="v">${esc(e.version)}</div><h2>${esc(e.name[s])}</h2><p>${esc(e.kurz[s])}</p></div>
<div class="koerper">
<section><div class="k">${esc(t.blick)}</div><ul class="blick" style="margin-top:8px">${blick}</ul></section>
${zahlen ? `<section><div class="k">${esc(t.zahlen)}</div><div class="zahlen" data-gruppe>${zahlen}</div></section>` : ''}
${e.hindernis ? `<section class="hindernis"><div class="k">${esc(t.hindernis)}</div><h3>${esc(e.hindernis.titel[s])}</h3><p>${esc(e.hindernis.text[s])}</p></section>` : ''}
<details><summary>${esc(t.alle)} ${esc(e.version)}</summary>${gruppe(t.neu, a.neu)}${gruppe(t.besser, a.besser)}${gruppe(t.repariert, a.repariert)}</details>
${fuss}
</div></article>`;
}

const schreibe = schreiber(WURZEL, fs, path);
const geschrieben = [];
for (const s of SPRACHEN) {
  const t = L[s];
  const alle = Object.fromEntries(SPRACHEN.map((x) => [x, L[x].ordner]));
  const kopf = `<header><div class="k">Trainer's Boardroom · ${esc(t.kicker)}</div><h1>${esc(t.h1)}</h1><p class="intro">${esc(t.intro)}</p></header>`;
  const frueher = `<section><div class="k">${esc(t.frueher)}</div><div class="frueher" style="margin-top:10px">${FRUEHER[s].map((x) => `<span>${esc(x)}</span>`).join('')}</div></section>`;
  geschrieben.push(schreibe(`${t.ordner.slice(1)}index.html`, seite(s, {
    titel: `${t.titel} · Trainer's Boardroom`, beschreibung: t.beschreibung, pfad: t.ordner, alternates: alle,
    inhalt: kopf + EINTRAEGE.map((e) => eintragHtml(e, s, false)).join('') + frueher, css: CSS, skript: SKRIPT, medium: 'devlog',
  })));
  for (const e of EINTRAEGE) {
    const alt = Object.fromEntries(SPRACHEN.map((x) => [x, `${L[x].ordner}${e.slug}/`]));
    geschrieben.push(schreibe(`${t.ordner.slice(1)}${e.slug}/index.html`, seite(s, {
      titel: `${e.version} · ${e.name[s]} · ${t.titel}`, beschreibung: e.kurz[s], pfad: `${t.ordner}${e.slug}/`, alternates: alt,
      inhalt: eintragHtml(e, s, true), css: CSS, skript: SKRIPT, medium: 'devlog',
    })));
  }
}
// Sitemap: der Block zwischen den Tagebuch-Marken wird jedes Mal neu geschrieben (Übersichten + eine Seite je Version, mit Sprachweiche)
const heute = new Date().toISOString().slice(0, 10);
const eintrag = (pfade, prio) => sitemapEintrag(pfade, prio, heute);
const block = ['  <!-- tagebuch:anfang (tools/devlog/bauen.mjs) -->',
  eintrag(Object.fromEntries(SPRACHEN.map((x) => [x, L[x].ordner])), '0.8'),
  ...EINTRAEGE.map((e) => eintrag(Object.fromEntries(SPRACHEN.map((x) => [x, `${L[x].ordner}${e.slug}/`])), '0.6')),
  '  <!-- tagebuch:ende -->'].join('\n');
const sitemapPfad = path.join(WURZEL, 'sitemap.xml');
fs.writeFileSync(sitemapPfad, sitemapBlock(fs.readFileSync(sitemapPfad, 'utf8'), 'tagebuch', block), 'utf8');
geschrieben.push('sitemap.xml');
console.log(geschrieben.join('\n'));
