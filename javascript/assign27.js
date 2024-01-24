const read = require("readline-sync");

function main(){
    var height = parseFloat(read.question("Enter your height:"));
    try{
        if(isNaN(height)) throw new Error("notANumberError");
        else if(height>200) throw new Error ("HugeHeightError");
        else if(height<40) throw new Error ("TinyHeightError");
    }
    catch(err)
    {
        console.log("Error is "+err);
    }

    finally{
        if(height>40 && height<200)
        {
            console.log("Valid");
        }
        
    }
}

main();



