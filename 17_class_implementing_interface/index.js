var User = /** @class */ (function () {
    function User(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        // using of interface 
        this.formatUser = function () {
            return "Name: ".concat(_this.fullName, " Age: ").concat(_this.age);
        };
    }
    return User;
}());
var user = new User("Hasan", 28);
console.log(user.formatUser());
