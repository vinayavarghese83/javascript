const read = require("readline-sync");

function Car(name,mileage,max_speed){

    this.name = name;
    this.mileage = mileage;
    this.max_speed = max_speed;

}

var model1 = new Car("PORCHE 911","11.2kmpl","182mph");
var model2 = new Car("BMW X7","14kmpl","245mph");
var model3 = new Car("AUDI Q5","11.2kmpl","182mph");

console.log(`Car name: ${model1.name}, Mileage: ${model1.mileage}, Max Speed: ${model1.max_speed}`);
console.log(`Car name: ${model2.name}, Mileage: ${model2.mileage}, Max Speed: ${model2.max_speed}`);
console.log(`Car name: ${model3.name}, Mileage: ${model3.mileage}, Max Speed: ${model3.max_speed}`);
