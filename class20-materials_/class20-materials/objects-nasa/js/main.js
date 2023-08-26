//The user will enter a date. Use that date to get the NASA picture of the day from that date! 

let api_key="tIMgdcGLiAWi70IzbaqSNCbJO4CjkuqDyw5soBOr";


let btnEl=document.querySelector("button").addEventListener("click",()=>{
    let dateElVal=document.querySelector("input").value;
    let api=`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${dateElVal}`;

    fetch(api).then(response=>{
        if(!response.ok){
            throw new Error('Network Response was not ok');
        }
        return response.json();
    }).then(data=>{
        document.querySelector("h2").innerText=data.title;
        document.querySelector("img").src=data.url;
        document.querySelector("h3").innerText=data.explanation;
    }).catch(error=>{
        console.log("error:"+error);
    });
    
});




