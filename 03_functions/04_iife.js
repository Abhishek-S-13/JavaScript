/* Immediately Invoked Function Expression (IIFE) */

function tea(){
    console.log(`DB Connected`); // DB Connected
}
tea();     // ; for end we are using

/* 1st () function defination 2nd() Execution */
/* 
Avoids polluting the global scope
The variables and logic inside the function don’t leak out into the rest of the script. 
That’s good for keeping your code clean and avoiding naming conflicts.
*/
(function tea2(){   // named IIFE
    console.log(`DB Connected successfully`);
})();
/* op: DB Connected successfully */

/* Ex3 Simple IIFE */
( () => {  
    console.log(`Again DB Connected`);
})();
/* op: Again DB Connected */

/* adding variable */
( (name) => {
    console.log(`DB Connected Now ${name}`)
})('Abhi')
/* op: DB Connected Now Abhi */