// currying

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// const result=sum(1)(2)(3);
// console.log(`sum:${result}`);

//spread

// const student={
//     name:"ASDAWD",
//     age:12,
// }
// const person={...student};
// console.log(person);

// let array1=[1,2,3,4];
// let array2=[4,5,6,7];
// let array=[...array1,...array2];
// console.log(array);

//shallow copy deep copy

// const student={
//     name:"AYTFT",
//     age:23,
//     address:{
//         place:"dtdt",
//         pin:65453,
//     },
// }

// const shallow={...student};

// console.log(shallow);
// shallow.address.pin=23423;
// console.log(student);
// console.log(shallow);

// const deep=JSON.parse(JSON.stringify(student));
// console.log(deep);
// deep.address.pin=123343;
// console.log(deep);
// console.log(student);


//call apply bind

// const student1={
//     name:"Ajkjs",
//     age:23,
// }

// const student2={
//     name:"Arysh",
//     age:23,
// } 

// const person=function print(place,state){
//     console.log(this.name+" "+this.age+" "+place+" "+state);

// }

// person.call(student1,"Sdcs","sasd");
// person.apply(student2,["saaas","dfsdf"]);
// const abc=person.bind(student1,"erter","rtert");
// abc();



//Arrow function


// let sum=(num1,num2)=>num1+num2;
// console.log(sum(5,10));


//freeze seal preventExtensions

// let student1={
//     name:"ASDAWD",
//     age:12,
//     place:"sdfwe",
//     pin:546,
// }

// // Object.freeze(student1);
// Object.preventExtensions(student1);
// student1.pin=9897;
// console.log(student1);
// delete student1.pin;
// console.log(student1);

//Generator functions for addition

// function* addition(){
//     console.log(5);
//     yield 1;
//     console.log(6);
//     yield 2;
//     console.log(5+6);
//     yield 3;
//     console.log("Addition successfully performed");
    
// }

// const sum=addition();
// console.log(sum.next());
// console.log(sum.next());
// console.log(sum.next());
// console.log(sum.next());

//



