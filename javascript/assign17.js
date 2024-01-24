const read = require("readline-sync");

class Calculator{
    
    addition(num1,num2) {
        return num1+num2;
    }

    subtraction(num1,num2) {
        return num1-num2;
    }

    multiplication(num1,num2) {
        return num1*num2;
    }

    division(num1,num2){
        return num1/num2;
    }
}

class Myclass extends Calculator{
    static main(){
        const myClass = new Myclass();
        
        console.log("1.ADDITION")
        console.log("2.SUBTRACTION")
        console.log("3.MULTIPLICATION")
        console.log("4.DIVISION")
        console.log("5.EXIT")
        
        const choice=parseInt(read.question("Enter the choice:"));
        if(choice!=5){
        let num1 = parseFloat(read.question("Enter the first number:"));
        let num2 = parseFloat(read.question("Enter the second number:"));
        switch(choice){
            case 1: 
               
               const sum = myClass.addition(num1,num2);
               console.log("The sum of two numbers is :" +sum);
               break;
            case 2: 
               
               const subt = myClass.subtraction(num1,num2);
               console.log("The difference between  two numbers is :" +subt);
               break;
           
            case 3:
               
                const product = myClass.multiplication(num1,num2);
                console.log("The product of two numbers is :" +product); 
                break;
            
            case 4:
               
                const div = myClass.division(num1,num2);
                console.log("The division of two numbers is :" +div); 
                break;
            
           
            default:
                
                console.log("Enter a valid choice!!!")
            }
            
        }
        else
            {
                console.log("Enter a valid choice")

            }
        
        
   
    }
    
    
}



Myclass.main();