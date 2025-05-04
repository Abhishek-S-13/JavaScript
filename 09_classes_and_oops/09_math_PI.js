/* Advance Objects some of values we cant changed so explaination about those things */
/*
console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); // 3.141592653589793 we cant override this value
*/

const desc = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("8 line PI value: ",desc);
/* OP:
{
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
} 
*/
/* ----------- Our code we will change and check here ---------------- */
const chai = {
    name: "Ginger chai",
    price: 15,
    isAvailable: true,
    orderTea: function(){
        console.log("Tea not available");       
    }
}
console.log("26 line : ",chai);  // { name: 'Ginger chai', price: 15, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(chai)); // undefined
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
/*{ value: 'Ginger chai', writable: true, enumerable: true, configurable: true }*/

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: true
})
console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
/* { value: 'Ginger chai', writable: false, enumerable: false, configurable: true }   */

/* Using FOR OF */
for (let [key, value ] of Object.entries(chai)) {
    if(typeof value !== 'function'){ // we have to use if condition bcz of its print function also
        console.log(`${key}: ${value}`); // orderTea function value also its printing 
    }
}