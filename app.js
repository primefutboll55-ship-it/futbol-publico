const matches=[{"id": "milan-inter-2024", "home": "Inter", "away": "AC Milan", "score": "1 - 2", "date": "22/09/2024", "comp": "Serie A", "kind": "YouTube oficial", "url": "https://www.youtube.com/watch?v=oVf3ommWcIs", "video": "oVf3ommWcIs"}, {"id": "inter-milan-2025", "home": "Inter", "away": "AC Milan", "score": "2 - 3", "date": "06/01/2025", "comp": "Supercoppa Italiana", "kind": "YouTube oficial", "url": "https://www.youtube.com/watch?v=0tppLP0cXhU", "video": "0tppLP0cXhU"}, {"id": "milan-inter-2025", "home": "AC Milan", "away": "Inter", "score": "1 - 1", "date": "02/04/2025", "comp": "Coppa Italia", "kind": "YouTube oficial", "url": "https://www.youtube.com/watch?v=XkLpopwAusI", "video": "XkLpopwAusI"}, {"id": "arsenal-city-2026", "home": "Arsenal", "away": "Manchester City", "score": "3 - 0", "date": "16/08/2026", "comp": "Community Shield", "kind": "Fuente oficial Arsenal", "url": "https://www.arsenal.com/video/full-match-arsenal-v-manchester-city-aPpCC0e90EDe"}, {"id": "arsenal-chelsea-2026", "home": "Arsenal", "away": "Chelsea", "score": "2 - 1", "date": "06/09/2026", "comp": "Premier League", "kind": "Fuente oficial Arsenal", "url": "https://www.arsenal.com/video/full-match-arsenal-v-chelsea-aLvek0Y2qEbr"}, {"id": "ipswich-arsenal-2026", "home": "Ipswich Town", "away": "Arsenal", "score": "2 - 4", "date": "15/09/2026", "comp": "EFL Cup", "kind": "Fuente oficial Arsenal", "url": "https://www.arsenal.com/video/full-match-ipswich-town-v-arsenal-aNaVC1K2gcbH"}];
const grid=document.getElementById('grid'),q=document.getElementById('q'),video=document.getElementById('video'),ptitle=document.getElementById('ptitle');
let filter='all';
function render(){
 let s=q.value.toLowerCase();
 let a=matches.filter(m=>(filter==='all'||m.comp.includes(filter)||m.home.includes(filter)||m.away.includes(filter))&&JSON.stringify(m).toLowerCase().includes(s));
 grid.innerHTML=a.map(m=>`<article class="card"><div class="visual">⚽</div><div class="info"><div class="comp">${m.comp} · PARTIDO COMPLETO</div><div class="teams">${m.home}<br>vs<br>${m.away}</div><div class="score">${m.score}</div><div class="date">${m.date}</div><div class="source">${m.kind}</div><button class="watch" onclick="play('${m.id}')">▶ Ver partido completo</button></div></article>`).join('');
}
function play(id){
 const m=matches.find(x=>x.id===id); if(!m)return;
 ptitle.textContent=m.home+' '+m.score+' '+m.away;
 if(m.video){
   video.innerHTML=`<iframe src="https://www.youtube.com/embed/${m.video}?rel=0" title="${m.home} vs ${m.away}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
 } else {
   video.innerHTML=`<div class="official"><p>Este partido utiliza el reproductor oficial del club.</p><a href="${m.url}" target="_blank">Abrir partido completo en la fuente oficial →</a></div>`;
 }
 document.getElementById('player').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('#filters button').forEach(b=>b.onclick=()=>{document.querySelector('#filters .active').classList.remove('active');b.classList.add('active');filter=b.dataset.f;render()});
q.oninput=render; render();
