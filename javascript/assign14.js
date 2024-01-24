const read  = require("readline-sync")
let row = parseInt(read.question("Enter the number of rows:"));
let cols = parseInt(read.question("Enter the number columns:"));
let Array = [];
let Array1 =[];
for(let i=0;i<row;i++)
{
    let row=[];
    for(let j=0;j<cols;j++)
    {
        let value=read.question('Enter the element at position('+(i+1)+","+(j+1)+") For Array 1:");
        row.push(Number(value));
    }
    Array.push(row);
}
console.log(Array);

for(let i=0;i<row;i++)
{
    let row=[];
    for(let j=0;j<cols;j++)
    {
        let value=read.question('Enter the element at position('+(i+1)+","+(j+1)+") For Array 2:");
        row.push(Number(value));
    }
    Array1.push(row);
}
let sumArray = [];
for (let i = 0; i < row; i++) {
    let rowResult = [];
    for (let j = 0; j < cols ; j++) {
        rowResult.push(Array[i][j] + Array1[i][j]);
       
    }
    sumArray.push(rowResult);
    
}
console.log("The sum of array is:");

for(let i=0;i<row;i++)
{
    console.log(sumArray[i].join(' '));
}