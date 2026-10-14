// Der gemeinsame Rahmen aller Unterseiten (Entwickler-Tagebuch, Ratgeber): Kopfleiste mit Sprachweiche, Fuß mit Store-Knopf
// und Rechtslinks, Grund-CSS. Jede Unterseite bringt nur ihren Inhalt und ihr eigenes CSS mit (14.10.2026, aus tools/devlog/bauen.mjs
// herausgelöst, damit Tagebuch und Ratgeber nicht zwei Fassungen desselben Rahmens tragen).
// Keine fremden Verbindungen: Schrift von der eigenen Seite, keine Skripte von außen.
import { SEITEN as RATGEBER } from './ratgeber/seiten.mjs';

export const SEITE = 'https://trainersboardroom.com';
export const SPRACHEN = ['de', 'en', 'hr'];
export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Der Store-Link; `medium` sagt in der Play-Statistik, von welcher Unterseite jemand kam. */
export const playLink = (medium) => `https://play.google.com/store/apps/details?id=com.bosniii.trainersboardroom&referrer=utm_source%3Dwebsite%26utm_medium%3D${medium}`;

/** Was der Rahmen je Sprache braucht (Startseite, Store-Knopf, Rechtslinks). */
export const RAHMEN = {
  de: { home: '/', home_t: 'Zur Startseite', badge: 'de', badgeAlt: 'Jetzt bei Google Play',
    recht: [['/impressum.html', 'Impressum'], ['/datenschutz.html', 'Datenschutz'], ['/presse.html', 'Presse']] },
  en: { home: '/en/', home_t: 'Back to the homepage', badge: 'en', badgeAlt: 'Get it on Google Play',
    recht: [['/en/legal-notice.html', 'Legal notice'], ['/en/privacy.html', 'Privacy'], ['/presse.html', 'Press']] },
  hr: { home: '/hr/', home_t: 'Na početnu stranicu', badge: 'hr', badgeAlt: 'Preuzmi na Google Playu',
    recht: [['/hr/pravne-informacije.html', 'Impresum'], ['/hr/privatnost.html', 'Privatnost'], ['/presse.html', 'Mediji']] },
};

/** Links zu den Ratgeber-Seiten im Fuss jeder Unterseite (Adresse und Linktext je Sprache stehen in ratgeber/seiten.mjs). */
const ratgeberLinks = (s) => RATGEBER.map((r) => `<a href="${r.pfad[s]}">${esc(r.link[s])}</a>`).join('');

/** Grund-CSS, oben: Farben, Schrift, Kopfleiste, Inhaltsbreite, Kicker, Überschrift. */
export const CSS_KOPF = `:root{--bg:#0E0E0E;--surface:#171717;--surface2:#1C1C1C;--line:#2A2A2A;--gold:#C9A84C;--gold-weich:rgba(201,168,76,.14);--text:#F2F2F2;--leise:rgba(242,242,242,.66);--blass:rgba(242,242,242,.45);color-scheme:dark}
*{box-sizing:border-box}html{scroll-padding-top:80px}body{margin:0;background:var(--bg);color:var(--text);font-family:Rajdhani,'Segoe UI',system-ui,sans-serif;font-weight:500;font-size:17px;line-height:1.5}
a{color:var(--gold)}.bar{position:sticky;top:0;z-index:5;background:rgba(14,14,14,.86);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.bar-in{max-width:860px;margin:0 auto;padding:12px 16px;display:flex;justify-content:space-between;align-items:center;gap:12px}
.logo{color:var(--text);text-decoration:none;font-weight:700;letter-spacing:1.4px;font-size:15px}.logo b{color:var(--gold)}
.lang{display:flex;gap:6px}.lang a{text-decoration:none;font-weight:700;font-size:14px;color:var(--leise);padding:4px 8px;border:1px solid var(--line);border-radius:8px}.lang a[aria-current]{color:var(--gold);border-color:rgba(201,168,76,.5)}
main{max-width:860px;margin:0 auto;padding:28px 16px 64px;display:grid;gap:30px}
.k{font-size:13px;letter-spacing:.24em;text-transform:uppercase;color:var(--leise);font-weight:600}
h1{margin:6px 0 10px;font-size:clamp(30px,6vw,44px);line-height:1.05;color:var(--gold);text-wrap:balance}h2,h3{text-wrap:balance}
.intro{max-width:64ch;color:var(--leise)}`;

