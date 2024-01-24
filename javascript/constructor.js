function person(name,age) {
    this.name=name;
    this.age=age;

    this.sayHello=function(){
        console.log(`hello,name ${name} age ${age}`);
    };
   

}
var person1=new person('dvsdw',21);
var person2=new person('sdvswef2dw',2123);

console.log(person1.name);
person2.sayHello();