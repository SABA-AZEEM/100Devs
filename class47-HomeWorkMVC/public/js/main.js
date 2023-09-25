            // get elements 
//get element that have class .no
const todoItem=document.querySelectorAll('span.not');
//get element that have class .completed
const todoComplete=document.querySelectorAll('span.completed');
//get element that have class .del
const deleteBtn=document.querySelectorAll('.del');

            //event listeners
//Event listeners that is clicked for completed task
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click',markComplete);
});
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click',markInComplete);
});
Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click',deleteTodo);
})

            // call back methods
async function markComplete(){
    const todoId=this.parentNode.dataset.id;
    console.log(todoId)
    try{
        const response=await fetch('todos/markComplete',{
            method:'put',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                'todoIdFromJSFile':todoId, 
            })
        })
        const data=await response.json();
        console.log(data);
        location.reload();
    }catch(err){
        console.log(err);
    }
}

async function markInComplete(){
    const todoId=this.parentNode.dataset.id;
    try{
        const response=await fetch('todos/markIncomplete',{
            method:'put',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                'todoIdFromJSFile':todoId,
            })
        })
        const data=await response.json();
        console.log(data);
        location.reload();
    }catch(err){
        console.log(err);
    }
}

async function deleteTodo(){
    const todoId=this.parentNode.dataset.id;
    try{
        const response=await fetch('todos/deleteTodo',{
            method:'delete',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                'todoIdFromJSFile':todoId,
            })
        })
        const data=await response.json();
        console.log(data);
        location.reload()
    }catch(err){
        console.log(err);
    }
}