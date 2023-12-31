//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey='tIMgdcGLiAWi70IzbaqSNCbJO4CjkuqDyw5soBOr';
document.querySelector('button').addEventListener('click',()=>{

    let date=document.querySelector('input').value;  //date in format: YYYY-MM-DD
url=`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data);
    document.querySelector('h2').innerText=data.title;
    if(data.media_type==='image'){
        document.querySelector('img').src=data.url;
        document.querySelector('iframe').src="";
    }else if(data.media_type==='video'){
        document.querySelector('img').src="";
        document.querySelector('iframe').src=data.url;
    }
    
    document.querySelector('h3').innerText=data.explanation;
})
.catch(error=>{
    console.log(error);
});

});

