const score = 500;      
console.log(score); // 500 - in console also you can see the same values
 
const balance = new Number(100);
console.log(balance);   // [Number: 100] - in console also you can see Number {100} and prototypes
console.log(balance.toString()); // 100 now its converted
console.log(balance.toString().length); // 3 now we can check the length
console.log(balance.toFixed(2)); // 100.00

const otherNumber =  25.1234
console.log(otherNumber.toPrecision(4)); // 25.12

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000
/* In console also we can see direct remaining function related for Number. */

/* +++++++++++++ MATHS +++++++++++++ */

console.log(Math); // Object [Math] {} this is object and this lot of properties
/* We can see related fun in console Math (enter) */
console.log(Math.abs(-4));      // 4
console.log(Math.round(4.6));   // 5
console.log(Math.ceil(4.2));    // 5
console.log(Math.floor(4.6));   // 4 
console.log(Math.min(2,4,6,8)); // 2
console.log(Math.max(2,4,6,8)); // 8

/*  Every time it will display the random numbers */
console.log(Math.random()); // it run show diff values for everytime from 0 to 1
console.log(Math.random()); // 0.10910287265410368
console.log((Math.random()*10)+1); // sometime 0.1 values also come so added 
console.log((Math.random()*10)+1);  // 6.073750262771148

console.log(Math.floor(Math.random()*10)+1); // 6 here we have to print exact roundof values from 1 to 9

/* here we have to print the random numbers between 10 to 20 */
const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1))); //here we get all number like 0 6 9 

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // now you can get start from 10 value