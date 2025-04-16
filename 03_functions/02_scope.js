var c = 300   // Global scope
let a = 100

if (true){          // here Block Scope 
    let a = 10  
    const b = 20
    var c = 30      
    console.log("INNER: ", a);  // 10 wil print
}

console.log(a);    // 100 will print from the Global Scope
//console.log(b);
console.log(c);  // 30 will print from the Block Scope 300 will not fetch here

/************* Function in scope **************/

function one(){
    const username = "Darshan 18"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);         this will not execute 
    two()       // two execute here 
}
one()   // one execute here
/* o/p Darshan 18 */

/* IF Conditions */

if (true) {
    const username = "Darshan 32"
    if(username === "Darshan 32"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);       // website is not defined -- here also it not working
}
// console.log(username);      // username is not defined --  here also it not working
/* o/p - Darshan 32 Youtube */

/* Intresting and importent */

// here we added value 1st its working
console.log(addOne(5));     // 6
function addOne(num){
    return num + 1
}

// here if we added 1st we facing issue - Cannot access 'addTwo' before initialization
console.log(addTwo(5));   
const addTwo = function(num){ // here we declare the fun and we hold in the variable
    return num + 2
}
console.log(addTwo(5));  // here it will work 

/* its not working bcz we are using before declaration */