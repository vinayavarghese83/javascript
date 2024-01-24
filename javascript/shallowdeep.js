// const originalObject ={
//     name:'joe',
//     age:23,
//     address:{
//     shallowCopytreet:'dsffw',
//     place:'dfwef',
//     }
//     };
//     const shallowCopy = {...originalObject};
//     const deepCopy = JSON.parse(JSON.stringify(originalObject));
//     shallowCopy.address.pin=1342325;
//     console.log(shallowCopy.address.pin);
//     console.log(originalObject.address.pin);
//     console.log(deepCopy.address.pin);
    

let arr1= [1,2,3,[4,5]]

let arr2= [...arr1];

arr2[2]=10
console.log(arr1);
console.log(arr2);