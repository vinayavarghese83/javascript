// const array=[2,1,3,1,4,3,5,6]

// const arrayunique=array.filter((value,index,array)=>
//     {
//         return array.indexOf(value)===index;
//     });
//     console.log(arrayunique);

const arr1=[1,1,1,1,1];
let sum=0;
const arr2= arr1.filter((value,index,arr1)=>
{
    return arr1.indexOf(value)===arr1.lastIndexOf(value);

});
for(i=0;i<arr2.length;i++){
    sum+=arr2[i];
}
if(sum!=0)

{
    console.log("The unique elemenets are "+arr2);
     console.log("The sum is "+sum);
}

else{
    console.log("There are no unique elements and sum is",+sum);
}


