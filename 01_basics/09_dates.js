/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date */

let myDate = new Date();
console.log(myDate); // 2025-04-15T15:50:26.846Z
console.log(myDate.toString()); // Tue Apr 15 2025 15:51:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Apr 15 2025
console.log(myDate.toLocaleString()); // 4/15/2025, 3:52:50 PM
console.log(myDate.toLocaleDateString());  // 4/15/2025

console.log(typeof myDate); // object

let myNewDate = new Date(2025, 3, 15);    // year, month, date  
console.log(myNewDate); // 2025-04-15T00:00:00.000Z
console.log(myNewDate.toDateString()); // Tue Apr 15 2025

let anoNewDate = new Date("2025-04-15");
console.log(anoNewDate.toLocaleString()); // 4/15/2025, 12:00:00 AM

let anNewDate = new Date("04-15-2025");
console.log(anNewDate.toLocaleString()); // 4/15/2025, 12:00:00 AM

/* TimeStamp */

let myTime = Date.now();
console.log(myTime);   // 1744733150656 this will print millisec

let aNewDate = new Date("04-15-2025");
console.log(aNewDate.getTime()); // 1744675200000

let tiNewDate = Date.now();
console.log(Math.floor(tiNewDate/100));

let nDate = new Date();
console.log(nDate.getMonth()); // 3 bcz it April start with 0 Jan
console.log(nDate.getDay());    // 2 bcz Tuesday 
console.log(nDate.getMonth() + 1);  // 4

nDate.toLocaleString('Default',{
    weekday: "long",
})
console.log(nDate);  // 2025-04-15T16:21:06.215Z