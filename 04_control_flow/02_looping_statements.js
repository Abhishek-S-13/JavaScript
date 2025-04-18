/* 2. Looping Statements (Iteration) */

/* ************************************** for loop: ************************************** */
for (let i = 0; i < 5; i++) {
  console.log("For Loop "+i);
}
/* OP
For Loop 0
For Loop 1
For Loop 2
For Loop 3
*/

/* ************************************** while loop ************************************** */
let j = 0;
while (j < 5) {
  console.log("While " +j);
  j++;
}
/* OP:
While 0
While 1
While 2
While 3
While 4
*/

/* ************************************** do...while loop: ************************************** */
let k = 0;
do {
  console.log("Do While "+k);
  k++;
} while (k < 5);

/* OP
Do While 0
Do While 1
Do While 2
Do While 3
Do While 4
*/


/* ************************************************************************************** */
/* Source from videos For Loop */
/* Ex1 */
for(let i = 1; i <= 5; i++){
  const element = i;
  console.log(`2 X ${element} = ${2 * element}`);
}
/*
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
*/
/* Ex2 */
for(let i = 1; i <= 5; i++ ){
  const elem = i;
  if(elem == 3){
    console.log("3 is the best number");
  }
  console.log(elem);
}
/*
1
2
3 is the best number
3
4
5
*/

/* Ex */

for(let i = 1; i <= 10; i++ ){
  console.log(`tables of  ${i}`);
  for(let j = 1; j <= 10; j++){
    console.log(i + ' x ' +j+ ' = ' +i*j );
  }
}
/* OP from 1 to 10 table will print*/

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for(let i = 0; i < myArray.length; i++){  // if written <= it will show with undefined of 3rd value
  const elements = myArray[i];
  console.log(elements);
}
/*
3
flash
batman
superman
*/

// /* ***************************** Source from videos While Loop ************************ */

// let index = 2
// while(index <= 10){
//   console.log(`Even Numbers  = ${index}`);
//   index = index + 2;
// }
// /*
// Even Numbers  = 2
// Even Numbers  = 4
// Even Numbers  = 6
// Even Numbers  = 8
// Even Numbers  = 10
// */

// let myArray = ['Ironman','Spiderman','Thor']
// let arr = 0
// while (arr < myArray.length){
//   console.log(`value is ${myArray[arr]}`);
//   arr = arr + 1;
// }
// /*
// value is Ironman
// value is Spiderman
// value is Thor
// */

// /* Source from videos DO While Loop */
// let score = 1
// do {
//   console.log(`Score is ${score}`);
//   score++
// } while (score<=5);
// /*
// Score is 1
// Score is 2
// Score is 3
// Score is 4
// Score is 5
// */