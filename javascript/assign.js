const read = require("readline-sync")
let income = parseFloat(read.question("Enter the annual income:"));
if(income<=250000)
{
    console.log("No Tax");
}
else if (income>250000 && income <=500000) {

    let tax=((income*5)/100);
    console.log("Income Tax Amount:" +tax);
}
 else if(income>500000 && income <=1000000){
    let tax=((income*20)/100);
    console.log("Income Tax Amount:" +tax);

 }
 else if(income>1000000 && income <=5000000)
 {
    let tax=((income*30)/100);
    console.log("Income Tax Amount:" +tax);

 }
 else{
    console.log("Please enter a valid income");
 }
    
