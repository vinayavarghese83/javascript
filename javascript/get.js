class temperature{
    constructor(celsius){
         this._celsius = celsius;
    }

    get fahranheit(){
           return this._celsius*9/5+32;
    }
    set celsius(value){
        this._celsius=value;
    }
}

const currentTemp = new temperature(25);
console.log(currentTemp.fahranheit);
currentTemp.celsius=30;
console.log(celsius);