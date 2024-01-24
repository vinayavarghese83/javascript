let name={
    fname:"ATHIRA",
    lname:"AG",
   
}

let printFullName = function(place,state){
    console.log(this.fname+ " " +this.lname+" "+place+" "+state );
}


let name2={
    fname:'Arya',
    lname:'AG'
}
printFullName.call(name,"rtrtrth","rtgt4");
printFullName.apply(name2,["4rg45","rgrth"]);

let printMyName=printFullName.bind(name2,"mannampetta","thrissur");
printMyName();