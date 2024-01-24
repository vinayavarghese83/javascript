const read = require("readline-sync");

var string = read.question("Enter the string:");


try{
 var rev = string.split("").reverse();  
 console.log("The reversed string is:" +rev);
}

catch(err){
    console.log(err);
}

finally{
    console.log("The type of the string:"+(typeof string ))
}