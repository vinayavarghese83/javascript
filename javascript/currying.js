function add(a, b ,c) {
    return a + b ;
  }
  
  function curry(fn, ...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curry(fn, ...args, ...moreArgs);
    }
  }
  
  const add5 = curry(add,5);
  const result = add5(10);
  
  console.log(result); // 15