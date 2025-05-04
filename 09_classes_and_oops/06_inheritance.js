class User{
    constructor(username){
        this.username = username
    }
    logMe(){ // add Method
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new Course added by ${this.username}`);  
    }
}

const chai = new Teacher("Darshan", "D@gamil.com", 12345);
chai.addCourse(); // OP: A new Course added by Darshan
chai.logMe();   // OP: Username is Darshan

const MasalChai = new User("MasalChai")
// MasalChai.addCourse();      // MasalChai.addCourse is not a function (bcz dont have access )
MasalChai.logMe();  // OP: Username is MasalChai

console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true