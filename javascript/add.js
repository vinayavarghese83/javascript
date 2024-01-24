function addition(a,b){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            const sum=a+b;
            resolve(sum);

        },1000);
    });
}

function multiplication(c,d){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            const pdt=c*d;
            resolve(pdt);
        },3000);
    });
    
}
addition(4,3)
.then(sum=>{
    console.log('sum=',sum)
    return multiplication(sum,2);
})
.then(finalanswer=>
    {
        console.log('product is',finalanswer);
    })


.catch(error=>console.error(error));
