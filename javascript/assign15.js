const read = require("readline-sync")
let rows;
let cols;
function main(){
    let Array = [];
    getArray(Array);
    displayArray(Array);

}

function getArray(Array){
          let rows = read.question("Enter the number of rows:");
          let cols = read.question("Enter the number of columns:");
          
          for(let i=0;i<rows;i++)
{
    let row=[];
    for(let j=0;j<cols;j++)
    {
        let value=read.question('Enter the element at position('+(i+1)+","+(j+1)+") For Array:");
        row.push(Number(value));
    }
    Array.push(row);
}
                                                                                                                                                                                                   
}
function displayArray(Array)
{
    console.log("The array is:");

    for(let i=0;i<Array.length;i++)
    {
        console.log(Array[i].join(' '));
    }
    
}
main();