// define array 
var users = [];
// define objects  
var user1 = {
    id: 1,
    name: "Hasan",
    age: 28
};
var user2 = {
    id: 2,
    name: "Moni",
    age: 26
};
// pushing to users array 
users.push(user1);
users.push(user2);
// printing users
var printUserInfo = function (user) {
    console.log("Id: ".concat(user.id, " Name: ").concat(user.name, " Age: ").concat(user.age));
};
users.forEach(function (user) { return printUserInfo(user); });
