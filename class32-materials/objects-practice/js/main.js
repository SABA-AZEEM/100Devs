// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
class Contractor{
    constructor(name,role){
        this._name=name;
        this._role=role;
    }
    get name(){
        return this._name;
    }
    get role(){
        return this._role;
    }
    sayHello(){
        console.log(`Hello i'm at the ${this._role} at 100 Devs Team.`);
    }
}
class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role);
        this._tech=tech;
    }
    get tech(){
        return this._tech;
    }
    sayHello(){
        console.log(`Hello! I'm at ${this.role} at #100Devs and doing ${this._tech}`);
    }
}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name,role);
        this._tech=tech;
    }
    get tech(){
        return this._tech;
    }
    sayHello(){
        console.log(`Hello! I'm at ${this.role} at #100Devs and doing  ${this._tech}`);
    }
}

let iqra=new Contractor("Iqra","Front-end");
let Misbah=new Front("Misbah","Front-end","React");
let Saba=new Back("Saba","Back-end","Node");
let agency=[iqra,Misbah,Saba];
for(let person of agency){
    person.sayHello();
}