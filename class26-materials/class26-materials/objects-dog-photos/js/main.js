//Get a dog photo from the dog.ceo api and place the photo in the DOM
const imgEl=document.querySelector('img');
const url='https://dog.ceo/api/breeds/image/random';
//fetch request
fetch(url)
.then(response=>response.json())
.then(data=>{
    imgEl.src=data.message;
})
.catch(error=>{
    console.log(error);
})