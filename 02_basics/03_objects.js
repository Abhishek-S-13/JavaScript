// Singleton
//Object.create
 
// object literals
const mySym = Symbol("Key1");   // we take and define here
 
const jsUser = {        // In the objects we are adding key and values
    name:"Abhi",
    "full name" : "Abhishek",
    [mySym] : "myKey1",         // act like key - have to use with [] to access as key
    age : 28,
    location : "Bangalore",
    email: "abhi@gamil.com",
    isLoggedIn: false,
    lastLoginDay : ["Monday","Saturday"]
}  
 
console.log(jsUser.email);      // abhi@gamil.com
console.log(jsUser["email"]);   // abhi@gamil.com
 
//console.log(jsUser.full name); // we getting error in this scenario
console.log(jsUser["full name"]);   // Abhishek
 
console.log(typeof jsUser.mySym); // string
console.log(jsUser.mySym); // myKey1 - bcz we have use [] either it will fetch value
console.log(jsUser[mySym]); // myKey1
 
jsUser.email = "Abhi@chatgpt.com" // here we changing the email value
// Object.freeze(jsUser)           // we are freezing the value
jsUser.email = "Abhi@msoffice.com" // again we change email but its not changes bcz we freezed
// console.log(jsUser);
/* OUTPUT for above
{
  name: 'Abhi',
  'full name': 'Abhishek',
  age: 28,
  location: 'Bangalore',
  email: 'Abhi@chatgpt.com',
  isLoggedIn: false,
  lastLoginDay: [ 'Monday', 'Saturday' ],
  [Symbol(Key1)]: 'myKey1'                  // if we remove [] then it will work
}
*/

jsUser.greeting = function(){
    console.log("Hello JS user"); 
}
jsUser.greetingtwo = function(){    // `` string interplation
    console.log(`Hello JS user ,${this.name} `);
}
console.log(jsUser.greeting()); // Hello JS user
console.log(jsUser.greetingtwo()); // Hello JS user ,Abhi