//doubled array

/*const array=[1,2,3,1,4,5];

const doubledArray=array.map(num=>num*2);

console.log(doubledArray);*/

//extracting a property from an object

// const student=[{
//     name:"sdad",
//     age:23,
//     place:"dsv",
// }];
// const studentcpy=student.map((student)=>student.name);
// console.log(studentcpy);
//calculating square roots

/*
const array=[4,9,25];
const sqrArray=array.map((numbers)=>Math.sqrt(numbers));
console.log(sqrArray);
*/
//formatting elements 

/*
const names=["arya","athira"];
const formattedNames=names.map((name)=>`Miss.${name}`);
console.log(formattedNames);
*/

//celcius to fahrenheit

// const temp=[0,23,12,45];
// const fahren=temp.map((num)=>num+32);
// console.log(fahren);

 //squares of even numbers 

 const array=[1,2,3,4,5,,6,7,8,9];
 const result=array
 .filter(num=>num%2==0)
 .map(num=>num*num);
 console.log(result);










 

