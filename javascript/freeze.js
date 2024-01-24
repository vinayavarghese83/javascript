const obj = {
  name: "John",
  age: 30,
};

Object.preventException(obj);

obj.age = 31; // This will throw an error
console.log(obj.age); 