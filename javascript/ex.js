// const targetObject={
//     name:"dvneirnv",
//     age:23,
// }

// const handler={
//     get:function(target,property){
//     console.log(`the getting property ${property}`);
//     return target[property];
// },
//       set :function(target,property,value){
//         console.log(`the setting prop is ${property} and value${value}`);
//         target[property]=value;
//         return true;

//     }
// }

// const proxy= new Proxy(targetObject,handler);
// console.log(proxy.name);
// proxy.age=34;
// console.log(targetObject.age);


//////promise
// const myPromise = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("wrgwr");
//       },2000);
//     });

//     myPromise
//     .then((result)=>console.log("success",result))
//     .catch((error)=>console.error("error",err));

// const promise1 = new Promise((resolve,reject)=>setTimeout(()=>reject("failed"),200));
// const promise2 = new Promise((resolve)=>setTimeout(()=>resolve("second"),1500));
// const promise3 = new Promise((resolve)=>setTimeout(()=>resolve("third"),500));

// Promise.any([promise1,promise2,promise3])
// .then(results=>console.log('asfqef',results))
// .catch(errors=>console.error('the errors',errors));




// const fruits=[["mango","apple"],"plum"];
// const len=fruits.length;
// console.log(len);
// fruits.push("kiwi");
// console.log(fruits);
// let flatten=fruits.flat();
// console.log(flatten);
// let rev=flatten.reverse();
// console.log(rev);
// const person = {
//     name: "John Doe",
//     age: 30,
//     isStudent: false,
//     courses: ["Math", "History", "English"],
//     address: {
//       city: "Exampleville",
//       country: "Exampleland"
//     }
//   };
  
//   const jsonString = JSON.stringify(person);
//   console.log(jsonString);
// const jsonString = '{"name":"John Doe","age":30,"isStudent":false,"courses":["Math","History","English"],"address":{"city":"Exampleville","country":"Exampleland"}}';

// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject);
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
