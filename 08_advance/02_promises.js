/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise */

/* ------------------------------------ EX 1  ----------------------------------*/

const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function() {
        console.log("Ex1: Async task is complete");
        resolve()
    }, 1000);
}); // <== Semicolon is needed here because it's a variable assignment

promiseOne.then(function(){
    console.log("Ex1: Promised Consumed");  
});
/*
    Async task is complete
    Promised Consumed
*/

/* ------------------------------------ EX 2  ----------------------------------*/
new Promise( function(resolve, reject) {
    setTimeout(function(){
        console.log("Ex2: Async Task 2");
        resolve()        
    },1000)
}).then( function() {
    console.log("Ex2: Async 2 resolved");
})
/*
    Async Task 2
    Async 2 resolved
*/
/* ------------------------------------ EX 3  ----------------------------------*/
const promiseThree = new Promise(function(resolve,reject){
    setTimeout( function(){
        resolve({username: "Abhi", email:"Abhi@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log("Ex3: ", user);   
})
/*
    { username: 'Abhi', email: 'Abhi@gmail.com' }
*/

/* ------------------------------------ EX 4  ----------------------------------*/
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // if false it will return Abhi
        if(!error){
            resolve({username: "Abhi", password: "123"})
        } else{
            reject('Ex4: ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user) => {
    console.log("User 61 line :",user);
    return user.username
}).then((username) => {
    console.log("UserName 64 line :",username); 
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Ex4: The Promise is either resolved or reject"))
/*
    The Promise is either resolved or reject
*/

/* -------- EX 5:  ASYNC this will not handel error directly we are using try catch -------- */

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true; // if its true it will through error for Async so we are using TRY CATCH
        if(!error){
            resolve({username: "JavaScript", password: "1234"});
        } else{
            reject('Ex5 : ERROR: Something went wrong');
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive  // promiseFive this is object so dont use promiseFive()
        console.log("Ex5 response: ",response);  
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

/* -------------------- Another Async Ex1 using JSON formate data -------------------- */

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/Abhishek-S-13')
        console.log("Async JSON Ex1 Response 100 line: " , response);
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E 104 line:  ", error);
    }
}
getAllUsers()

/* -------------------- Another Async Ex2 using JSON formate data -------------------- */

fetch('https://api.github.com/users/Abhishek-S-13')
.then((response) => {
    return response.json() // for return
})
.then((data) => {
    console.log("Async JSON Ex2 Response 116 line: " ,data);
}) // for handle
.catch((error) => console.log("E 118 line:  ",error))