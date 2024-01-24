console.log('Start');

setTimeout(function () {
  console.log('Inside setTimeout');
}, 0);

Promise.resolve().then(function () {
  console.log('Promise resolved');
});

console.log('End');
