//Create a dog object that has four properties and three methods
const obj={};
obj.color="red";
obj.size=3;
obj.beautiful=true;
obj.length=23;
obj.showColor=function (color){
    console.log(color)
}
obj.showSize=function (size){
    console.log(size)
}
obj.showbeautiful=function (beautiful){
    console.log(beautiful)
}
obj.showColor(obj.color);