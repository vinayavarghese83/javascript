function* simple(){
    console.log(5);
    yield 4;
    console.log(3);
    yield 2;
    console.log(5+6);
    yield 3;
    console.log("finish");
    
    
}
const sum=simple();
console.log(sum.next());
console.log(sum.next());
console.log(sum.next());

console.log(sum.next());
