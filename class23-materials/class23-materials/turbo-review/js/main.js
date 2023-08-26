// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question


//let sen="My name is saba azeem?";
// if(sen[sen.length-1]==='?'){
//     alert(sen);
// }

// OR

// if(sen.endsWith("?"))
//     alert(sen);
   

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console


// let sen="i don't like jr. dev, but i like jr. dev because jr. dev is best";
// let newSen=sen.replaceAll('jr. dev','software engineer');
// console.log(newSen);


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible


function fun(){
    let no=Math.random();
    if(no<0.33)
        return 'rock';
    else if(no<.66)
        return 'paper';
    else
        return 'scissors';
}


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function


function fun1(myChoice){
    let botChoice=fun();
    console.log("Bot choice:"+botChoice);
    if(myChoice===botChoice)
        console.log("I won");
    else
        console.log("bot won");
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
let choices=['rock','paper','scissors'];
function fun2(choices){
    choices.forEach((item)=>fun1(item));
}
fun2(choices);