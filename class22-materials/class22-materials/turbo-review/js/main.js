// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

// let drink=" juice ";
// drink=drink.trim();
// console.log(drink);

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

// let words="orange banana apple";
// let check=words.search('aple');
// console.log(check>=0? "Exist" : "Not Exist");
// Anoterh way

// let arr=words.split(' ');
// console.log(arr)
// let check=false;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==="apple"){
//         console.log("apple exist");
//         check=true;
//         break;
//     }
// }
// if(check===false)
// console.log("Appled does'nt exist");

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function fun(){
    let no=Math.random();
    if(no<0.33)
        return "rock";
    else if(no<0.66)
        return "Paper";
    else
        return "scisor";
}
// setInterval(_=>{
//     console.log(fun());
// },1000);

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function fun1(choice){
    let bot=fun();
    if(choice==='rock' && bot==='scisor' || choice==='scisor' && bot==='Paper'){
        console.log("You win");
    }else if(choice==='Paper' && bot==='scisor' || choice==='Paper' && bot==='rock'){
        console.log("bot Win");
    }else{
        console.log("tie");
    }
}
//fun1("paper");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

const choices=["rock","Paper","scisor"];
function fun2(choices){
    choices.forEach((item)=> fun1(item) );
}
fun2(choices);