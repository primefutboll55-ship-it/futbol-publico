const search=document.getElementById("search");
const cards=[...document.querySelectorAll(".card")];
search?.addEventListener("input",()=>{const q=search.value.toLowerCase().trim();cards.forEach(c=>c.style.display=(!q||c.dataset.search.includes(q))?"":"none")});
const topbar=document.querySelector(".topbar");
window.addEventListener("scroll",()=>{topbar.style.background=scrollY>40?"#090909f2":"linear-gradient(180deg,#050505f5,transparent)"});
