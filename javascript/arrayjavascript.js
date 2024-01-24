
//sum of even numbers

/*function sumofEven(arr){
    
    return arr.reduce((sum,curr)=>(curr%2==0)?sum+curr:sum)

}
console.log(sumofEven([2,1,3,4,5,6]));*/


//maximum value

/*function maxvalue(arr){

    return arr.reduce((acc,curr)=>acc>curr?acc:curr)

}
console.log(maxvalue([2,1,9,1,5,0]))*/



//filter for type 

/*const arr1=['apple',34,'asda',43456];
const arr2=arr1.filter((value)=> typeof value !='string');
console.log(arr2);*/

//sum of two numbers

/*function addition(num1,num2){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
        
        let sum=num1+num2;
        resolve(sum);
    },1000);
    
});
}

addition(4,3)
.then((sum)=>console.log('sum of numbers is',sum))
.catch((error)=>console.error(error));*/



// multiplication using reduce
/*function multiplication(arr){
    return arr.reduce((acc,curr)=>acc*curr);
}
console.log(multiplication([1,2,3,4,5]));*/


//multiplication using promise

/*function multiplication(array){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            let arr1=array.reduce((pdt,curr)=>pdt*curr);
            resolve(arr1);
        },2000);
    })
}
multiplication([2,1,6,4,5])
.then((result)=>console.log('the product is:',result))
.catch((error)=>console.error(error));*/


//palindrome

function pallindrome(string){
    return string=== string.split('').reverse().join('');
}
let result=pallindrome("arya");

if(result===true){
    console.log("is a pallindrome");
}
else{
    console.log("not a pallindrome");
}

// function palindrome(string) {
//     return string === string.split('').reverse().join('');
//   }
  
//   let result = palindrome("arya");
  
//   if (result === true) {
//     console.log("is a palindrome");
//   } else {
//     console.log("not a palindrome");
//   }
  