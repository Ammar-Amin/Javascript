// Ch 21 - 25

var country = "InDiA";
var uprCase = country.toUpperCase();
var lwrCase = country.toLowerCase();
// console.log(uprCase, lwrCase);



// extracting parts of string 

var firstChar = country.slice(0, 1);
var restChar = country.slice(1);
// console.log(firstChar, restChar);
var capFirst = firstChar.toUpperCase();
var smlRest = restChar.toLowerCase();

var idealString = capFirst + smlRest;
console.log(idealString);


var month = ['JANUARY', 'FEBURARY', 'MARCH'];
for (var i = 0; i < month.length; i++) {
    if (month[i].length > 3) {
        // slice elements from 0th index to before 3rd index i.e. 2nd index
        console.log(month[i].slice(0, 3));
    }
}


var str = "My name is Ammar  Amin";
var twoSpaces = false;
for (var i = 0; i < str.length; i++) {
        if (str.slice(i, i + 2) === "  ") {
        twoSpaces = true;
        console.log("No double spaces!");
        break;
    }
}
// not working
// if (twoSpaces = false) {
//     console.log(str)
// }




// finding segment of string (23)

var text = "World War II happened in 1980. remember World War II, cuz their were million who got killed during World War II"
for (var i = 0; i < text.length; i++) {
    // if continous 12 chars = World War II 
    if (text.slice(i, i + 12) === "World War II") {
        // whole string before i + "Second World War" + rest of the string (i+12 is for the Second World War)
        text = text.slice(0, i) + "Second World War" + text.slice(i + 12);
    }
}
// console.log(text);


// we can shorten this code using Indexof Method 

var firstChr = text.indexOf("World War II");
// if "World War II " not in the text, then -1 will be assingn to variable
if (firstChr !== -1){
    text = text.slice(0, firstChr) + "Second World War" + text.slice(firstChr+12);
}
// console.log(text);


// text.lastIndexOf 

let charbi = "Mai ek Bht Badi Charbiiii hu."
let abc = charbi.lastIndexOf("ek")
if (abc !== -1){
    charbi = charbi.slice(0, abc) + "do" + charbi.slice(abc + 2);
}
// console.log(charbi)



// finding a chr (24)

// to get the first char of string - 
// 1 way is to slice(0,1)
// another is CharacterData(0)

let animal = "Kutta";
let a = animal.charAt(0);
// console.log(a);



// replacing char (25)

// 1 way was the loop and slice method from above 
// 2nd was indexOf and slice method 
// this one is the simplest amoung all 

let strg = "hello, I am Ammar Amin. I graduated from ..., I am 21 years old.";
let b = strg.replace("I am", "I'm");
// console.log(b);

// but this will change only 1 occarence 
// to change all the similar value of string 
let c = strg.replace(/I am/g , "I'm");  // g for global
console.log(c);
