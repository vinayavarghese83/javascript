// // const promise1= new Promise((resolve,reject)=>{
// // setTimeout(() => {
    
// //     resolve(console.log("first promise"));
// // }, 1000);
// // }
// // )

// // const promise2= new Promise((resolve)=>{
// //     setTimeout(() => {
// //         resolve(console.log("Second promise"));
// //     }, 1000);
// //     }
// //     )

// // Promise.all([promise1,promise2])
// // .then((resolve)=>console.log("The promises resolved"))
// // .catch((erro)=>console.error("not fulfilled"));
    

// const promise1 = new Promise((resolve, reject) => setTimeout(() => reject('One failed'), 1000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 1500));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 500));

// Promise.all([promise1, promise2, promise3])
//   .then(result => console.log('First Promise Resolved:', result))
//   .catch(errors => console.error('All Promises Failed:', errors));



const promise1 = new Promise((resolve, reject) => setTimeout(() => reject('One failed'), 100));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 500));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 400));

Promise.all([promise1, promise2, promise3])
  .then(result => console.log('First Promise Resolved:', result))
  .catch(error => console.error('All Promises Failed:', error));
