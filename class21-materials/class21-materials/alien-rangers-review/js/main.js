//Arrays

//Create and array of tv shows. Loop through and print each show to the console

// const arr=["Ali Baba","Son Pari","Shaka laka boom boom"];
// arr.forEach( (item) =>{
//     console.log(item);
// });

//Create an array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

// const arr=[1,2,3,4,5];
// function fun(arr){
//     return arr.filter(item=> item%2===0);
// }
// console.log(fun(arr));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

const arr=[1,2,3,4,5];
function fun(arr){
    let newArr=arr.sort((a,b)=> a-b);
    alert(newArr[1]+newArr[newArr.length-2]);
}
fun(arr);