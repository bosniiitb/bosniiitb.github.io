// „Das Herzstück“ (Abschnitt „Du stehst an der Seitenlinie“) zeigt ein echtes Spiel aus 1.2.1 (Fabian 11.10.2026, 20:5x: „der Ticker muss auch mal
// aktualisiert werden“). Vorher lief ein erfundenes Spiel (FC Paris 06 – Town London City, Verletzungen, Minute 1 → 68) mit gezeichneten
// Wappen. Jetzt: FC Klaipėda 09 – Klubi Tirana 06, Continental Cup, 1. Qualifikationsrunde, Hinspiel, 1:2, am 11.10.2026 am Emulator gespielt
// (Release-Fassung 1.2.1 c, Spielbericht im Marketing-Scratchpad m-end.png). Jedes Ereignis steht so im Spielbericht (Regel 48 Pflicht 3).
// Wappen aus dem Spielbild ausgeschnitten (img/crests/), Satzbau der Meldungen aus den Spieltexten (tk_goal = goal, tk_goal_nz = goalNachspiel,
// tk_yel = yellow; de/en/hr je aus ihrer eigenen Datei). Kopf in der Farbe des Wettbewerbs wie im Spiel (Regel 46/51: Continental Cup #5FD8E6).
// Aufruf: node tools/herzstueck-2026-10-11.mjs   danach  node tools/build-lang.mjs <JJJJ-MM-TT>
import fs from 'fs';
const f = 'C:/Users/IF/Desktop/TB-Website/index.html';
let s = fs.readFileSync(f, 'utf8');
const stop = (m) => { console.log('STOP ' + m); process.exit(1); };
const ersetze = (alt, neu) => { const n = s.split(alt).length - 1; if (n !== 1) stop(n + '-mal: ' + alt.slice(0, 70)); s = s.replace(alt, () => neu); };
const zwischen = (von, bis) => { const a = s.indexOf(von); const b = s.indexOf(bis, a); if (a < 0 || b < 0) stop('nicht gefunden: ' + von.slice(0, 50)); return s.slice(a, b + bis.length); };

// 1) Die zwei Vereine: echte Wappen statt gezeichneter Schilde
ersetze(zwischen('<div class="m-side"><svg viewBox="0 0 24 28"><defs><clipPath id="shp">', '<span class="tn">FC Paris 06</span></div>'),
  '<div class="m-side"><img src="/img/crests/klaipeda-09.png" width="34" height="40" alt=""><span class="tn">FC Klaipėda 09</span></div>');
ersetze(zwischen('<div class="m-side"><svg viewBox="0 0 24 28"><defs><clipPath id="shl">', '<span class="tn">Town London City</span></div>'),
  '<div class="m-side"><img src="/img/crests/tirana-06.png" width="34" height="40" alt=""><span class="tn">Klubi Tirana 06</span></div>');

// 2) Die Wettbewerbszeile über dem Spielstand
ersetze('<div class="m-head"><div class="m-top">', '<div class="m-head"><div class="m-comp" data-i18n="mt_comp"></div><div class="m-top">');

// 3) Aussehen: Kopf im Continental-Cup-Ton, Wappen als Bild, Gelbe Karte
ersetze('.m-head{padding:18px 16px 0;}',
  '.m-head{padding:16px 16px 0;background:linear-gradient(180deg,rgba(95,216,230,.14),rgba(95,216,230,0) 85%);} .m-comp{text-align:center;font-size:10.5px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#5FD8E6;margin-bottom:12px;}');
ersetze('.m-side svg{width:34px;height:40px;}', '.m-side img{width:34px;height:40px;object-fit:contain;}');
ersetze('.ev.injL .bar{background:var(--yellow);} .ev.injH .bar{background:var(--red);}', '.ev.yel .bar{background:var(--yellow);}');
ersetze('.ev .isub{font-weight:500;font-size:11.5px;margin-top:2px;} .ev.injL .isub{color:var(--yellow);} .ev.injH .isub{color:var(--red);}', '');

