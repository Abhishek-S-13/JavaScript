/* For extra information https://262.ecma-international.org/5.1/#sec-11.4.3 */

/* *****  Primitive Data 7 Types (Immutable, stored by value) ***** *//*
1. String    - Represents a sequence of characters.
2. Number    - Includes both integers and floating-point numbers. 
3. Boolean   - Represents true or false.
4. Null      - Represents an intentional absence of value.
5. Undefined - A variable that has been declared but not assigned a value.
6. Symbol    - Unique and immutable value, often used as object keys.
7. BigInt    - For very large integers beyond the Number limit.
*/

/* *******************  Non-Primitive Data Types ******************* *//*
1. Reference 
2. Array: Special kind of object for ordered data.
3. Object: A collection of key-value pairs. Can include arrays, functions, and other objects.
4. Function: First-class object that can be stored in variables.
*/

const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outSideTemp = null

let userEmail; 
/******** SYMBOL ************/
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

/********* BIG INT *************/
// const bigNumber = 123456543211455n

/* ************ Reference ************ */
const heros = ["Darshan","Yash","Punith"]
let myObject = {                // we can store in variable
    name: "Sudeep", age: 35, 
}
console.log(typeof heros); // object

/* *********** FUNCTIONS ************* */
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction); // function or object

/* ********** ARRAY *********** */
let fruits = ["apple", "banana", "cherry"];
console.log(fruits['0']);
/* apple */