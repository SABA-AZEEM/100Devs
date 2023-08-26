//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function fun(arr){
    let newArr=[];
    arr.forEach((item)=>{
        if(item%2===0){
            newArr.push(item);
        }
    });
    return newArr;
}
let arr=[1,2,3,4,5]
console.log(fun(arr));