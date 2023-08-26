//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
let fun=()=>{
    let range=Number(prompt("Enter range of array:"));
    let arr=[];
    for(let i=0;i<range;i++){
        arr[i]=i+1;
    }
    return arr;
}
console.log(fun());