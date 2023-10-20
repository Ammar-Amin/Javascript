// Chp 31 - 34

var rightNow = new Date();
// console.log(rightNow);

var day = rightNow.getDay();  // this will return a no. form 0 to 6
var date = rightNow.getDate();
var month = rightNow.getMonth(); // return a no. from 0 to 11
var year = rightNow.getFullYear();
var hour = rightNow.getHours();
var min = rightNow.getMinutes();
var sec = rightNow.getSeconds();
var milsec = rightNow.getMilliseconds(); 

// getTime gives you the number of milliseconds that have elapsed since midnight Jan 1, 1970.
var time = rightNow.getTime();

// array containing the 7 days of week 
var dayArr = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

// passing the no. from above to the array as an index 
var actualDay = dayArr[day];


var monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
var actualMonth = monthArr[month];

var arr = [actualDay, date, actualMonth, year, hour, min, sec, milsec, time];
console.log(arr);




// from a future date, calculate the No. of days from today to get to that future date.  

var today = new Date();
var future = new Date("June 30, 2030");

// getTime() give us no. of millisec passed from Jan 1, 1970. 
var diffInTime = future.getTime() - today.getTime();
// console.log(diffInTime); // it's a huge no. of millisec 

// converting millisec to days - 
// sec(1000), mins(60), hours(60), days(24)
var convertDay = (diffInTime/(1000 * 60 * 60 * 24));
// console.log(convertDay);

// rounding off the day
var intDay = Math.floor(convertDay);
console.log(intDay);



// Changing the Elements of a date and time 
var d = new Date();


// changes the year of the  Date object to 2002,
// leaving all other elements of the Date object intact.
d.setFullYear(2002);

// changes the month of the Date object to 7 (July),
// leaving all other elements of the Date object intact. 
d.setMonth(7);

d.setDate(5);           // same
d.setHours(20);          // here 
d.setMinutes(15);       // from 
d.setSeconds(52);       // above
d.setMilliseconds(786); // comments

console.log(d);