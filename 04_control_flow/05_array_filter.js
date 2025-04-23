/* ********************************** Filter ********************************** */
const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);
/* OP: [ 5, 6, 7, 8, 9, 10 ] */

/* Ex2 filter another way */
const myNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newNum = myNum.filter( (num) => { return num > 4 })
console.log(newNums);
/* OP: [ 5, 6, 7, 8, 9, 10 ] */

/* Ex3 using FOREACH also we can fetch the same value */
const myNumb = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const newNumb = []

myNumb.forEach( (num) => {
    if (num > 4 ) {
        newNumb.push(num)
    }
} )
console.log(newNumb);
/* OP: [ 5, 6, 7, 8, 9, 10 ] */

const books = [
    { title: 'B1', subject:"Kannada", publish:1999, edition: 2004 },
    { title: 'B2', subject:"English", publish:1998, edition: 2003 },
    { title: 'B3', subject:"Hindi", publish:2000, edition: 2002 },
    { title: 'B4', subject:"Science", publish:1996, edition: 2001 },
    { title: 'B5', subject:"Social", publish:1995, edition: 2000 },
    { title: 'B6', subject:"Maths", publish:2002, edition: 2005 }, 
]

let userBooks = books.filter( (bk) => bk.subject ==='Social'  ) // const we remove bcz assignment to const so
/* OP: [ { title: 'B5', subject: 'Social', publish: 1995, edition: 2000 } ] */

/*-------------------------------------------------------------------------------------------*/
// we remove const here bcz its already decalre same name as userBooks
// here we are using {} scope so its not return any value only[] so we have to add return
userBooks = books.filter( (bk) => { return bk.publish >= 2000 } )  
/*
[
  { title: 'B3', subject: 'Hindi', publish: 2000, edition: 2002 },
  { title: 'B6', subject: 'Maths', publish: 2002, edition: 2005 }
]
*/
/*-------------------------------------------------------------------------------------------*/
// Print with multi values
userBooks = books.filter( (bk) => { return bk.publish >= 2000 && bk.subject==="Maths"} )  
/* OP: [ { title: 'B6', subject: 'Maths', publish: 2002, edition: 2005 } ] */

console.log(userBooks);