// 4) Die Ereignisse des echten Spiels und beide Torzähler
ersetze(zwischen('var EV=[', '];'), `var EV=[
    {m:16,t:'yel',side:'away',who:'B. Pepa'},
    {m:35,t:'goal',side:'home',who:'M. Spiteri'},
    {m:37,t:'goal',side:'away',who:'N. Avdyli'},
    {m:45,t:'goal',side:'away',who:'R. Dubrovskis',ml:'45+3',nz:1},
    {m:50,t:'sub',side:'home',pin:'A. Bardauskas',pout:'P. Norkus'},
    {m:60,t:'sub',side:'home',pin:'A. Klimaitis',pout:'D. Maikstas'},
    {m:64,t:'yel',side:'away',who:'E. Hysa'},
    {m:70,t:'sub',side:'home',pin:'A. Barrera',pout:'A. Nikolajevičius'},
    {m:80,t:'sub',side:'home',pin:'P. Jonaitis',pout:'E. Šakenis'},
    {m:89,t:'yel',side:'away',who:'F. Miftari'},
    {m:90,t:'sub',side:'home',pin:'H. Pečiūra',pout:'L. Šimkus'},
    {m:90,t:'yel',side:'home',who:'M. Spiteri',ml:'90+3'}
  ];`);
ersetze('var HOME=0,i=0,min=0,tmo;', 'var HOME=0,AWAY=0,i=0,min=0,tmo;');
ersetze("var bar='<div class=\"bar\"></div>',mn='<div class=\"mn\">'+e.m+\"'\"+'</div>';",
  "var bar='<div class=\"bar\"></div>',mn='<div class=\"mn\">'+(e.ml||e.m)+\"'\"+'</div>';");
ersetze("if(e.t==='goal'){d.innerHTML=bar+mn+'<div class=\"ic\">'+BALL+'</div><div class=\"tx\">'+I18N[LANG].tk_goal.replace('{who}',e.who).replace('{m}',e.m)+'</div>';}",
  "if(e.t==='goal'){d.innerHTML=bar+mn+'<div class=\"ic\">'+BALL+'</div><div class=\"tx\">'+I18N[LANG][e.nz?'tk_goal_nz':'tk_goal'].replace('{who}',e.who).replace('{m}',e.m)+'</div>';}");
ersetze("else{d.innerHTML=bar+mn+'<div class=\"ic\">'+cross(e.t==='injH'?'#E05555':'#D9A400')+'</div><div><div class=\"tx\">'+I18N[LANG][e.k]+'</div><div class=\"isub\">'+I18N[LANG][e.k+'_lab']+'</div></div>';}",
  "else{d.innerHTML=bar+mn+'<div class=\"ic\">'+CARD+'</div><div class=\"tx\">'+I18N[LANG].tk_yel.replace('{who}',e.who)+'</div>';}");
ersetze("function cross(c){return '<svg viewBox=\"0 0 24 24\"><path d=\"M9 4h6v5h5v6h-5v5H9v-5H4v-6h5V4z\" fill=\"'+c+'\"/></svg>';}",
  "var CARD='<svg viewBox=\"0 0 24 24\"><rect x=\"7\" y=\"3.5\" width=\"10\" height=\"17\" rx=\"1.6\" fill=\"#E5C33A\"/></svg>';");
const tor = "if(e.t==='goal'){if(e.side==='away')AWAY++;else HOME++;}";
ersetze("for(var k=0;k<EV.length;k++){var e=EV[k];if(e.t==='goal')HOME++;addEv(e);}scoreEl.textContent=HOME+' : 0';minEl.textContent=\"68'\";prog.style.width='76%';min=68;",
  "for(var k=0;k<EV.length;k++){var e=EV[k];" + tor + "addEv(e);}scoreEl.textContent=HOME+' : '+AWAY;minEl.textContent=\"90+3'\";prog.style.width='100%';min=90;");
ersetze("function feedReset(){feed.innerHTML='';HOME=0;i=0;", "function feedReset(){feed.innerHTML='';HOME=0;AWAY=0;i=0;");
ersetze("if(e.t==='goal'){HOME++;scoreEl.textContent=HOME+' : 0';}addEv(e);}tickerSync();if(min>=68){",
  "if(e.t==='goal'){if(e.side==='away')AWAY++;else HOME++;scoreEl.textContent=HOME+' : '+AWAY;}addEv(e);}tickerSync();if(min>=90){");
