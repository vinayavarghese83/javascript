function* simpleGenerator(){
    console.log("start");
    yield 1;
    console.log("after first");
    yield 2;
    console.log("after second");
    yield 3;
    console.log("end");
    
}

const generator = simpleGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());