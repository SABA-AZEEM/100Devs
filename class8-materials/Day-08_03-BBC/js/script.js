let navEl=document.querySelector(".nav");
document.querySelector("#toggle").addEventListener("click",()=>{
    navEl.classList.toggle("nav-visible");
});
//set date
let dateEl=document.querySelector("#date");
let date=new Date();
dateEl.innerText=date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay();