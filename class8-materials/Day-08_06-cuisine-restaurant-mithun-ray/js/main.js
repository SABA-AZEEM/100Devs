const navEl=document.querySelector('nav');
const barsButton=document.querySelector('.fa-bars').addEventListener('click',()=>{
    navEl.classList.toggle('visible');
})