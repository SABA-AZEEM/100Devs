//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click",()=>{
    let inputVal=document.querySelector("input").value;
    let api=`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputVal}`;

    fetch(api).then(response=>{
        if(!response.ok){
            throw new Error('Network Response was not ok');
        }
        return response.json();
    }).then(data=>{
        
        document.querySelector("h2").innerText=data.drinks[0].strDrink;
        document.querySelector("img").src=data.drinks[0].strDrinkThumb;
        document.querySelector("h3").innerText=data.drinks[0].strInstructions;
    }).catch(error=>{
        console.log("Error is:"+error);
    });
});