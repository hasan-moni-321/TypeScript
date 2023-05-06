var users;
users = [];
var user1;
user1 = { Name: "Hasan", id: 1522020009 };
users.push(user1);
var user2;
user2 = { Name: "Moni", id: 12345 };
users.push(user2);
// using console for print 
console.log(users);
// using for loop for print 
for (var key in users) {
    console.log(users[key]);
}
// printing only name
for (var key in users) {
    console.log(users[key]["Name"]);
}
