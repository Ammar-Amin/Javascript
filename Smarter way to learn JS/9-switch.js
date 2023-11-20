// Ch 39 & 40

// using if else 
let today = "sat";
if(today ==  "sun" || today ==  "sat") {
    console.log("Hurray!");
}
else if(today ==  "fri") {
    console.log("Phew..!");
}
else {
    console.log("Shit Man");
}



// using switch 

switch (today) {
    case "sun":
        console.log("Hurray!");
        break;
    case "sat":
        console.log("Hurray!");
        break;
    case "fri":
        console.log("Phew..!");
        break;
    default:
        console.log("Shit Man");
}