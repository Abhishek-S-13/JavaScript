/* Most used scenario in getter setter */
class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
    get password(){
        // return this._password.toUpperCase(); // ABCD
        return `${this._password}Abhi`  // abcdAbhi
    }
    set password(value){
        this._password = value;
    }
}
const Abhi = new User("Abhi@gmail.com", "abcd");
console.log(Abhi.password); // abcdAbhi
console.log(Abhi.email); // ABHI@GMAIL.COM

