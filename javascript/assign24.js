const read = require("readline-sync");

class Area {

    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area{
    static main(){
        const myClass = new MyClass();
        console.log("1.CIRCLE")
        console.log("2.SQUARE")
        console.log("3.RECTANGLE")
        console.log("4.TRIANGLE")
        console.log("5.EXIT")
        const choice=parseInt(read.question("Enter the choice:"));
        switch(choice){
            case 1:  
                    let radius = parseFloat(read.question("Enter the radius of the circle:"))
                    const circleArea = myClass.circle(radius);
                    console.log("Area of the circle is :"+ circleArea);
                    
                    break;
        
            case 2:  
                    let side = parseFloat(read.question("Enter the length of side of a square:"))
                    const squareArea = myClass.square(parseFloat(side));
                    console.log("Area of the square is :"+ squareArea);
                    break;
            case 3:  
                    let length  = parseFloat(read.question("Enter the length  of the rectangle :"))
                    let width  = parseFloat(read.question("Enter the length  of the rectangle :"))
                    const rectangleArea = myClass.rectengle(parseFloat(length,width));
                    console.log("Area of the rectengle is :"+ rectangleArea);
                    break;
            case 4:  
                    let base  = parseFloat(read.question("Enter the base  of the triangle :"))
                    let height  = parseFloat(read.question("Enter the height  of the triangle :"))
                    const triangleArea = myClass.triangle(parseFloat(base,height));
                    console.log("Area of the rectengle is :"+ triangleArea);
                    break;
            case 5:
                console.log("Exiting the programme");
                break;

            default :
                 console.log("Enter a valid choice!!!");
        }
        if(choice!=5){
            MyClass.main();
        }
    }
}









MyClass.main();