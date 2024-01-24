// const person = {
//     name: "John",
//     address: {
//       city: "New York",
//       postalCode: null // Assume postalCode might be null or undefined
//     }
//   };
  
//   // Without optional chaining
//   // This would result in an error if address or postalCode is null or undefined
//   const post= person.address.postalCode;
//   console.log(post);
//   const postalCode = person.address ? person.address.postalCode : undefined;
  
//   console.log(postalCode); // Output: undefined
  
//   // With optional chaining
//   // If any intermediate property is null or undefined, the result will be undefined
//   const postalCodeWithOptionalChaining = person.address?.postalCode;
  
//   console.log(postalCodeWithOptionalChaining); // Output: undefined


  const student={
    name:"Arya",
    age:25,
    address:{
        place:"sdv",
        city:"dw",
        pin:null
    },
  };

  const pos = student.address?.pin;
  console.log(pos);

  