// *Variables*
// Declare a variable and assign it to a sentance that is a positive affirmation. Print the affirmation to the console multiple times using a method

let str="I am confident, capable, and ready to tackle any challenge that comes my way.";
function printAffirmation(str,times){
    for(let i=0;i<times;i++)
        console.log(str);
}
printAffirmation(str,5);

//Declare a variable, assign it an array of letters, combine the letters into one word, and alert it 

let arr=['a','b','c'];
console.log(arr.join(''));

// *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly as possible

function fun(){
    let no=Math.random();
    if(no<0.20)
        return 'rock';
    else if(no<0.40)
        return 'paper';
    else if(no<0.60)
        return 'lizard';
    else if(no<0.80)
        return 'spock';
    else
        return 'scissors';
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) and determines if they won a game of rock paper scissors against a bot using the above function

function fun1(myChoice){
    let botChoice=fun();
    console.log(botChoice);
    if(myChoice===botChoice)
        console.log("I Won");
    else
        console.log("Bot won");
}
fun1('rock');
