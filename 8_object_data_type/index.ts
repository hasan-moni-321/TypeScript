let users: object[]; 
users = []

let user1: {Name: string, id: number};
user1 = {Name: "Hasan", id: 1522020009}
users.push(user1)

let user2: {Name: string, id: number};
user2 = {Name: "Moni", id: 12345}
users.push(user2); 

// using console for print 
console.log(users)

// using for loop for print 
for(const key in users){
    console.log(users[key])
}

// printing only name
for(const key in users){
    console.log(users[key]["Name"]); 
}

