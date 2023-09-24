//handle when click on delete button

document.querySelector('#del-btn').addEventListener('click',handleDel);

async function handleDel(){
 try{
   const delBtnId=document.querySelector('#del-btn').value;
    const response=await fetch(`/del/${delBtnId}`,{method:'delete'});
    const data=await response.json();
    window.location.href = '/';
 }catch(err){
    console.log(err);
 }
}
//handle when click on update button
document.querySelector("#update-btn").addEventListener("click",handleUpdate);
document.querySelector('#save-btn').addEventListener('click',handleSave);

async function handleUpdate(){
   document.querySelector(".save-container").style.display='none';
   document.querySelector('.update-container').style.display='block';
}
async function handleSave(){
   let title=document.querySelector("#update-title").value;
   let content=document.querySelector("#update-content").value;
   let id=document.querySelector("#save-btn").value;
   console.log(title,content,id);
   try{
      const response=await fetch('/update',{
         method:'PUT',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({
            'title':title,
            'content':content,
            'id':id,
         }),
      });
      const data=await response.json();
      console.log(data);
      location.reload();
   }catch(error){
      console.log(error);
   }
   document.querySelector(".save-container").style.display='block';
   document.querySelector('.update-container').style.display='none';
}