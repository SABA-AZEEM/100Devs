//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const arr=[1,2,3,4,5];
console.log(arr.reduce((sum,item)=> sum+item,0));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function fun(arr){
    return arr.map((item)=> item**2)
}
console.log(fun(arr));
//Create a function that takes string
//Print the reverse of that string to the console
function fun1(str){
    return str.split('').reverse().join('');
}
console.log(fun1("Saba"))
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function fun2(str){
    if(str===fun1(str)){
        return true;
    }else{
        return false;
    }
}
console.log(fun2("amma"))