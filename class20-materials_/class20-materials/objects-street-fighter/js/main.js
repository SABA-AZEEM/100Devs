//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods
function streetFighterCharacter(name,health,specialMove,attackPower){
    this.name=name;
    this.health=health;
    this.specialMove=specialMove;
    this.attackPower=attackPower;
    //method-1
    function name(){
        alert(this.name);
    }
    //method-2
    function health(){
        alert(this.health);
    }
};
//Methods added to the prototype of the constructon
streetFighterCharacter.prototype.specialMove=function(){
    alert(this.specialMove);
};
//method-4
streetFighterCharacter.prototype.attackPower=function(){
    alert(this.attackPower);
};

//create obj
const obj=new streetFighterCharacter("saba","good","right","bad");
obj.name();
obj.streetFighterCharacter();