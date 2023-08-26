//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function StreetFighter(player,duration,place,level){
    //Properties of constructor
    this.player=player;
    this.duration=duration;
    this.place=place;
    this.level=level;
    //Methods of constructor
    this.showPlayer=function(){
        console.log(this.player);
    }
    this.showDuration=function(){
        console.log(this.duration);
    }
    this.showPlace=function(){
        console.log(this.place);
    }
    this.showLevel=function(){
        console.log(this.level);
    }
};
let saba=new StreetFighter(2,5,"Lahore",4);
let sana=new StreetFighter(3,6,"Karachi","Five");
// console.log(saba,sana);

console.log(saba.bluetoothe);
StreetFighter.prototype.bluetoothe=true;
console.log(saba.bluetoothe);