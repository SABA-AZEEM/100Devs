const inputEl=document.querySelector('.input');
const buttonEl=document.querySelectorAll('button');
buttonEl.forEach((item)=>{
    item.addEventListener("click",function(){
        if(this.value==='='){
            let result=eval(inputEl.value);
            inputEl.value=result;
        }else{
            inputEl.value +=this.value;
        }
    });
})
