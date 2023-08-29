    
    const url = 'https://hp-api.onrender.com/api/characters';
    fetch(url)
    .then(response=>response.json())
    .then(data=>{     
                document.querySelector('h2').innerText=data[0].name;
                document.querySelector('img').src=data[0].image;
    })
    .catch(error=>{
        console.log(error);
    });
