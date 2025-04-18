/* Jumping Statements*/

/* ************************************** break: ************************************** */

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log("For Loop Break "+i);
}
/* OP
For Loop Break 0
For Loop Break 1
For Loop Break 2
For Loop Break 3
For Loop Break 4
*/
/* ************************************** continue: ************************************** */

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("For Loop Continue "+i);
}
/* OP
For Loop Continue 0
For Loop Continue 1
For Loop Continue 3
For Loop Continue 4
*/

/* **************************************  return: ************************************** */

function sum(a, b) {
  return a + b;
}
console.log(sum(2,4));
// 6 

/* ***************************** Source from videos Break and Continue ************************ */
/* BREAK Example */
for(let i = 1; i <= 6 ; i++){
  if(i==3){
    console.log(`Detect 3`);
    break;
  }
  console.log(`Value of i is ${i}`);
}
/* OP: for adding if condition
Value of i is 1
Value of i is 2
Detect 3
*/

/* OP for without if condition 
Value of i is 1
Value of i is 2
Value of i is 3
Value of i is 4
Value of i is 5
Value of i is 6
*/

/* CONTINUE Example */
for(let i = 1; i <= 6 ; i++){
  if(i==3){
    console.log(`Detect 3`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
/*
  Value of i is 1
  Value of i is 2
  Detect 3
  Value of i is 4
  Value of i is 5
  Value of i is 6
*/