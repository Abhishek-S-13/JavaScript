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