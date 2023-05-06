// 1. Access modifier :-->  1. public  2. privae  3. protected  4. readonly 
// protected --> we can't acces and modify protected value but can extends from sub class. 
// private --> can access only in this class where it declared. but can access and modify using public function. 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User_class = /** @class */ (function () {
    function User_class(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User_class.prototype.display = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age));
    };
    return User_class;
}());
var Student_class = /** @class */ (function (_super) {
    __extends(Student_class, _super);
    function Student_class(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    // printing all the variable 
    Student_class.prototype.display = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age, " ID: ").concat(this.studentId));
    };
    // set private studentId using public function 
    Student_class.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    // accessing private studentId using function 
    Student_class.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student_class;
}(User_class));
// using Student_class class 
var student_class1 = new Student_class("Moni", 28, 1522020009);
student_class1.setStudentId(12345);
console.log(student_class1.getStudentId());
