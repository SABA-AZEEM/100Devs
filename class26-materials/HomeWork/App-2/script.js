const pEl=document.querySelector('p');
const url='https://bible-api.com/john%203:16?verse_numbers=true';
fetch(url)
.then(res=>res.json())
.then(data=>{
    pEl.innerText=data.text;
})