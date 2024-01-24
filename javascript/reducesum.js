// function sum(arr){
//     return arr.reduce((acc,curr)=>acc+curr);
// }
// console.log(sum([1,2,3,4,5]));

// function multiplication(arr){
//     return arr.reduce((acc,curr)=>acc*curr);
// }
// console.log(multiplication([2,3,4]));

// function division(arr){
//     return arr.reduce((curr,acc)=>curr/acc);
// }
// console.log(division([45,5]));

// function subtraction(arr){
//     return arr.reduce((acc,curr)=>acc-curr);
// }
// console.log(subtraction([45,3,2]));

// function pdtevn(arr){
//     return arr.reduce((acc,curr)=>(curr%2==0)?acc*curr:acc,1);

// }
// console.log(pdtevn([1,2,3,4]));



// function producteven(arr){
//     return arr.reduce((pdt,num)=>(num%2==0)?pdt*num:pdt,1);
// }
// console.log(producteven([2,1,3,5,6]));


// function flat(arr){
//     let arr1= arr.reduce((flat,curr)=>flat.concat(curr),[]);
//     return arr1.reverse();
// }
// console.log(flat(['assa','asass',['qwe','erw']]));


function common(arr1,arr2){
    let countnum = arr1.reduce((count,element)=>(arr2.includes(element))?count+1:count,0);
    return countnum;
}
console.log(common([1,2,3],[3,4,5,1]));
