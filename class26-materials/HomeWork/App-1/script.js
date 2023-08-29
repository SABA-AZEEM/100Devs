const imgEl=document.querySelector('img');
url='https://api.thecatapi.com/v1/images/search';
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    imgEl.src=data[0].url;
})
.catch(err=>{
    console.log(err);
})