//Create a stopwatch object that has four properties and three methods
const stopwatch={
    hour:"Ten",
    min :"Twenty",
    sec :"two",
    miliSec:"one",
    hourFun:function(){
        console.log(this.hour);
    },
    minFun(){
        console.log(this.min);
    },
    secFun:()=>{
        console.log("Saba");
    }
}
stopwatch.hourFun();
stopwatch.minFun();
stopwatch.secFun();