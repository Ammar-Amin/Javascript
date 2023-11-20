// Ch 10 - 14

// if 
let score = 10;
if (score == 10) {
    console.log("Full Marks");
}

// if-else 
score = 5;
if (score == 10) {
    console.log("Full Marks");
} else {
    console.log("Not Enough");
}

// if-else-if-else
score = 9
if (score == 10) { console.log("Got 100%") }
else if (score == 9) { console.log("Got 90%") }
else { console.log("Poor Result") }



// testing set of conditions 
let weight = 70;
let height = 150;

// AND operator
if (weight === 70 && height === 150) {
    console.log("Normal");
} else if (weight > 70 && height > 150) {
    console.log("OverWeight");
} else if (weight < 70 && height < 150) {
    console.log("UnderWeight");
} else
    // OR operator
    if (weight < 40 || height < 50) {
        cosole.log("Dourf");
    }



// Nested if-else (if-else k under if-else)

// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         g = h;
//     }
//     else {
//         e = f;
//     }
// }
// else {
//     e = f;
// }