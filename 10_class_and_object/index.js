var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("User name: ".concat(this.userName, " Age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("Hasna", 28);
user1.display();
var user2 = new User("Moni", 27);
user2.display();
