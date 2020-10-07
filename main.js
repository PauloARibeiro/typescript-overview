"use strict";
exports.__esModule = true;
var message = 'hello';
console.log(message);
//----------------------------------------
//----------------------------------------
// VARIABLE DEFINITIONS
//----------------------------------------
//----------------------------------------
// boolean, number, string, array, enum, unknown, any, void, null, undefined, never, object, tuple
var isAlexCool = true;
var total = 17;
var name = 'Derik';
var isGabiCool = false;
// this doesnt work
isGabiCool = 'true';
// Not much use for these, they're usally used as sub types
var n = null;
var u = undefined;
var isNull = null;
var myName = undefined;
// You can declare arrays like this, either one is fine
var listOfCats1 = ['boss', 'ruca', 'black cat'];
var listOfCats2 = ['boss', 'ruca', 'black cat'];
// If you want an array with mixed types you can use a tuple
var tupleList1 = ['hello', 22];
var tupleList2 = [true, 22];
// You can't do this
// const tupleList3: [string, number] = [22, 'hello']
// Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color1 = Color.Blue;
// prints out the position, not very friendly
console.log(color1);
var Color2;
(function (Color2) {
    Color2["Red"] = "Red";
    Color2["Green"] = "Green";
    Color2["Blue"] = "Blue";
})(Color2 || (Color2 = {}));
var color2 = Color2.Blue;
console.log(color2);
// Any && unkown
var woah1 = 17;
woah1 = 'string';
woah1 = true;
woah1.name = 'Tyrone';
woah1();
var woah2 = 17;
woah2 = 'string';
woah2.name = 'Tyrone';
woah2();
// Multiple types
var multi1 = 2;
multi1 = true;
multi1 = 17;
var multi2 = 'Coolio';
multi2 = true;
multi2 = 20;
multi2 = 'Cat';
//----------------------------------------
//----------------------------------------
// VARIABLE DEFINITIONS END
//----------------------------------------
//----------------------------------------
//----------------------------------------
//----------------------------------------
// FUNCTIONS
//----------------------------------------
//----------------------------------------
var add = function (num1, num2) { return num1 + num2; };
add(16, 1);
add(16, '1');
// this right here rocks !
add();
//----------------------------------------
//----------------------------------------
// FUNCTIONS END
//----------------------------------------
//----------------------------------------
