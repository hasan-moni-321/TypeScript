// function with void return 
var userInfo1;
userInfo1 = function () {
    console.log("Hi I am Hasan.");
};
console.log(userInfo1());
// function with string return 
var userInfo2;
userInfo2 = function () {
    return "Hi I am returning something!";
};
console.log(userInfo2());
// function with void return and parameter.  
var userInfo3;
userInfo3 = function (para1) {
    console.log("Hi I am ".concat(para1, " living in Sylhet"));
};
userInfo3("Hasan Moni");
// function with string return and 2 parameter.
var userInfo4;
userInfo4 = function (name, age) {
    return "I am ".concat(name, " and ").concat(age, " years old");
};
console.log(userInfo4("Moni", 28));
