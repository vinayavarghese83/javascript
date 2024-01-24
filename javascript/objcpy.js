const student={
    name:"athira",
    age:23,
}
const copy ={...student};
copy.age=22;
console.log(copy.age);
console.log(student.age);
