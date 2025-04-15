/* Learn others examples 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String */
const name = "Abhishek"
const age = 29
/* basic syntax for concatinate */
//console.log(name + age + " Value"); // Abhishek29 Value 

/* String interpolation its a modren sytanx*/
console.log(`Hello my name is ${name} and my age is ${age}`); // Hello my name is Abhishek and my age is 29

/* If we run same line in console it will not work so just pass myName */
const myName = new String('Abhishek');  // Decalare variable another way 

console.log(myName[0]); // key value is A 

/* In console we can see list of prototypes so here also we can get like this */
console.log(myName.__proto__); // {} 

console.log(myName.length); // 8 

/* In console we will get prototype in that list we can see all funtion*/
console.log(myName.toUpperCase()); // ABHISHEK

/* check the position of char also */
console.log(myName.charAt(3)); // i 
console.log(myName.indexOf('h'));   // 2

/* storing in one var and slicing*/ 
const newString = myName.substring(0,4); // here negative value not worked 
console.log(newString); // Abhi  0123 and last 4 its not include

const anotherString = myName.slice(-7, 4);
console.log(anotherString); // bhi 1st it will take - then it will count

const twoString = "   Abhishek  "
console.log(twoString); //    Abhishek  this will not remove spaces
console.log(twoString.trim()); // Abhishek this will give result with all spaces

const url = "https://Abhi.com//abhi%20Boss"
console.log(url.replace('%20','-')); // https://Abhi.com//abhi-Boss

console.log(url.includes('Abhi'));  // true

const agName = new String("Karnataka-Banglore");
console.log(agName.split('-')); //  [ 'Karnataka', 'Banglore' ]