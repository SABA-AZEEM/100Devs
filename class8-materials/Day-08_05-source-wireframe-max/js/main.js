const visibleEl=document.querySelectorAll(".visible");
const barsEl=document.querySelector(".fa-bars");
barsEl.addEventListener("click",()=>{
    visibleEl.forEach((item)=>{
        item.classList.toggle("un-visible");
    })
})
