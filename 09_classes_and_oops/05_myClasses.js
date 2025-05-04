// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("Chai", "Chai@g.com", 1234);
console.log(chai.encryptPassword());    // 1234abc
console.log(chai.changeUserName());     // CHAI

/* ---------------------------- behind the scene same example ---------------------------- */

function User2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const coffee = new User2("coffee", "coffee@g.com", 4321);
console.log(coffee.encryptPassword());    // 1234abc
console.log(coffee.changeUserName());     // CHAI

/* OP:
    1234abc
    CHAI
    4321abc
    COFFEE
*/