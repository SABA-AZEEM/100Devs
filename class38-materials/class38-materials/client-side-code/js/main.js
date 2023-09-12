document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://gentle-rose-abalone.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.name').innerText = data.name;
        document.querySelector('.age').innerText = data.age;
        document.querySelector('.class').innerText = data.class;
    }catch(error){
        console.log(error)
    }
}