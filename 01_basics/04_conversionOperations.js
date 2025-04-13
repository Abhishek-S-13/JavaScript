let score = "33abhi" // when you dont know the type of value bcz while working in DB we have to know this

/* ----------- Number conversion ----------- */
console.log(typeof score); // to check the type - string 
console.log(typeof (score)); // to check the type - string 

let valueInNumber = Number(score); // convert to Number
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // if only number value is 33 

/*  some senarious we tested output
    "33" => 33 
    "33abhi" => NaN (Not a number)
    undefined => NaN
    null => 0 ; true => 1 ; false => 0;  */

/* ----------- Boolean conversion ----------- */
let isLoggedIn = 1

let booleanIsLogged = Boolean(isLoggedIn)
console.log(booleanIsLogged);

/* output
    1 => true; 0 => false;
    "" => false
    "abhi" => true
*/

/* ----------- String conversion ----------- */

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);  // 33
console.log(typeof stringNumber); // string

/* output
    33
    string
*/

/* ********************** Operations ********************** */

let value = 3
let negValue = -value
console.log(negValue);
/* -3 */

/* Example 2 */
console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**2); // 4
console.log(4/2); // 2
console.log(2%3); // 2

/* Example 3 */

let str1 = "Hi"
let str2 = "Abhi"
let str3 = str1 + str2 
console.log(str3); // Hi Abhi

/* Example 4 */ // 

console.log( "1" + 2 );         // 12
console.log( 1 + "2" );         // 12
console.log( "1" + 2 + 2 );     // 122
console.log( 1 + 2 + "2" );     // 32 - https://tc39.es/ecma262/#sec-toprimitive - check this 

console.log(true);  // true
console.log(+true); // 1
console.log(+"");   // 0

/* Study link 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/


