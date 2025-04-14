// In comparision operator result should be true or false

// console.log("2" > 1);   // true
// console.log("02" > 1);  // true

/*The reason is that an equality check == and comparisons > < >= <= work differently
Comparisons convert null to a number, treating it as 0.
That's why (0) null >= 0 is true and (1) null > 0 is false */

/* AVOID THIS TYPE OF CONVERSION */
console.log(null < 0 );     // false
console.log(null > 0 );     // false
console.log(null == 0 );    // false
console.log(null >= 0 );    // true

console.log(undefined >= 0); // false

/*
Operator	Name	                    Description	                        
==	        Equal to	                Compares values after type coercion	
===	        Strict equal to	            Compares values and types	
!=	        Not equal to	            Compares values after type coercion	
!==	        Strict not equal to	        Compares values and types	
>	        Greater than	            True if left is greater than right	
<	        Less than	                True if left is less than right	
>=	        Greater than or equal to	True if left is greater than or equal to	
<=	        Less than or equal to	    True if left is less than or equal to	
*/

// == this will check the correct string or number 
// === this will check the datatype bcz datatypes are different






