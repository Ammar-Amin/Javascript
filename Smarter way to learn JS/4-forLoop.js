// Ch 18 - 20

// for ( let i = 0; i<2; i++) {
//         console.log('@');
// }


// "99 bottles of beer on the wall, 99 bottles of beer."
// "Take one down and pass it around, 98 bottles of beer on the wall."

// this is a song, till bottles get to 0
// we can use loop to print the while song 

for (let i = 99; i > 0; i--) {
    // console.log(i + " bottles of beer on the wall, " + i + " bottles of beer,");
    // console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
}


// Print each Element of array  
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

// for (var i = 0; i <= 4; i++) {
//     console.log(cleanestCities[i]);
// }



// check if city is in the Array, if it is log("..."), else log("...");
var cityToCheck = "Santa Fe";
var matchFound = false;

// for (var i = 0; i <= 4; i++) 
// instead of using 4 we can use .length of Array 
for (var i = 0; i < cleanestCities.length; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        console.log("It's one of the cleanest cities");
        break;    // matchFound exit the loop
    }
}
if (matchFound === false) {
    console.log("It's not on the list");
}



// Nested for loop 
// we have 5 firstNames and 4 lastnames 
// so the posibilities - 5 * 4 i.e. 20 names

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];

for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        // adding name to the fullNames arr 
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}
// console.log(fullNames);