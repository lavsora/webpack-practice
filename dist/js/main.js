(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function l(r){let c=(r-o)/n;c>1&&(c=1);const s=e(c);t(s),c<1&&requestAnimationFrame(l)}))},t=e=>Math.pow(e,2),n=e=>function(t){return t<.5?e(2*t)/2:(2-e(2*(1-t)))/2};(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let l;const r=function(e){return String(e).padStart(2,"0")},c=()=>{let e=(()=>{let e=(new Date("23 june 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=r(e.hours),n.textContent=r(e.minutes),o.textContent=r(e.seconds),e.timeRemaining<0&&(clearInterval(l),t.textContent="00",n.textContent="00",o.textContent="00")};c(),l=setInterval(c,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),o=document.querySelectorAll("ul>li>a"),l=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",l),n.addEventListener("click",l),o.forEach((e=>e.addEventListener("click",l)))})(),(()=>{const o=document.querySelector(".popup"),l=document.querySelectorAll(".popup-btn"),r=o.querySelector(".popup-close"),c=o.querySelector(".popup-content");l.forEach((l=>{l.addEventListener("click",(()=>{window.innerWidth>=768?e({timing:n(t),draw(e){o.style.opacity=e,c.style.transform=`scale(${e})`,o.style.display="block"},duration:700}):(o.style.opacity="1",c.style.transform="scale(1)",o.style.display="block")}))})),r.addEventListener("click",(()=>{document.documentElement.clientWidth>=768?e({timing:n(t),draw(e){o.style.opacity=1-e,c.style.transform=`scale(${1-e})`,e>=1&&(o.style.display="none")},duration:700}):(o.style.opacity="0",c.style.transform="scale(0)",o.style.display="none")}))})(),(()=>{const e=document.querySelector("a"),t=[...document.querySelectorAll("ul>li>a"),e];seamless.polyfill(),t.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),o=document.getElementById(n);o&&seamless.elementScrollIntoView(o,{behavior:"smooth",block:"start"})}))}))})()})();