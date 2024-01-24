function person(name,age)
   {
    this.name=name,
    this.age=age,
    this.sayHello = function() {
    console.log(`name ${name} and age ${age}`);
    };
    }
    var person1 = new person ('dwef',34);
    var person2 = new person('wefwrgeg',23);
    console.log(person1.name);
    person2.sayHello();
    