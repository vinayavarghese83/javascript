// function doSomethingAsync(callback) {
//     setTimeout(function () {
//       console.log("Async operation completed");
//       callback();
//     }, 1000);
//   }
  
//   function myCallback() {
//     console.log("Callback function executed");
//   }
  
//   doSomethingAsync(myCallback);


//   function addition(callback){
//     setTimeout(function(){
//         console.log("The sum of Two numbers:");
//         callback();
//     },1000);

//   }
//   function sumofnum(){
//     console.log(5+6);
//   }
//   addition(sumofnum);

// function addnum(num1,num2,callback)
// {
//     const sum=num1+num2;
//     callback(sum);
// }

// function res(result){
//     console.log("the sum is"+result);
// }

// addnum(1,2,res );

function addNum(number1,number2,callback)
{
    const sum=number1+number2;
    callback(sum);
}

function display(result){
    console.log("The sum"+result);
}
 addNum(5,6,display)