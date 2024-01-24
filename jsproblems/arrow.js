// let sum=(num1,num2)=>num1+num2;
// console.log(sum(5,4));


let student={
    name:"Arya",
    age:23,
    place:"Thrissur",
};

Object.preventExtensions(student);

delete student.name;
console.log(student);