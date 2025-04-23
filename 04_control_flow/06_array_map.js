/* MAP */
const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let newNums = myNums.map( (num) => num + 10 ) 
/* OP: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] */

/* Another way also we can use */
newNums = myNums.map( (num) => { return num + 10} ) 
/* OP: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ] */
console.log('Map values 10 line ',newNums);


/* *********************** Chaining *********************** */

const myNumbs = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNumbs = myNumbs
                    .map( (num) => num * 10)
                    .map( (num) => num + 1) 
                    .filter( (num) => num >= 40)
console.log('Chanining values 21 line ',newNumbs);
/*
Chanining values  [ 41, 51,  61, 71, 81, 91, 101 ]
*/