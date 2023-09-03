//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let arr=[1,2,3,4,5];
function reverse(arr){
    // let newArr=[];
    // let j=0;
    // for(let i=arr.length-1;i>=0;i--){
    //   newArr[j]=arr[i];
    //   j++;
    // }
    console.log("reverse of array is:"+arr.reverse());
}
reverse(arr);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

let a=[10,20,30,40,50];
let b=[1,2,3,4,5];
function check1(a,b){
    let aResult=a.reduce((accumulator,item)=>accumulator+item**2,0);
    let bResult=b.reduce((accumulator,item)=>accumulator+Math.pow(item,3),0);
    if(a>b)
        return true;
    else
        return false;
}
console.log(check1(a,b))

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

let arr1=[22, -6, 32, 82, 9, 25];
function check2(arr){
    return arr.filter((item,idx)=> item%idx===0);
}
console.log(check2(arr1));

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

let arr2=[1,'2',3,'4',5];
function sumOfNo(arr){
    return arr.reduce((sum,item)=> +item+sum,0)
}
console.log(sumOfNo(arr2));