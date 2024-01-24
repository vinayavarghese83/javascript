// function addNumbers(num1, num2, callback) {
//     const sum = num1 + num2;
    
//     // Invoke the callback function with the sum as an argument
//     callback(sum);
// }

// // Callback function that logs the result to the console
// function Result(result) {
//     console.log("The result is: " + result);
// }

// // Call the function with two numbers and the callback
// addNumbers(3, 7, Result);



 function addnum(num1,num2,callback)
{
    const sum=num1+num2;
    callback(sum);
}

function res(result){
    console.log("the sum is"+result);
}

addnum(1,2,res );