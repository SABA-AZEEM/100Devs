//Create a stopwatch object that has four properties and three methods
let stopwatch={};
//properties of stopwatch
stopwatch.minute=12;
stopwatch.hour=12;
stopwatch.seconds=12;
stopwatch.miliseconds=12;
//methods of stopwatch
stopwatch.tellMin=function(min){
    console.log(`Minute of stopwatch is: ${min}`);
}
stopwatch.tellHour=function(hour){
    console.log(`Hour of stopwatch is: ${hour}`);
}
stopwatch.tellSec=function(sec){
    console.log(`seconds of stopwatch is: ${sec}`);
}
//call method
stopwatch.tellHour(stopwatch.hour);