const result = myFilter([1, 2, 3, 4, 5],isSumEven); console.log(result);
function myFilter(myArray, callback) {
    let sum = 0;
for (let i = 0; i < myArray.length; i++) {
     sum=sum+ myArray[i];
}
return sum;
}
function isSumEven(num) {
return (num % 2 === 0);
}