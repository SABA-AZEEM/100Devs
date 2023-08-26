//Get a dog photo from the dog.ceo api and place the photo in the DOM
let imgEl=document.querySelector("img");
let api="https://dog.ceo/api/breeds/image/random";
//fetch image
fetch(api).then(response=>{
    if(!response.ok){
        throw new Error("Netwrok response was not ok");
    }
    return response.json();
}).then(data=>{
    imgEl.src=data.message;
}).catch(error=>{
    console.log("error",error);
})