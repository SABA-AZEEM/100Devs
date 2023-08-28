//Create a constructor with 4 properties and 3 methods
function ConstructorFunction(age,name,classStu,rollNo){
    this.age=age;
    this.name=name;
    this.classStu=classStu;
    this.rollNo=rollNo;
    this.showName=function(){
        console.log(this.name);
    }
    this.showAge=function(){
        console.log(this.age);
    }
    this.showRollNo=function(){
        console.log(this.rollNo);
    }
};
//create object
let fun=new ConstructorFunction(24,'Saba',14,19453);
//set property and method in object prototype
ConstructorFunction.prototype.height=5.4;
ConstructorFunction.prototype.showHeight=function(){
    console.log(this.height);
}
//call
fun.showHeight();
console.log(fun)
console.log(fun.height);