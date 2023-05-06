/*
let my_ame = "Hasan"
console.log(my_ame)
*/
/*
let age: number;
age = 12345
console.log(age);
*/
// use of built-in-datatype 
var userId;
var fName;
var userName;
var fullName;
var isActivated;
userId = 123;
fName = "Kamrul";
userName = " Hasan Moni";
fullName = fName.concat(userName);
isActivated = true;
console.log("Your id: ".concat(userId, ", First Name: ").concat(fName, ", Last Name: ").concat(userName, ", Activate: ").concat(isActivated, " Full name: ").concat(fullName));
console.log("Full name is: ", fullName);
console.log("Splitting the full name: ", fullName.split(" "));
console.log("Uppercase the full name: ", fullName.toUpperCase());
console.log("Lowercase the full name: ", fullName.toLowerCase());
// use of void 
function display() {
    console.log("Hi I am displaying something!");
}
display();
