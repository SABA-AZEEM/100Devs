//Create an array of movie titles. Loop through the array and each element to the h2.
let headingEle=document.querySelector("h2");
let movie=["jeena isi ka nam hai","spiderMan","harryPorter"];
movie.forEach((x)=>{
    headingEle.innerText += " "+x+" ";
})

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let no=[1,2,3,4,5];
no.forEach((x,i)=>{
    no[i]=x+3;
})
// for(let i=0;i<no.length;i++){
//     no[i] += 3;
//     // console.log(no[i]);
// }
console.log(no);

//Find the average of all the numbers from question three
let sum=0;
let avg;
no.forEach(item=>sum += item);
avg=sum/no.length;
console.log(avg);