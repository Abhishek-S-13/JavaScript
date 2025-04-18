/* Jumping Statements*/

/* ************************************** break: ************************************** */

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log("For Loop Break"+i);
}
/* OP
For Loop Break0
For Loop Break1
For Loop Break2
For Loop Break3
For Loop Break4
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