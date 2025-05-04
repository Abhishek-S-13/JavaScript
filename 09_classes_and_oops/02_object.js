/* Objects new keyword dicussed here */
function multipleBy5(num){
    return num*5
}
multipleBy5.power = 4

console.log("6 line: ",multipleBy5(5)); // 25
console.log("7 line: ",multipleBy5.power);  // 4
console.log("8 line: ",multipleBy5.prototype); // {}

/* -------------- Ex Prototype -------------- */
function createUser(username, score){
    this.username = username
    this.score = score 
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const tea = new createUser("Tea", 15)
const cofe = new createUser("Cofe", 20)

tea.printMe(); // Price is 15 after adding new keyword

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/