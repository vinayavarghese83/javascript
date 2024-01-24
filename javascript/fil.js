// const numbers = [1,2,3,4,2,3];
// const uni = numbers.filter(numbers=>numbers==numbers);
// console.log(uni);



// function currySum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// const result=currySum(1)(3)(4);
// console.log(result);
/*concatenation using join*/
// const array = ["apple", "banana", "orange"];
// const concatenatedString = array.join(""); // Use a comma and a space as the separator

// console.log(concatenatedString); 
/*shallowcopy*/
const student={
    name:"asd",
    age:23,
    address:{
        place:"thrissur",
        
    },
}

const stucpy ={...student};
const dep = JSON.parse(JSON.stringify(student));
console.log(stucpy);
stucpy.address.pin=345345;
console.log(dep.address.pin);
