var factorX = require("./counter-factory.js");
var factorY = require("./counter-factory.js");

var counterA = factorX.create();
var counterB = factorX.create();
var counterC = factorY.create();
var counterD = factorY.create();
for( var i = 0; i < 5;  i++ ) {
    console.log( "Counter A: %s, %s, %s, %s",
        counterA.step(),
        counterB.step(),
        counterC.step(),
        counterD.step());
}


// objek factory
