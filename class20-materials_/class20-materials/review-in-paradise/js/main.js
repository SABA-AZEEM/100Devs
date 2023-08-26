// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

// let food="firni";
// food="tikka";
// alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

// let myName="Saba azeem";
// // alert(myName[1]);
// alert(myName.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

// function calculation(no1,no2,no3){
//     alert((no1/no2)*no3);
// }
// calculation(8,2,2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cube(no){
    no=Math.cbrt(no).toFixed(4);
    console.log(no);
}
cube(2);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

// function show(month){
//     month=month.toLowerCase();
//     if(month==="may" || month==="june" || month==="july" || month==="august"){
//         alert("YAY");
//     }else{
//         alert(month);
//     }
// }
// show("May");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

// function show(no){
//     for(let i=1;i<=no;i++){
//         if(i%5!==0){
//             console.log(i);
//         }
//     }
// }
// show(20);