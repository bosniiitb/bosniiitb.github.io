// Der Live-Feed im Abschnitt „Du stehst an der Seitenlinie" lief seit dem Upload vom 06.08.2026 als Standbild (Minute 68, fest).
// Fabian 20.09.2026, 03:0x: „interaktiver Liveticker … hängt nun konstant auf Minute 68". Hier kommt die Bewegung vom Juli zurück
// (Minute zählt hoch, Ereignisse erscheinen in ihrer Minute, kurzer Halt, dann von vorn) — mit Reduzierte-Bewegung-Fall (Endstand).
import fs from 'fs';
const f = 'C:/Users/IF/Desktop/TB-Website/index.html';
let s = fs.readFileSync(f, 'utf8');
const alt = "(function(){for(var k=0;k<EV.length;k++){var e=EV[k];if(e.t==='goal')HOME++;addEv(e);}scoreEl.textContent=HOME+' : 0';minEl.textContent=\"68'\";prog.style.width='76%';})();";
const neu = "function feedEnde(){feed.innerHTML='';HOME=0;for(var k=0;k<EV.length;k++){var e=EV[k];if(e.t==='goal')HOME++;addEv(e);}scoreEl.textContent=HOME+' : 0';minEl.textContent=\"68'\";prog.style.width='76%';}"
  + " function feedReset(){feed.innerHTML='';HOME=0;i=0;min=0;scoreEl.textContent='0 : 0';minEl.textContent=\"1'\";prog.style.width='0';tmo=setTimeout(feedTick,700);}"
  + " function feedTick(){min++;minEl.textContent=min+\"'\";prog.style.width=(min/90*100)+'%';while(i<EV.length&&EV[i].m<=min){var e=EV[i++];if(e.t==='goal'){HOME++;scoreEl.textContent=HOME+' : 0';}addEv(e);}if(min>=68){tmo=setTimeout(feedReset,3200);}else{tmo=setTimeout(feedTick,200);}}"
  + " if(matchMedia('(prefers-reduced-motion: reduce)').matches){feedEnde();}else{feedReset();}";
const n = s.split(alt).length - 1;
if (n !== 1) { console.log('STOP: alter Block ' + n + '-mal'); process.exit(1); }
s = s.replace(alt, neu);
fs.writeFileSync(f, s);
console.log('Feed lebt wieder: Minute 1 → 68 in ~14 s, 3,2 s Halt, dann von vorn; reduzierte Bewegung = Endstand');
