//Create an a class and extend it - Can be anything you would like it to be! 
class food{
    constructor(name){
        this.name=name;
    }
    showName(){
        console.log(this.name);
    }
}
class biryani extends food{
    constructor(name,weight){
        super(name);
        this.weight=weight;
    }
    showWeight(){
        super.showName();
        console.log("Child method:"+`${this.name} has ${this.weight} weight`);
    }
    showName(){
        console.log("This is child class function");
    }
}
const obj=new biryani("biryani",20);
obj.showWeight();
obj.showName();