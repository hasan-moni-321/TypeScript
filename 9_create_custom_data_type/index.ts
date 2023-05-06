type user = {Name: string, id: number};
let users: user[];  
users = []

let user1: user; 
user1 = {Name: "Hasan", id: 1522020009}
users.push(user1)

let user2: user;
user2 = {Name: "Moni", id: 12345}
users.push(user2); 

let user3: user; 
user3 = {Name: "Rana", id: 123}
users.push(user3);

console.log(users)

// request handling 
type requestType = "GET" | "POST"; 
let getRequest: requestType; 
getRequest = "GET"; 

function requestHandler(parameter_value: requestType){
    console.log(parameter_value); 
}

requestHandler("GET"); 