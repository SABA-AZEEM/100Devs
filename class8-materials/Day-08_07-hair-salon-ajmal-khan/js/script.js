let navEl=document.querySelector('nav');
let headerBtn=document.querySelector('.header-btn');

document.querySelector(".fa-bars").addEventListener("click",()=>{
    navEl.classList.toggle("display-none");
    headerBtn.classList.toggle('display-none');
    document.querySelector('.card').classList.toggle('nav-active');
})