/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce */

const myNums = [ 2, 4, 6 ]

const myTotal = myNums.reduce(function(accumulator, currentValue) {
    console.log(`Accumulator ${accumulator} and Current Value ${currentValue}`);
    return accumulator + currentValue
}, 6 )
console.log('9th Line OP: ',myTotal);
/* OP: if we start with 0 OP - 0 + 2 + 4 + 6 = 12
Accumulator 0 and Current Value 2
Accumulator 2 and Current Value 4
Accumulator 6 and Current Value 6
9th Line OP: 12

OP: if we start with 6 OP but the same number is present in the array 6 + 2 + 4 + 6 = 18

Accumulator 6 and Current Value 2
Accumulator 8 and Current Value 4
Accumulator 12 and Current Value 6
9th Line OP: 18
*/

/* ************* Using Arrow fun ************** */

const myNumb = [ 2, 4, 6 ]

const myTotals = myNumb.reduce( (acc, cur ) => (acc+cur) , 0)
console.log('30th Line OP: ',myTotals);
/* OP: 12 */

/* Ex:3 */

const shopingCart = [
    { itemName: "JavaScript" , price: 499 },
    { itemName: "Java" , price: 599 },
    { itemName: "Python" , price: 799 },
    { itemName: "ReactJs" , price: 999 },
]

const priceToPay = shopingCart.reduce( (acc, item) => acc + item.price, 0)
console.log('42nd Line OP: ',priceToPay);
/* OP: 2896 */