// function flatten(arr){
//     return arr.reduce((flat,curr)=>flat.concat(curr),[]);
// }
// console.log(flatten([[3,2],[1,4],5]))


// function countwords(words){
//     return words.reduce((countObj,word)=>{
//         countObj[word]=(countObj[word]||0) +1;
//         return countObj;
//     },{})
// }
// console.log(countwords(['apple','banana','apple','kiwi']));

function factorial(n){
    return Array.from({length:n}, (_,i)=> i+1).reduce((product,num)=>product*num,1);

}
console.log(factorial(5));