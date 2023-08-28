//Create a dog object that has four properties and three methods
const dog={};
dog.color='brown';
dog.weight=23+'kg';
dog.size=34;
dog.beauty=true;
dog.showColor=function(color){
    console.log(color);
}
dog.showSize=function(size){
    console.log(size);
}
dog.showBeauty=function(beauty){
    console.log(beauty);
}
//call
dog.showColor(dog.color);