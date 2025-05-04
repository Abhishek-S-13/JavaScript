/* Most not use this scenario */
const User = {
    _email: 'Abhi@gmail.com',
    _password: "abc",
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}
const Abhi = Object.create(User);
console.log(Abhi.email);    // ABHI@GMAIL.COM
