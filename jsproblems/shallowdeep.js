// const student={
//     name:"abcd",
//     age:23,
//     address:{
//         place:"thrissur",
//         pin:5435,
//     },
// }

// const shallow={...student};
// const deep=JSON.parse(JSON.stringify(student));
// console.log(shallow);
// shallow.address.pin=2321;
// console.log(shallow);
// console.log(student);
// console.log(deep);

// Original array with objects
// const originalArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
// // Shallow copy using spread operator
// const shallowCopy = [...originalArray];
// // Modifying the original array
// shallowCopy[0].id = 100;
// // Logging both arrays
// console.log('Original Array:', originalArray);
// console.log('Shallow Copy:', shallowCopy);



const array = [{id:4},{id:5},{id:8}];
const hfh=[...array];
 hfh[0].id = 200;
 console.log(hfh);



