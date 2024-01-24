
function addition(value){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log(`The number is ${value}`);
            resolve (value);
        },3000);
    });
}

async function sum(){
    const num1= await addition(5);
    const num2= await addition(20);
    const result = num1+num2;
    console.log(`The sum of two numbers ${result}`);

}

sum();


