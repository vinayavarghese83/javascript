// function currySum(a) {
//     return function(b) {
//       return function(c) {
//         return a + b + c;
//       };
//     };
//   }
  
//   const numbers = [1, 2, 3];
  
  
//  const result=numbers.map(currySum);
//  const sum=result.map(fn=>fn(4));
//  console.log("sum:",sum);

function currySum(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
  
  const numbers = [1, 2, 3];
  
  // Curry the sum function for each element in the array
  const curriedFunctions = numbers.map(currySum);
  
  // Use map again to apply the curried functions with an additional argument
  const results = curriedFunctions.map(fn => fn(0)(0));
  
  console.log(results); // Output: [8, 9, 10]