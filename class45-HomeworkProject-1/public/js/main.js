const itemsContainer = document.querySelector('.todoItems');
const deleteBtn=document.querySelectorAll('.fa-trash');

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click',deleteItem);
});
itemsContainer.addEventListener('click', handleItemClick);

function handleItemClick(event) {
  const clickedElement = event.target;
  
  // Check if the clicked element has the class 'completed'
  if (clickedElement.classList.contains('completed')) {
    // Handle the click on completed item here
    markUnComplete(clickedElement);
  } else {
    // Handle the click on regular item here
    markComplete(clickedElement);
  }
}


//markComplete function
async function markComplete(element){
    const itemText=element.innerText;
    try{
        const response=await fetch('markComplete',{
            method:'put',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                'itemFromJS':itemText
            })
        });
        const data=await response.json();
        console.log(data);
        location.reload();
    }catch(error){
        console.log(error);
    }
}
//mark uncomplete function
async function markUnComplete(element){
    const itemText=element.innerText;
    try{
        const response=await fetch('markUnComplete',{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                'itemFromJS':itemText
            })
        })
        const data=await response.json();
        console.log(data);
        location.reload();
    }catch(err){
        console.log(err);
    }
}
//function for delete
async function deleteItem(event){
    const itemText=this.parentNode.childNodes[1].innerText;
    try{
        const response=await fetch('deleteItem',{
            method:'delete',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                'itemFromJS':itemText
            })
        })
        const data=await response.json();
        console.log(data);
        location.reload();
    }catch(err){
        console.log(err);
    }
}