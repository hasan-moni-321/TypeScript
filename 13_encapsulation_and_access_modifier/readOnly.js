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
// 1. Access modifier :-->  1. public  2. privae  3. protected  4. readonly 
// readOnly --> we can read readOnly variable but can't modify. 
var User_class_readOnly = /** @class */ (function () {
    function User_class_readOnly(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User_class_readOnly.prototype.display = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age));
    };
    return User_class_readOnly;
}());
var Student_class_readOnly = /** @class */ (function (_super) {
    __extends(Student_class_readOnly, _super);
    function Student_class_readOnly(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    // printing all the variable 
    Student_class_readOnly.prototype.display = function () {
        console.log("Name: ".concat(this.userName, " Age: ").concat(this.age, " ID: ").concat(this.studentId));
    };
    // set private studentId using public function 
    Student_class_readOnly.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    // accessing private studentId using function 
    Student_class_readOnly.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Student_class_readOnly;
}(User_class_readOnly));
// using Student_class_readOnly class 
var Student_class_readOnly1 = new Student_class_readOnly("Moni", 28, 1522020009);
Student_class_readOnly1.setStudentId(12345);
console.log(Student_class_readOnly1.getStudentId());
// printing readOnly userName
var User_class_readOnly1 = new User_class_readOnly("Hasan", 35);
console.log(User_class_readOnly1.userName);
console.log(Student_class_readOnly1.userName);
// Student_class_readOnly1.userName = "hasan"; // trying to modify but not possible due to readOnly.
