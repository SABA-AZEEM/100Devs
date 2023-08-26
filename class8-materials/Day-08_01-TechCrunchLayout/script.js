let disappearEl=document.querySelector(".disappear");
let nav=document.querySelector("nav");

document.getElementById("dis").addEventListener("click",()=>{
    nav.classList.toggle("nav");
    disappearEl.classList.toggle('disappear');
})