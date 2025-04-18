/* 1. Conditional Statements (Decision Making) */
/* ************************************** IF ************************************** */
/* <, >, <=, >=, ==, !=, ===, !== */
let age = 20;
if (age >= 18) {
  console.log("You are an adult."); 
}
/* op: You are an adult. */

/* Ex 1*/
const speed = 200;
if(speed > 100){
    let power = "Over Speed" 
    console.log(`User power : ${power}`);
}
//console.log(`User power outer : ${power}`); /* var is global scope, we can user outer scope also but this is wrong 
/* User power : Over Speed */

/* implicit scope but dont use this type scenario*/
const balance = 1000;
if(balance > 500) console.log("Test");

/* ************************************** IF...ELSE ************************************** */
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}
/* op: Take an umbrella. */

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard){
    console.log("Allow to buy");
}
/* op: Allow to buy */

/* ************************************** IF...ELSE IF...ELSE ************************************** */
let score = 75;
if (score >= 85) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
/* op: Grade: B */

/* ************************************** SWITCH ************************************** */

let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Bananas are yellow.");
    break;
  case "apple":
    console.log("Apples are red.");
    break;
  case "orange":
    console.log("Oranges are orange.");
    break;
  default:
    console.log("Unknown fruit.");
}
/* op: Apples are red. */

/* ************ Ternary operator (? :) | Short-hand for if...else ************ */

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(message);
/* op: Welcome back! */

/* ************** Logical Operators in Conditions ************** */

let age1 = 25;
let hasID = true;

if (age1 >= 18 && hasID) {
  console.log("You can enter.");
}
/* You can enter. */ 

/* Nullish coalescing (??) Returns :- right-hand value only if left is null or undefined. */

let username = null;
let displayName = username ?? "Guest";

console.log(displayName);
/* Guest */

/* From videos these below examples */
/* ****************************** TRUE FALSE VALUES ******************************
False values :false, 0, -0, BigInt On, "", null, undefined, NaN

True values: "0", 'false', " ", [], {}, function(){} 

************************************************************ */

//const userEmail = "Abhi@gmail.com";
/* 1st scenario if array empty how to check that but we dont use this */
const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
} 
/* op: Array is empty */

/* 2nd scenario if array empty how to check that */
const emptyObj = {}

if(Object.keys(emptyObj.length === 0)){
    console.log("Object are empty");
}

/* Nullish Coalescing Operator (??) : null undefined */

let val1;
// val1 = 5 ?? 10    // 5
// val1 = null ?? 10    // 10 
// val1 = undefined ?? 15  // 15
// val1 = undefined ?? null // null
val1 = null ?? 5 ?? 10    // 5 1st value wil print

console.log(val1);

/* Terinary operator :- condition ? true : false */

const icePrice = 100
icePrice <=80 ? console.log("Less then 80 ") : console.log("Greater then 80");

/* op: Greater then 80 */ 