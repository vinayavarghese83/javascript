const student1={
    name:"ATJHI",
    age:23,
}

const print=function fullname(place,state){
    console.log(this.name+" "+this.age+" "+place+" "+state);
}


print.apply(student1,["asdasd","asdsd"]);