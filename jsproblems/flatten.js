// function flatten(array){
//     return array.reduce((flat,curr)=>flat.concat(curr),[])

// }

// console.log(flatten([1,[2,[3,4],5]]));


function flatten(array) {
    return array.reduce((flat, curr) => {
      return flat.concat(Array.isArray(curr) ? flatten(curr) : curr);
    }, []);
  }
  
  console.log(flatten([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]
  