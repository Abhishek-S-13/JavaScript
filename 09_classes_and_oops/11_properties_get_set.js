/* Old scenario using properties */
function User(email, password){
    this._email = email;
    this._password = password;
    
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase();
        },
        set: function (value) {
            this._password = value;
        }
    });

}

const Abhi = new User("Abhi@gmail.com", "abcd");
console.log(Abhi.password); // abcdAbhi
console.log(Abhi.email); // ABHI@GMAIL.COM