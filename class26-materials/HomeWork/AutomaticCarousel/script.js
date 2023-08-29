//Global vaeiables
const container=document.querySelector('.container');
let currentIndex=0;//Track the current img index

//function to move the carousel left
function moveLeft(){
    if(currentIndex>0){
        currentIndex--;
        updateCarousel();
    }
}

//function ot move the carousel right
function moveRight(){
    const totalImages=container.children.length;
    if(currentIndex<totalImages-1){
        currentIndex++;
        updateCarousel();
    }
}

//function to update the carousel based on the current Index
function updateCarousel(){
    const imageWidth=container.clientWidth;
    const transformValue= -currentIndex*imageWidth;
    container.style.transform=`translateX(${transformValue}px)`;
}
//event listener to get data from api
document.querySelector('button').addEventListener('click',()=>{
    
    let inputValue=document.querySelector('input').value;
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+inputValue;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{     
                console.log(data.drinks) //made carousel of it
                setCarousel(data.drinks);
    })
    .catch(error=>{
        console.log(error);
    });

});

//function to set up the carousel with images
function setCarousel(data){
    currentIndex=0;//Reset currentIndex when setting up the carousel
    container.innerHTML=''; //clear existing images

    data.forEach((item)=>{
        let imgEl=document.createElement('img');
        imgEl.src=item.strDrinkThumb;
        container.appendChild(imgEl);
    });
    //update the carousel after setting up images
    updateCarousel();
}
//add event listeners to move the carousel left and right
document.querySelector('.move-left').addEventListener('click',moveLeft);
document.querySelector('.move-right').addEventListener('click',moveRight);