//Create a mouse object that has four properties and three methods
const mouse={}
// properties of object 
 mouse.color="red";
 mouse.size=5+"inch";
 mouse.buttons=2;
 mouse.weight=2+"kg";
// methods of object 
mouse.setColor=function(color){
    console.log(color);
}
mouse.setSize=function(size){
    console.log(size);
}
mouse.setButtons=function(buttons){
    console.log(buttons);
}
//function call
mouse.setButtons(mouse.buttons);
mouse.setColor(mouse.color);
mouse.setSize(mouse.size);