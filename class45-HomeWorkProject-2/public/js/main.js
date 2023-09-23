//process for delete
const delBtns=document.querySelectorAll('.del');
Array.from(delBtns).forEach((delBtn)=>{
    let id=delBtn.value;
    delBtn.addEventListener("click",()=>handleDelBtn(id));
});
async function handleDelBtn(id){
    try{
        const response=await fetch(`deleteItem/${id}`,{method:'delete'});
        const data=await response.json();
        console.log(data);
        location.reload();
    }catch(err){
        console.log(err);
    }
}


//process for update
const updateButtons = document.querySelectorAll('.update-btn');
const saveUpdateButtons = document.querySelectorAll('.save-update');

updateButtons.forEach((updateButton, index) => {
    updateButton.addEventListener('click', () => {
        toggleEditable(index);
    });
});

saveUpdateButtons.forEach((saveButton, index) => {
    let id=saveButton.value;
    console.log(id);
    saveButton.addEventListener('click', () => {
        saveUpdate(index,id);
    });
});

function toggleEditable(index) {
    const noteText = document.querySelectorAll('.note-text')[index];
    const updateForm = document.querySelectorAll('.update-form')[index];

    noteText.style.display = 'none';
    updateForm.style.display = 'block';
}

async function saveUpdate(index,id) {
    const updateTitle = document.querySelectorAll('.update-title')[index].value;
    const updateNote = document.querySelectorAll('.update-note')[index].value;
    // Send the updated title and note to the server for saving.
    try{
        const response=await fetch('update',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'title':updateTitle,'note':updateNote,'_id':id}),
        });
        const data=await response.json();
        console.log(data);
        // location.reload();
    }catch(err){
        console.log(err);
    }

    // After successfully saving, you may want to update the displayed note text with the new values.


    const noteText = document.querySelectorAll('.note-text')[index];
    const updateForm = document.querySelectorAll('.update-form')[index];

    noteText.textContent = updateTitle + '\n' + updateNote;
    noteText.style.display = 'block';
    updateForm.style.display = 'none';
}
