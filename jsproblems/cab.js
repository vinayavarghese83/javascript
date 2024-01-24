// call apply bind

const stdent1={
    name:"Ahtjorj",
    age:23,
}

const stdent2={
    name:"dgdgg",
    age:23,
}

let printdetails=function(place,state){
console.log(this.name+" "+" "+this.age+" "+place+" "+state);
}
printdetails.call(stdent1,"Sdsd","sdff");
printdetails.apply(stdent2,["sdaae","bgbrt"]);
let stu=printdetails.bind(stdent1,"ergerg","gerg");
stu();





// // apply and call



// const obj1={
//     name:"ABC",
//     age:23,
// }

// const obj2={
//     name:"XYZ",
//     age:25,
// } 

// function printProp(){
//     return (console.log(this.name,this.age));
// }

// printProp.call(obj1);
// printProp.apply(obj1);
// const cpy=printProp.bind(obj2);
// cpy();

//by using apply passing another function as a function argument.

// function exampleFun(fun,args){
         

// }

// Higher-Order Function taking a function as a parameter
// function operateOnNumbers(a, b, operation) {
//     return operation(a, b);
// }

// // Example usage
// const add = (x, y) => x + y;
// const result = operateOnNumbers(5, 3, add); // result is 8
// console.log(result);
