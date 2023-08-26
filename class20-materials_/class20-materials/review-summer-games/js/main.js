//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function mul(no){
    alert(no.reduce((pro,item)=>pro*item),1);
    
}
let no=[1,2,3,4];
mul(no);