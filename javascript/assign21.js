const read = require("readline-sync")
let size = parseInt(read.question("Enter the size of the array:"));
let array = read.question("Enter the array elements(Seperated by Commas):");

let arr=array.split(',').map(Number);
let arr1 = [];
for(let i=0;i<size-1;i++)
{
   arr1[i]= arr[i]*arr[i+1];
}
 console.log("The array is:",arr1);
