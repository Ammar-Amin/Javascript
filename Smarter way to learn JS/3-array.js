// Ch 15 - 17

// An empty array 
let pet = [];
// adding elements to array 
pet[0] = 'dog';
pet[1] = 'cat';
pet[2] = 'bird';


let money = ['dollar', 'rupee', 'dirham', 'euro'];
// index of array - 0, 1, 2, 3
console.log(money);



// adding and removing elements using Array Methods

// add element at last
money.push('paisa');
// remove the last element
money.pop();
// add element at start 
money.unshift('Won');
// remove the first element 
money.shift();



// extracting elements 

// splice(add at index ,remove no. of elements ,elements to be added)
// money.splice(1,2,'cent', 'paisa');
// console.log(money);

// slice() use to make copy of an array 
// slice(index of 1st element to be copied, index of the element after the last element to be copied)
// slice(jis index se copy krna h, jiske index k pehle tak copy krna h)
let a = money.slice(0,2);
console.log(a);

// Note for slice() - 
// You must assign the sliced elements to an array. It could, of course, be the same array
// from which you're doing the slicing. In that case, you'd be reducing the original array to
// only the copied elements.