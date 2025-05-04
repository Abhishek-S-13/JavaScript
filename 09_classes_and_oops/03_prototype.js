let myName = "Abhishek  "

console.log(myName.length);     // 10
console.log(myName.trueLength); // undefined
console.log(myName.trim().length);  // 8

/* Ex */
let myHeros = ["Thor", "Spiderman"]

let heroPower = { // create an object
    thor: "Hammer",
    spiderman: "Sling",
    getSpiderPower: function(){  // method defining
        console.log(`Spider power is ${this.spiderman}`);        
    }
}
// injecting new function 
Object.prototype.Abhi = function(){
    console.log(`Abhi present in all object`);  
}
// if we injecting to Array
Array.prototype.heyAbhi = function(){
    console.log(`Abhi say hello`);
}
// there is no function name with Abhi in console and prototype so we are create in 17th line
heroPower.Abhi();   // Abhi present in all object
myHeros.Abhi();   // Abhi present in all object

// heroPower.heyAbhi();    // heroPower.heyAbhi is not a function
myHeros.heyAbhi();  // Abhi say hello

/* ------------------------------ Inheritance ------------------------------ */
const user = {
    name: "Coffee",
    email: "coffee@google.com"
}
const teacher = {
    makeVideo: true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS',
    fullTime: true,
    __proto__: teachingSupport  // __proto__ old scenario
}
teacher.__proto__ = user // old scenario

// Modern syntax - setPrototypeOf (console -> prototype)
Object.setPrototypeOf(teachingSupport, teacher)

/* --------------------------------------------------------------------------- */

let anotherUser = "ChaiAurCode   "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUser.trueLength()
"Abhi".trueLength();
"Boss".trueLength();

/* OP
    ChaiAurCode   
    True length is: 11
    Abhi
    True length is: 4
    Boss
    True length is: 4
*/