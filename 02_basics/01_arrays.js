/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */
/* ********* ARRAY ********* */
const myArr = [0,1,2,3,4,5]
const ourHeros = ["Darshan,Yash"]
const myArr2 = new Array(1,2,3,4,5);

console.log(myArr[0]);  // 0

/* ********* ARRAY METHOD ********* */

myArr.push(6)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6 ]

myArr.pop(6)
console.log(myArr); // [ 0, 1, 2, 3, 4, 5]

myArr.unshift(8)
console.log(myArr); // [ 8, 0, 1, 2, 3, 4, 5]

myArr.shift() // here 8 removed
console.log(myArr); // [ 0, 1, 2, 3, 4, 5, 6]

console.log(myArr.includes(9)) // false

console.log(myArr.indexOf(4));  // 4
console.log(myArr.indexOf(10)); // -1 bcz no value of 10 in the list

const newArr = myArr.join();
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); // string

/* slice splice */

console.log("A ", myArr);   // A  [ 0, 1, 2, 3, 4, 5 ]
const myNew = myArr.slice(1, 3) 
console.log(myNew);  // [1, 2]
console.log("B ", myArr);  // B  [ 0, 1, 2, 3, 4, 5 ]

const myNew2 = myArr.splice(1, 3)
console.log(myNew2);    // [ 1, 2, 3 ]
console.log("C ", myArr);   // C  [ 0, 4, 5 ] /* here original arry manupulate */
