//summing an array of numbers
// const array1=[1,2,3,4,5];
// array2=[1,2,1,1,1];
// function sumofArray(array){
// let sum=array.reduce((acc,curr)=>acc+curr)
// return sum;
// }


// console.log(sumofArray(array1));
// console.log(sumofArray(array2));


//product of an array
// function multiplication(array){

//     let pdt=array.reduce((acc,curr)=>acc*curr)
//     return pdt;

// }

// const arr1=[1,1,1,1,1];
// const arr2=[2,2,2,2,2];
// console.log(multiplication(arr1));
// console.log(multiplication(arr2));

//flattening by reduce

// const array=[[1,2],[3,4],[5,6]];
// const newArray=array.reduce((acc,curr)=>acc.concat(curr));
// console.log(newArray);

//object grouping by properties 

// const student=[{
//     name:"asdasd",
//     age:23,
//     category:'A',

// },
// {
//  name:"asdswasd",
// age:22,
// category:'B',
// },
// {
//     name:"rhtasd",
//    age:23,
//    category:'A',
//    }
// ]

// const same= student.reduce((acc,student)=>{
//     acc[student.age]=acc[student.age]||[];
// acc[student.age].push(student)
// return acc;
// },
// {});
// console.log(same);

//maximum value in an array

// const array=[1,2,1,456,12,678,2,98];

// const max=array.reduce((acc,curr)=>acc>curr?acc:curr);
// console.log(max);

//occurence of array elements

////c


// //concatenate two strings in an array
// const words=["hello"," ","world","    ","!"];
// const string= words.reduce((acc,curr)=>acc+curr);
// console.log(string);

const words= ["Ath","ir","a"];
const string = words.reduce((acc,curr)=>acc+curr);
console.log(string);