// //sum of array elements
// function sumArray(array1){
//     const promise=new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>{
//             resolve(array.reduce((acc,curr)=>{
//             return acc+curr;
//             },0)
//             );
//         },3000);
        
        
//     });   
//     return promise; 
//     }

//     const array=[1,2,3,4,5]
//     sumArray(array)
//     .then((result)=>console.log("Sum",result))
//     .catch((error)=>console.error(error))



// //maximum value of an array

// // function max(array){
// //     const promise=new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //            return resolve(array.reduce((acc,curr)=>acc>curr?acc:curr
// //                 )
// //             )
// //         },2000);
// //     });
// //     return promise;
// // }

// // const array=[1,2,3,1,4,2,7,9];
// // max(array)
// // .then((result)=>console.log('Maximum value',result))
// // .catch((error)=>console.error(error));



// function maxarray(){
//     const promise = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return resolve(array.reduce((acc,curr)=>acc>curr?acc:curr))
//         },2000);
//     });
//     return promise;
// }

// const array=[1,4,2,8,4,9,7];
// maxarray(array)
// .then((result)=>console.log('Maximum value :',result))
// .catch((error)=>console.error(error));


const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('operation succeed');
    },1000);
    });
    myPromise
    .then((result)=>console.log('success:',result))
    .catch ((error)=>console.error('error:',err));
    

// function async(){
// const promise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//     let a= Math.random();
//     if(a>1)
//     {
//         res('Success')
//     }
//     else{
//         rej('failed')
//     }
// },2000);

// });
// promise.then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// }

// async();