/** Grund-CSS, unten: Fußzeile und Store-Knopf. */
export const CSS_FUSS = `footer{max-width:860px;margin:0 auto;padding:0 16px 48px;display:grid;gap:14px;color:var(--blass);font-size:14px}footer .links{display:flex;flex-wrap:wrap;gap:6px 16px}
.badge img{height:56px;width:auto}`;

/** Eine ganze Seite: Kopf mit Sprachweiche (hreflang), Inhalt, Fuß. `css` ist das eigene CSS der Unterseite, `skript` optional. */
export function seite(s, { titel, beschreibung, pfad, inhalt, alternates, css, skript, medium }) {
  const t = RAHMEN[s];
  const hreflang = SPRACHEN.map((x) => `<link rel="alternate" hreflang="${x}" href="${SEITE}${alternates[x]}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${SEITE}${alternates.de}">`;
  const sprachen = SPRACHEN.map((x) => `<a href="${alternates[x]}"${x === s ? ' aria-current="page"' : ''} lang="${x}">${x.toUpperCase()}</a>`).join('');
  return `<!doctype html><html lang="${s}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titel)}</title><meta name="description" content="${esc(beschreibung)}"><link rel="canonical" href="${SEITE}${pfad}">${hreflang}
<meta property="og:type" content="website"><meta property="og:url" content="${SEITE}${pfad}"><meta property="og:title" content="${esc(titel)}"><meta property="og:description" content="${esc(beschreibung)}"><meta property="og:image" content="${SEITE}/og.png">
<link href="/fonts/rajdhani.css" rel="stylesheet"><style>${CSS_KOPF}
${css}
${CSS_FUSS}</style></head><body>
<div class="bar"><div class="bar-in"><a class="logo" href="${t.home}">TRAINER'S <b>BOARDROOM</b></a><nav class="lang" aria-label="Sprache · Language · Jezik">${sprachen}</nav></div></div>
<main>${inhalt}</main>
<footer><a class="badge" href="${playLink(medium)}" target="_blank" rel="noopener"><img src="/img/badges/${t.badge}_badge_web_generic.png" alt="${esc(t.badgeAlt)}" height="56"></a>
<div class="links"><a href="${t.home}">${esc(t.home_t)}</a>${ratgeberLinks(s)}${t.recht.map(([h, n]) => `<a href="${h}">${esc(n)}</a>`).join('')}</div><div>© 2026 Trainer's Boardroom · Lozanite Studio</div></footer>
${skript ? `<script>${skript}</script>` : ''}</body></html>
`;
}

/** Schreibt eine Datei relativ zum Webseiten-Ordner und legt fehlende Ordner an. */
export function schreiber(wurzel, fs, path) {
  return (rel, text) => { const ziel = path.join(wurzel, rel); fs.mkdirSync(path.dirname(ziel), { recursive: true }); fs.writeFileSync(ziel, text, 'utf8'); return rel; };
}

/** Ersetzt in der Sitemap den Block zwischen `<!-- name:anfang …` und `<!-- name:ende -->` (oder hängt ihn an). */
export function sitemapBlock(sitemap, name, block) {
  const re = new RegExp(`  <!-- ${name}:anfang[\\s\\S]*?<!-- ${name}:ende -->`);
  return re.test(sitemap) ? sitemap.replace(re, block) : sitemap.replace('</urlset>', `${block}\n</urlset>`);
}

/** Sitemap-Zeilen einer Seite in drei Sprachen, mit Sprachweiche. */
export function sitemapEintrag(pfade, prio, datum) {
  return SPRACHEN.map((s) => `  <url><loc>${SEITE}${pfade[s]}</loc><lastmod>${datum}</lastmod><priority>${prio}</priority>` +
    SPRACHEN.map((x) => `<xhtml:link rel="alternate" hreflang="${x}" href="${SEITE}${pfade[x]}"/>`).join('') +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SEITE}${pfade.de}"/></url>`).join('\n');
}
