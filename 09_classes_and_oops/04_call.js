function setUsername(username){
    this.username = username
    console.log("Called");
    
}
function createUser(username, email, password){
    setUsername.call(this, username) // we add the fun it will not print so we using the call fun with this, keyword
    this.email = email,
    this.password = password
}
const chai = new createUser("Chai", "Chai@g.com", 1234);
console.log(chai);

/* OP:
  Called
  createUser { email: 'Chai@g.com', password: 1234 }  
*/