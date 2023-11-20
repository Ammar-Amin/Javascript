// Ch 26 - 

// rounding a no. 
let num = 1.000001
// let num = 1.999999;

// round 1.499999 to 1 and 1.500000 to 2
console.log(Math.round(num));

// round 1.000001 and 1.999999 both to 2
console.log(Math.ceil(num));

// round 1.000001 and 1.999999 both to 1
console.log(Math.floor(num));



// 27. getting random No 

var randomNum = Math.random();
// range will form 0.0000000000000000 to 0.9999999999999999
// i.e. 16 digits after decimal point 
console.log(randomNum);

var numTillSix = (randomNum * 6) + 1;
var wholeNumTillSix = Math.floor(numTillSix);
// console.log(wholeNumTillSix);



// 28. converting string to int 

let a = "33";
var b = a + 1;            // this will concatinate the string a 
// console.log(b);

var b = parseInt(a) + 1;  // addition will happen.
// console.log(b);

// console.log(parseInt(1.9999));
// console.log(parseFloat(1.67));



// 29. converting string to number and number to string 

var c = "53";
var c = Number(c);
// console.log(c+12);

let floatString = "12.393824";
// console.log(Number(floatString));


var numb = 12345;
var strNum = numb.toString();
// console.log(strNum);



// 30. controlling the length of decimal 

var fNum = 89.5562849562;
var fiveDigitsAfterDecimal = fNum.toFixed(5);
// console.log(fiveDigitsAfterDecimal);
// console.log(fNum.toFixed());

