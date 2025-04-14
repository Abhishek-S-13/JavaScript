/* For extra information https://262.ecma-international.org/5.1/#sec-11.4.3 
Read this - 11.4.3 The typeof Operator */

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
let myObject = {                // we can store in variable - Objects ({ key: "value" })
    name: "Sudeep", age: 35, 
}
console.log(typeof heros); // object

/* *********** FUNCTIONS ************* */
const myFunction = function(){      // Functions (function() {})
    console.log("Hello World");
}
console.log(typeof myFunction); // function or object

/* ********** ARRAY *********** */
let fruits = ["apple", "banana", "cherry"];
console.log(fruits['0']);
/* apple */

/* ***************** MEMORY ***************** */ /*
1. Stack Memory: Storing primitive values and function calls.
2. Heap Memory: Storing objects and functions (non-primitive types).

--------------- Reference vs Value ---------------
Primitives (stack) are copied by Value.
Objects/functions (heap) are copied by Reference. 

--------------------Temporary Memory Areas ---------------
Call Stack: Manages function execution.
Memory Heap: Stores objects/functions.
Garbage Collector: Frees up memory that is no longer in use, especially from the heap.
*/

let myName = "Abhishek"
let anotherName = myName
anotherName = "BOSS"
console.log(myName);        // Abhishek this will store in the stack 
console.log(anotherName);   // BOSS this will also store but Abhishek this wil take copy

/* Object declaration */ /* The Key and value will store in the Heap memory */
let userOne = {
 email:"123@gmail.com",
 upi: "usr@ybl"
}

let userTwo = userOne // userTwo variable will decalre but this will take refrence from userOne 

userTwo.email = "143@gamil.com" // we have to access this way and change the value here

console.log(userOne.email); // 143@gamil.com
console.log(userTwo.email); // 143@gamil.com

// bcz the both will reference same value
