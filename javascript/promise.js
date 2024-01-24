const promise1 = new Promise((resolve, reject) => setTimeout(() => reject('One failed'), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 1500));
const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 500));

Promise.any([promise1, promise2, promise3])
  .then(result => console.log('First Promise Resolved:', result))
  .catch(errors => console.error('All Promises Failed:', errors));