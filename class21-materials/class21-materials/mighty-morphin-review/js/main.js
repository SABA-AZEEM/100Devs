// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

// let favHoliday="Sunday";
// favHoliday="Saturday";
// favHoliday=favHoliday.toUpperCase();
// console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

// let str="Saba Azeem";
// // str=str.slice(-3);
// str=str.substring(str.length-3);
// alert(str);

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

// function fun(no1,no2,no3,no4,no5){
//     result=no1-no2-no3-no4-no5-100;
//     console.log(Math.abs(result));
// }
// fun(1,2,3,4,5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

// function fun(no1,no2,no3){ //3,2,1
//     const lowest =Math.min(no1,no2,no3);
//     const highest=Math.max(no1,no2,no3);
//     return {lowest,highest};
// }
// const obj=fun(3,2,1);
// console.log("Lowest Value is:"+obj.lowest);
// console.log("Highest value is:"+obj.highest);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

// function fun(){
//     let no=Math.random();
//     return no<0.5? "Head" : "Tail";
// }
const fun= _ => Math.random() >0.5? "Head" :"Tail";
// setInterval(()=>{
//     console.log(fun());
// },1000);

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function fun1(x){
    
    for(i=1;i<=x;i++){
        console.log(fun());
    }
}
fun1(20);