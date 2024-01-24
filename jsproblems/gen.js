function* numbers(){
    let even=1;
   
    while(true){
        yield even;
        even+=2;
        
    }

}

const digits=numbers();
for(let i=1;i<=5;i++)
{
    console.log(digits.next().value);
}
