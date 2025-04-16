/* Basic syntax */
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
sayMyName()

/* Example 1 */
function addTwoNum(num1, num2){     // parameters are num1 and num2
    console.log(num1 + num2);
}
addTwoNum(3,4);  // 7   // arguments means 3 and 4
addTwoNum(3,"4"); // 3
addTwoNum(3,"a"); // 3a
const result = addTwoNum(3,4); // 7
console.log("Results of addTwoNum",result); // Results of addTwoNum undefined

/* Example 2 */
function addTwoNums(num1, num2){     // parameters are num1 and num2
    let result = num1 + num2
    console.log("Abhi");
    return result
  //  return num1 + num2 // this also we can perform
    console.log("Abhi");        // After result not able print anything
}

const results = addTwoNums(3,4);
console.log("Results of addTwoNums",results); // Results of addTwoNums 7

/* Example 3 */
function loginUser(username = "Abhi"){  // if we remove ="Abhi" - undefined just logged in
    if(!username){     // if(username === undefined){ - this type also we can try
        console.log("Please enter a username");
    }
    return `${username} just logged in `
}

loginUser("Abhi") // only if written this it will not print
console.log(loginUser()); // undefined just logged in
console.log(loginUser("Abhishek")); // Abhishek just logged in

/* OUTPUT */
/*  Please enter a username
    undefined just logged in
    Abhishek just logged in  */

/* Another Example */
/* Example 1 */
function calculateCartPrice(num1){
    return num1 
}
console.log(calculateCartPrice(200)); // 200
console.log(calculateCartPrice(200, 300, 400, 500)); // 200 - its print only 200 

/* Example 2 */
function calCartPrice(...num1){  // ... rest operator | spread operator
    return num1
}
console.log(calCartPrice(200, 300, 400, 500)); // [ 200, 300, 400, 500 ]

/* Example 3 */
function calCrtPrice(val1, val2 , ...num1){
    return num1
}
console.log(calCrtPrice(200, 300, 400 , 500)); //  [ 400, 500 ]

/* Example using object */
const user = {
    username: "Abhi 71",
    prices: 199
}
function handleObject(anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}
 handleObject(user); /* o/p - UserName is Abhi 71 and price is 199 */
 handleObject(user); /* here we change price to prices so price will shows as undefined
 UserName is Abhi 71 and price is undefined */

handleObject({      
    username : "Darshan 80",
    price: 399
});               /* o/p - UserName is Darshan 80 and price is 399 */

/* Ex for Array */
const myNewArray = [ 100, 300, 500, 700 ]
function returnSecValue(getArray){
    return getArray[1]
}
console.log(returnSecValue(myNewArray));    // 300
console.log(returnSecValue([200, 400, 600, 800]));  // 400
