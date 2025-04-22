/* From videos FOR-OF, FOR-IN, FOR-EACH */
/* Ex 1 FOR OF we are using here */
const arr = [1, 2, 3, 4, 5]
for (const i of arr) { 
    console.log(i);
}   
/* 1 2 3 4 5 */

/* Ex 2*/
const greetings = "ABHI"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}
/*  OP
    Each char is A
    Each char is B
    Each char is H
    Each char is I
*/

/* MAPS - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map */
const map = new Map()
map.set('IN',"INDIA")
map.set('US',"United State")
map.set('Gr',"German")
map.set('IN',"INDIA")

console.log(map);
/* OP: Map(3) { 'IN' => 'INDIA', 'US' => 'United State', 'Gr' => 'German' } */ 
/* INDIA is not printed its prints only unique */

for (const [key, value] of map) {
    console.log(key, '-' , value);
}
/* OP:
    IN - INDIA
    US - United State
    Gr - German
*/

/* Ex 3 - myObject is not iterable - this will not worked */
// const myObject = {
//     'Hero1' : 'D43',
//     'Heor2' : 'S44'
// }
// for (const [key, value] of myObject) { 
//     console.log(key , ':' , value);
// }

/****************************  Ex 1 here we are using FOR IN loop ***************************** */

const myObjects ={
    js: 'Javascript',
    cpp: 'C++',
    rjs: 'React JS',
    ja: 'Java'
}

for (const key in myObjects) {
//    console.log(key); // this will print only keys
//   console.log(myObjects[key]); // this will print values only
    console.log(`${key} is ${myObjects[key]}`);
}
/*
js is Javascript
cpp is C++
rjs is React JS
ja is Java
*/

/* Ex: 2 */
const programming = ["A", "B", "C", "D", "E"]
// for (const key of programming) { // For of wil working fine
//     console.log(key);
// }

for (const key in programming) {        // For in loop using 
    // console.log(key);   // 0 1 2 3 4 it wil print value of key it will show
    console.log(programming[key]); // now  A B C D E will print
}

/* Ex 3 : It wont print the value bcz it is not iterable */ /*
const maps = new Map()
maps.set('IN',"INDIA")
maps.set('US',"United State")
maps.set('Gr',"German")
maps.set('IN',"INDIA")

for (const key in maps) {
    console.log(key);  
}
*/
/* *************************************** FOR EACH ***************************************** */
/* Ex-1 : Using function FOR EACH */
const coding = ["JS","Java","Python","ReactJS","AngularJS"]
// coding.forEach( function name () {} )    // callback function SYNTAX 

coding.forEach( function (val) {   
    console.log('Example 1 - ',val);
} )
console.log('\n');
/* OP: 
Example 1 -  JS
Example 1 -  Java
Example 1 -  Python
Example 1 -  ReactJS
Example 1 -  AngularJS */

/* Ex-2: Using ARROW fun */
// coding.forEach( () => {} ) // Syntax for call back fun arrow 

coding.forEach( (item) => {
    console.log('Example 2 - ',item);
} )
console.log('\n');
/* OP: 
Example 2 -  JS
Example 2 -  Java
Example 2 -  Python
Example 2 -  ReactJS
Example 2 -  AngularJS */

/* Ex-3 : Normal function and there reference also we can use */
function printMe(item){
    console.log('Example 3 - ', item); 
}
coding.forEach(printMe)
console.log('\n');
/* OP3: 
Example 3 -  JS
Example 3 -  Java
Example 3 -  Python
Example 3 -  ReactJS
Example 3 -  AngularJS */

/* Ex-4 : */

coding.forEach( (item, index , arr)=> {
    console.log('Example 4 - ', item,  index, arr);
} )
console.log('\n');
/* OP
Example 4 -  JS 0 [ 'JS', 'Java', 'Python', 'ReactJS', 'AngularJS' ]
Example 4 -  Java 1 [ 'JS', 'Java', 'Python', 'ReactJS', 'AngularJS' ]
Example 4 -  Python 2 [ 'JS', 'Java', 'Python', 'ReactJS', 'AngularJS' ]
Example 4 -  ReactJS 3 [ 'JS', 'Java', 'Python', 'ReactJS', 'AngularJS' ]
Example 4 -  AngularJS 4 [ 'JS', 'Java', 'Python', 'ReactJS', 'AngularJS' ]
*/

/* Ex-5 : Using Array like - [ {}, {}, {} ] */

const myCoding = [
    {
        language : "JavaScript",
        languageFile : "JS"
    },
    {
        language : "Java",
        languageFile : "JV"
    },
    {
        language : "Python",
        languageFile : "PY"
    }
]

myCoding.forEach((item) => {
    console.log('Example 5 - ',item.language);
})

/*
Example 5 -  JavaScript
Example 5 -  Java
Example 5 -  Python
*/
