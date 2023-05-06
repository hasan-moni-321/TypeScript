var users;
users = [];
var user1;
user1 = { Name: "Hasan", id: 1522020009 };
users.push(user1);
var user2;
user2 = { Name: "Moni", id: 12345 };
users.push(user2);
var user3;
user3 = { Name: "Rana", id: 123 };
users.push(user3);
console.log(users);
var getRequest;
getRequest = "GET";
function requestHandler(parameter_value) {
    console.log(parameter_value);
}
requestHandler("GET");
