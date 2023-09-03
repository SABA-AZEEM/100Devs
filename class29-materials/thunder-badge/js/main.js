//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class Pokemon{
    constructor(size,duration){
        this.size=size;
        this.duration=duration
    }
    print(){
        console.log(this.duration);
        console.log(this.size);
    }
}
let obj=new Pokemon(20,30);
let obj1=new Pokemon(1,2)
obj.print();
obj1.print();