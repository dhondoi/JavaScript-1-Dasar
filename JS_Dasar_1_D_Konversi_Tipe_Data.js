// Konversi ke String
const number = 123;
const strNumber = String(number);
console.log(strNumber); // output: "123"

const boolean = true;
let strBoolean = boolean.toString();
console.log(strBoolean); // output: "true"

strBoolean = String(boolean);
console.log(strBoolean); // output: "true"

// handling null or undefined value
const param = null;
// const stringFromParam = param.toString(); // error
// console.log(stringFromParam);

// Konversi ke Number
const strNumber1 = "123";
const numFromString = Number(strNumber1);
console.log(numFromString); // output: 123
const strFloat = "3.14";
const floatFromString = Number(strFloat);
console.log(floatFromString); // output: 3.14
const boolean1 = true;
const numFromBoolean = Number(boolean1);
console.log(numFromBoolean); // output: 1
const notNumber = Number("Not Number");
console.log(notNumber); // output: NaN
const cm = "20cm";
const intFromCM = parseInt(cm);
console.log(intFromCM); // output: 20
const px = "64px";
const intFromPX = parseInt(px);
console.log(intFromPX); // output: 64
const parseNotNumber = parseInt("Not Number");
console.log(parseNotNumber); // output: NaN
const cm1 = "20.55cm";
const floatFromCM = parseFloat(cm1);
console.log(floatFromCM); // output: 20.55
console.log(parseInt(cm1)); // output: 20
const px1 = "64.23px";
const floatFromPX = parseFloat(px1);
console.log(floatFromPX); // output: 64.23

// Konversi ke Boolean
const number1 = 123;
const string = "Dicoding";
const empty = null;
const boolFromNumber = Boolean(number1);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);
console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false
// nilai falsy
false;
0 - 0;
0n;
("");
null;
undefined;
NaN;

// Konversi Implisit
const age = 20;
const message = "Umurku: " + age;
console.log(message); // output: Umurku: 20
// string + number menghasilkan string, jadi + bukan operasi aritmatika
console.log(age + "20"); // output : 2020 (string version)
const strNumber2 = "123";
const result = strNumber2 * 2;
console.log(result); // output: 246
const bool = true;
const result1 = 1 + bool;
console.log(result1); // output: 2
