const read = require("readline-sync");

function main() {
    let row = parseInt(read.question("Enter the number of rows:"));
    let cols = parseInt(read.question("Enter the number columns:"));

    let array1 = getArray(row, cols, "Array 1");
    let array2 = getArray(row, cols, "Array 2");

    let sumArray = sumArrays(array1, array2);

    console.log("The sum of arrays is:");
    displayArray(sumArray);
}

function getArray(row, cols, arrayName) {
    let array = [];
    console.log("Enter elements for "+arrayName+":");
    for (let i = 0; i < row; i++) {
        let rowArray = [];
        for (let j = 0; j < cols; j++) {
            let value = read.question('Enter the element at position('+(i + 1)+',' +(j + 1)+ ') for' +arrayName+':');
            rowArray.push(Number(value));
        }
        array.push(rowArray);
    }
    return array;
}

function sumArrays(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        let rowResult = [];
        for (let j = 0; j < array1[0].length; j++) {
            rowResult.push(array1[i][j] + array2[i][j]);
        }
        resultArray.push(rowResult);
    }
    return resultArray;
}

function displayArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }
}


main();