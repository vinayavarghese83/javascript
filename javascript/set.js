function name(){
    console.log("ATHIRA");
}

const print=setInterval(name,1000);
setTimeout(()=>clearInterval(print),5000);
