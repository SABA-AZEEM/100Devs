//Create a function that takes in a number. The function should return an array that contains every number from 1 to that number as seperate elements
function fun(no){
    let arr=[];
    for(let i=0;i<no;i++){
        arr[i]=i+1;
    }
    return arr;
}
let no=10;
console.log(fun(no));