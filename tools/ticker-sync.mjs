// Fabian 20.09.2026, 03:3x: „das kleine Laufband und der Spielbericht müssen synchron laufen — wenn das Band 21 sagt, ist der Bericht bei 21."
// Eine Uhr fuer beide: der Bericht zaehlt die Minute (1 → 68, 250 ms je Minute), das Band zeigt dieselbe Minute und das
// juengste Ereignis (Wechsel / TOR) aus den Sprachtexten T.tk; dazwischen den „laeuft …"-Zustand. Kein eigener Zeitgeber mehr im Band.
import fs from 'fs';
const f = 'C:/Users/IF/Desktop/TB-Website/index.html';
let s = fs.readFileSync(f, 'utf8');
const stop = (m) => { console.log('STOP ' + m); process.exit(1); };
const once = (a) => { const n = s.split(a).length - 1; if (n !== 1) stop(n + '-mal: ' + a.slice(0, 60)); };

// 1) Band: keine eigene Schleife mehr — merkt sich nur die Texte und zeichnet den aktuellen Stand
const altTicker = s.slice(s.indexOf('function runTicker(T){'), s.indexOf('function renderChips(T)'));
if (!altTicker.includes('TK_T=setTimeout(step')) stop('runTicker unerwartet');
const neuTicker = "function runTicker(T){TK_TXT=T;tickerSync();}\n"
  + "  function tickerSync(){var T=TK_TXT;var tm=document.getElementById('tkTime'),lb=document.getElementById('tkLabel');if(!T||!T.tk||!tm||!lb)return;\n"
  + "    var m=(typeof min==='number')?Math.max(1,min):68;var last=null;for(var k=0;k<T.tk.length;k++){var mm=parseInt(T.tk[k][0],10);if(!isNaN(mm)&&T.tk[k][1]&&T.tk[k][2]!==undefined&&mm<=m&&T.tk[k][1]!==T.tk[T.tk.length-1][1])last=T.tk[k];}\n"
  + "    var run=T.tk[T.tk.length-1];tm.textContent=m+\"'\";\n"
  + "    if(last&&m-parseInt(last[0],10)<6){lb.textContent=last[1];lb.className=last[2]==='g'?'goal':'';}else{lb.textContent=run[1]||'';lb.className='';}}\n  ";
s = s.replace(altTicker, neuTicker);
once('var TK_I=0,TK_T=null;');
s = s.replace('var TK_I=0,TK_T=null;', 'var TK_TXT=null;');

// 2) Bericht: 250 ms je Minute, und jede Minute stoesst das Band an; Reset/Ende ebenfalls
const altTick = "function feedTick(){min++;minEl.textContent=min+\"'\";prog.style.width=(min/90*100)+'%';while(i<EV.length&&EV[i].m<=min){var e=EV[i++];if(e.t==='goal'){HOME++;scoreEl.textContent=HOME+' : 0';}addEv(e);}if(min>=68){tmo=setTimeout(feedReset,3200);}else{tmo=setTimeout(feedTick,200);}}";
once(altTick);
s = s.replace(altTick, "function feedTick(){min++;minEl.textContent=min+\"'\";prog.style.width=(min/90*100)+'%';while(i<EV.length&&EV[i].m<=min){var e=EV[i++];if(e.t==='goal'){HOME++;scoreEl.textContent=HOME+' : 0';}addEv(e);}tickerSync();if(min>=68){tmo=setTimeout(feedReset,3200);}else{tmo=setTimeout(feedTick,250);}}");
const altReset = "function feedReset(){feed.innerHTML='';HOME=0;i=0;min=0;scoreEl.textContent='0 : 0';minEl.textContent=\"1'\";prog.style.width='0';tmo=setTimeout(feedTick,700);}";
once(altReset);
s = s.replace(altReset, "function feedReset(){feed.innerHTML='';HOME=0;i=0;min=0;scoreEl.textContent='0 : 0';minEl.textContent=\"1'\";prog.style.width='0';tickerSync();tmo=setTimeout(feedTick,700);}");
const altEnde = "minEl.textContent=\"68'\";prog.style.width='76%';}";
once(altEnde);
s = s.replace(altEnde, "minEl.textContent=\"68'\";prog.style.width='76%';min=68;tickerSync();}");
// min muss vor dem ersten applyLang existieren (runTicker liest es): die var-Zeile steht spaeter im Skript, hoisting deckt die Deklaration ab
fs.writeFileSync(f, s);
console.log('Band und Bericht laufen an einer Uhr (250 ms je Minute, 1 → 68, Halt, von vorn)');
