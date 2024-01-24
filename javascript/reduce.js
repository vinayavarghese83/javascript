// Example array
// let numbers = [1, 2, 3, 4, 5];

// // Using reduce to calculate the sum of all elements
// let sum = numbers.reduce(function(accumulator, currentNumber) {
//   return accumulator + currentNumber;
// }, 0); // 0 is the initial value for the accumulator

// // Alternatively, you can use arrow function syntax
// // let sumArrow = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

// // Logging the result
// console.log('Original array:', numbers);
// console.log('Sum of all elements:', sum);
// // console.log('Sum of all elements (using arrow function):', sumArray);
let numbers =[1,2,3,4,5];
let sum=numbers.reduce(function(accumulator,currentnumber ){
		return accumulator+currentnumber;
},0);
console.log(sum);
