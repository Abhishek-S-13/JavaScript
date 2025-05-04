// Static Properties

class User{
    constructor(username){
        this.username = username
    }
    logMe(){ // add Method
        console.log(`Username is ${this.username}`);
    }
    static createId(){  // if we add static cant able to add the createID in 15th line
        return `123`
    }
}
const Abhi = new User("Abhishek");
// console.log(Abhi.createId());       // 123 // this will not work after added STATIC

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email 
    }
}
const phone = new Teacher("iPhone","iPhone.com");   // 
console.log(phone.logMe()); // Username is iPhone
console.log(phone.createId());  // phone.createId is not a function