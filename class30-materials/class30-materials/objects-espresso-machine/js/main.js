//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Machine{
    constructor(prop1,prop2,prop3,prop4){
        this.prop1=prop1;
        this.prop2=prop2;
        this.prop3=prop3;
        this.prop4=prop4;
    }
    method1(){
        console.log(this.prop1);
    }
    method2(){
        console.log(this.prop2);
    }
    method3(){
        console.log(this.prop4);
    }
}
const obj=new Machine(1,2,3,4);
obj.method1();
obj.method2();
obj.method3();