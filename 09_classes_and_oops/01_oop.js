/* const user = { ... } creates an object with properties: username, loginCount, and signedIn. */
const user = {      
    username: 'Abhi',
    loginCount: 6,
    signedIn: true,
    getUserDetails: function(){
        console.log('Got User Details');
        console.log(`8th Line Username: ${this.username}`); // Abhi
        console.log(this);  // current context will print
    }
};

console.log("13 Line ",user.username);
console.log("14 Line :",user.getUserDetails());
console.log("15 Line :",this); // if we try print in the Global context this will print only {}

/* Constructor function */
/*
new is a JavaScript operator that creates an instance of an object using a constructor function or class.

const promiseOne = new Promise()
const date = new Date()    */

/* Ex: */
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}
const userOne = new User("Abhishek", 12, true);
const userTwo = new User("Boss", 10, false);
console.log("38 Line: ",userOne);
console.log("35 Line: ",userTwo);
console.log("40 Line: ",userOne.constructor)