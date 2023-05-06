function printUserInfo(userId) {
    console.log("user id: ".concat(userId));
}
printUserInfo("123");
printUserInfo(123);
printUserInfo(true);
printUserInfo({ id: 101 });
// using Generic 
function printUserInfo2(userId) {
    console.log("user id: ".concat(userId));
}
printUserInfo2("567");
printUserInfo2(567);
printUserInfo2(true);
printUserInfo2({ id: 102 });
// using Generic for multiple parameter
function printUserInfo3(userId, userAge) {
    console.log("user id: ".concat(userId, " user age: ").concat(userAge));
}
printUserInfo3("567", "28");
printUserInfo3(567, 28);
printUserInfo3(true, false);
printUserInfo3({ id: 102 }, { id: 302 });
// using generic with arrow function 
var arrowFunction = function (Id, Age) {
    console.log("Id: ".concat(Id, " Age: ").concat(Age));
};
arrowFunction(12, 23);
arrowFunction("12", "25");
arrowFunction("567", 234);
arrowFunction(true, "345");
arrowFunction(false, 678);
arrowFunction({ id: 1234 }, { age: 25 });
