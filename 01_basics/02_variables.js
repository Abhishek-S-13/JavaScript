const account_id = 100
let account_email = "abhi@gmail.com"
var account_password = "12345" 
account_city = "Bangalore" /*this is also possible but dont use this */
let account_state; /* not defined anything here */

// account_id = 2 // not allowed
console.log(account_id);

account_email = "boss"
account_password = "1435"
account_city = "Goa"

console.table([account_id, account_email, account_password, account_city, account_state]);

/* Prefer not to use var bcz of issue in block scope and function scope {} */

/*    Output
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 100       │
│ 1       │ 'boss'    │
│ 2       │ '1435'    │
│ 3       │ 'Goa'     │
│ 4       │ undefined │
└─────────┴───────────┘
*/
