//the highest odd number

// const array=[1,2,3,4,5,6,8,9];
// const result=array.filter(num=>(num%2)!=0)
// .reduce((acc,curr)=>acc>curr?acc:curr);
// console.log(result);

//word length

// const words=["athira","arya","ram"];
// const result=words.filter((word)=>word.length>5);
// console.log(result);

//positive numbers

// const numbers=[1,-45,23,67,3,-78];
// const negative=numbers.filter((curr)=>curr<0);
// console.log(negative);

//filtering by type

// const array=["arya",34,"swdf",56];

// const string=array.filter((element)=>typeof element!='number');
// console.log(string);

//Unique values

// const array=[1,2,1,3,4,6,2,2,56,3,4];
// const unique=array.filter((value,index,array)=>array.indexOf(value)===index);
// console.log(unique);

//on the basis of a condition in an object

// const student=[{
//     name:"athira",
//     age:23,
//     place:"Thrissur",
// },
// {
//     name:"arya",
//     age:25,
//     place:"Thrissur",   
// }];
// const age=student.filter((stud)=>stud.age>24);
// console.log(age);

//