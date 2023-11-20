// Chp 35 - 38

function time() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();
    console.log("Time - " + theHr + ":" + theMin + ":" + theSec);
}
time();

// let forEverySec = setInterval(() => {
//     time();
// }, 1000);

// setTimeout(() => {
//     clearInterval(forEverySec);
// }, 5000);




// we know function with arguments 
// argument is a string or nums passed inside of paranthesis of fun 
// parameter is a variable passed inside of paranthesis of fun 




// function returns a function .
function tax(no) {
    var total;
    if (no < 50){ total =  no + 5 }
    else if (no < 100){ total =  no + 3 }
    else { total = no }
    return total;
}

function price (b) {
    var tot = ("Amout is : " + b + "rs with tax : " +  tax(b)+ 'rs');
    return tot;
}

console.log(price(12));


// diff between global and local variables 
// variable declaired in main code is global and
// variable declaired inside of function is local 
