const read = require("readline-sync");

class TwoDArray {
    constructor() {
      this.array = [];
    }
  
    getArray() {
      let rows = parseInt(read.question("Enter the number of rows:"));
      let columns = parseInt(read.question("Enter the number of columns:"));
  
      for (let i = 0; i < rows; i++) {
        this.array[i] = [];
        for (let j = 0; j < columns; j++) {
          this.array[i][j] = parseInt(read.question(`Enter element [${i + 1}, ${j + 1}]:`));
        }
      }
    }
  
    displayArray() {
      console.log("Two-dimensional matrix:");
      for (let i = 0; i < this.array.length; i++) {
          const row = this.array[i].join(" ");
          console.log(row);
      }
  }
}

  
  function main() {
    const array = new TwoDArray();
    array.getArray();
    array.displayArray();
  }
  
  main();