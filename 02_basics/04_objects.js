/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign */

//const tinderUser = new Object() // {} singleton object
const tinderUser = {} // {} non singleton object
tinderUser.id = "123abc"
tinderUser.name = "BOSS"
tinderUser.isLogIn = false  

console.log(tinderUser); // { id: '123abc', name: 'BOSS', isLogIn: false }

const regUser = {
    email: "asd@gmail.com",
    fullname: {
        userfullname:{
            firstName: "Abhi",
            lastName: "S"
        }
    }
}
console.log(regUser.fullname); // { userfullname: { firstName: 'Abhi', lastName: 'S' } }
console.log(regUser.fullname.userfullname);  // { firstName: 'Abhi', lastName: 'S' }
console.log(regUser.fullname.userfullname.firstName); // Abhi


const obj1 = { 1: "a", 2: "b" } // in console also we can check all below fun
const obj2 = { 3: "a", 4: "b" }

const obj3 = { obj1 , obj2}
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// {} optional parameter but we have to use for target and remaining obj1 and obj2 are source
const obj5 = Object.assign({} ,obj1, obj2)   
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {...obj1, ...obj2}
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    }
]

users[1].email
console.log(tinderUser); // { id: '123abc', name: 'BOSS', isLogIn: false }

console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLogIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'BOSS', false ]

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'BOSS' ], [ 'isLogIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLogIn')); // true - object is there or not it will show
