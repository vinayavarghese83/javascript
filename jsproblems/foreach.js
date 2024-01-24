// const array=["one","Two","Three"];
// array.forEach(function(array,index){
//     console.log(`The ${index} element is ${array} `);

// });
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//   if (number === 3) {
//     // Cannot break out of the forEach loop
//     // Use a traditional for loop if breaking is necessary
//   }
//   console.log(number);
// });


const numbers = [1, 2, 3];
const squaredNumbers = numbers.forEach((number) => number ** 2);
console.log(squaredNumbers);