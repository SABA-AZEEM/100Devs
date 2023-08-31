//event listener to get data from api
const container=document.querySelector('.container');
let currentIndex=0;

document.querySelector('button').addEventListener('click',()=>{
    
    let inputValue=document.querySelector('input').value;
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+inputValue;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{     
                let imgArr=data.drinks.map(drink => drink.strDrinkThumb)
                console.log(imgArr);
                setInterval(()=>{
                    setCarousel(imgArr);
                },3000);
    })
    .catch(error=>{
        console.log(error);
    });

});

//function to set up the carousel with images
function setCarousel(imgArr){
    
        document.querySelector('img').src=imgArr[currentIndex];
        currentIndex= (currentIndex+1) % imgArr.length;
}

