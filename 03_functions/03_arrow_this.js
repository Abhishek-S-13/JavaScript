const user = {          // create one object
    username : "Abhishek",
    price : 999,
    welcomeMessage : function(){            // welcome method and function  
        console.log(`${this.username} , welcome  to website `);
        console.log(this);
        /* output for this keyword console data only
        {
            username: 'Abhishek',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
                */
    }
}
user.welcomeMessage() // Abhishek , welcome  to website
user.username = "Darshan"   // here changed the value 
user.welcomeMessage() // Darshan , welcome  to website
console.log(this);
/* output for this keyword console data only
{
  username: 'Darshan',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
/* Ex 1*/
function hello(){
    let username = "D 29"
    console.log(this.username); // undefined
    console.log(`${this.username}`); // undefined
}
hello()

/* Ex 2 */
const hello2 = function(){
    let username = "D-37"
    console.log(this.username); // undefined
}
hello2()
/* Ex 3 using Arrow fun */
const hello3 = () =>{
    let username = "D-43"
    console.log(this);  // {}
    console.log(this.username); // undefined
}
hello3()

/* Ex4 using Arrow basic*/  
const addtwo = (num1 , num2) => { // if we use {} have to use return keyword
    return num1 + num2 
}
console.log(addtwo(1,2));   // 3 

/* Implicit return */
const addtoo = (num1, num2) =>  num1 + num2 
console.log(addtoo(3,4));   // 7

/* Ex1 */
const addtooo = (num1, num2) =>  (num1 + num2) // we use () not to add return keyword
console.log(addtooo(5,6));  // 11

/* Ex2 */
const addsum = (num1, num2) => {username:"Abhishek"}
console.log(addsum(7,8));   // undefined

/* we have to wrap with parentheses */
const addsum2 = (num1, num2) => ({username:"D-Boss"})
console.log(addsum2(9,10)); // { username: 'D-Boss' }

