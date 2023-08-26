//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function Fun(time,duration,endTime,players){
    this.time=time;
    this.duration=duration;
    this.endTime=endTime;
    this.players=players;
    this.showPlayer=function(){
        console.log(players);
    }
    this.showTime=function(){
        console.log(time);
    }
    this.showDuration=function(){
        console.log(duration);
    }
}
let newFun=new Fun(1,2,3,4);
newFun.showPlayer();