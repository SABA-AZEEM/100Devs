document.querySelector('button').addEventListener('click',handleAPI);

async function handleAPI(){
    let pEl=document.querySelector('#result');
    const res=await fetch(`/api`)
    const data=await res.json();
    console.log(data.no);
    let flipCoin=data.no<0.50?'head':'tail';
    console.log(flipCoin);
    let result=document.querySelector('input[type=text]').value===flipCoin?'you won':'you loss';
    console.log(result)
    pEl.classList.add('show-result');
    pEl.textContent=result;
}