ersetze("var m=(typeof min==='number')?Math.max(1,min):68;", "var m=(typeof min==='number')?Math.max(1,min):90;");

// 5) Texte: Wettbewerbszeile, Gelbe Karte, Tor in der Nachspielzeit, das Laufband; die Verletzungs-Texte fallen weg
const zeile = s.split('\n').find((z) => z.includes('var I18N='));
const start = zeile.indexOf('var I18N=') + 9; let tiefe = 0, ende = -1;
for (let k = start; k < zeile.length; k++) { const c = zeile[k]; if (c === '{') tiefe++; else if (c === '}') { tiefe--; if (tiefe === 0) { ende = k; break; } } }
const roh = zeile.slice(start, ende + 1); const I = JSON.parse(roh);
const NEU = {
  de: { mt_comp: 'Continental Cup · 1. Qualifikationsrunde · Hinspiel', tk_yel: 'Gelbe Karte für {who}.', tk_goal_nz: 'TOOOR! {who} trifft in der Nachspielzeit!',
    tk: [["16'", 'Gelbe Karte', ''], ["35'", 'TOR! 1:0 Spiteri', 'g'], ["37'", 'TOR! 1:1 Avdyli', 'g'], ["45+3'", 'TOR! 1:2 Dubrovskis', 'g'], ["50'", 'Wechsel', ''], ["60'", 'Wechsel', ''], ["64'", 'Gelbe Karte', ''], ["70'", 'Wechsel', ''], ["80'", 'Wechsel', ''], ["89'", 'Gelbe Karte', ''], ["90'", 'läuft …', '']] },
  en: { mt_comp: 'Continental Cup · First qualifying round · First leg', tk_yel: 'Yellow card for {who}.', tk_goal_nz: 'GOAL! {who} scores in stoppage time.',
    tk: [["16'", 'Yellow card', ''], ["35'", 'GOAL! 1-0 Spiteri', 'g'], ["37'", 'GOAL! 1-1 Avdyli', 'g'], ["45+3'", 'GOAL! 1-2 Dubrovskis', 'g'], ["50'", 'Substitution', ''], ["60'", 'Substitution', ''], ["64'", 'Yellow card', ''], ["70'", 'Substitution', ''], ["80'", 'Substitution', ''], ["89'", 'Yellow card', ''], ["90'", 'live …', '']] },
  hr: { mt_comp: 'Continental Cup · 1. pretkolo · Prva utakmica', tk_yel: 'Žuti karton: {who}.', tk_goal_nz: 'GOOOL! {who} zabija u sudačkoj nadoknadi!',
    tk: [["16'", 'Žuti karton', ''], ["35'", 'GOL! 1:0 Spiteri', 'g'], ["37'", 'GOL! 1:1 Avdyli', 'g'], ["45+3'", 'GOL! 1:2 Dubrovskis', 'g'], ["50'", 'Izmjena', ''], ["60'", 'Izmjena', ''], ["64'", 'Žuti karton', ''], ["70'", 'Izmjena', ''], ["80'", 'Izmjena', ''], ["89'", 'Žuti karton', ''], ["90'", 'traje …', '']] },
};
for (const l of ['de', 'en', 'hr']) {
  for (const k of ['tk_injL', 'tk_injL_lab', 'tk_injH', 'tk_injH_lab']) { if (I[l][k] === undefined) stop(l + ' ohne ' + k); delete I[l][k]; }
  Object.assign(I[l], NEU[l]);
}
s = s.replace(roh, () => JSON.stringify(I));
if (/tk_inj|cross\(|var HOME=0,i=0/.test(s)) stop('Reste des alten Spiels');
fs.writeFileSync(f, s);
console.log('Herzstück: Klaipėda 09 – Tirana 06, 12 Ereignisse, Endstand 1 : 2, Minute 1 → 90');
