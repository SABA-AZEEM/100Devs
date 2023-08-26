//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.


const arr=[1,2,3,4,5];
//alert(arr.reduce((sum,item)=>item+sum,0))


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared


// function fun(arr){
//     return arr.map((item)=> item**2);
// }
// console.log(fun(arr));


//Create a function that takes string
//Print the reverse of that string to the console


function fun(str){
    let newStr=str.split('').reverse().join('');
    if(newStr===str)
        alert(str);
}
// fun("Saba Azeem");


//Create a function that takes in a string
//Alert if the string is a palindrome or not

fun('abas')