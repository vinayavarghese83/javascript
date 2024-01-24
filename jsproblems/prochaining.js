function asyncTask1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 1 completed");
        resolve(1);
      }, 1000);
    });
  }
  
  function asyncTask2(resultFromTask1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 2 completed with result from Task 1:", resultFromTask1);
        resolve(2);
      }, 1000);
    });
  }
  
  function asyncTask3(resultFromTask2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Task 3 completed with result from Task 2:", resultFromTask2);
        resolve(3);
      }, 1000);
    });
  }
  
  // Promise chaining
  asyncTask1()
    .then(asyncTask2)
    .then(asyncTask3)
    .then(finalResult => {
      console.log("Final Result:", finalResult);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  