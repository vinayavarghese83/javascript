// function maxarray(arr){
//     return arr.reduce((max,curr)=>(curr>max?curr:max),arr[0]);
// }
// console.log(maxarray([5,2,7,1,9]));

// function minarray(arr){
//     return arr.reduce((min,curr)=>(curr<min?curr:min),arr[0]);
// }
// console.log(minarray([2,5,8,3,0]));


function avgarray(arr){
    return arr.reduce((acc,curr)=>(acc+curr))/arr.length;
    
}
console.log(avgarray([2,3,4,1]));
