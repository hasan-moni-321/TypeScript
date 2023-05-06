//define interface 
interface IUser {
    id: number,
    name: string, 
    age: number 
}

// define array 
let users: IUser[] = []; 

// define objects  
let user1: IUser = {
    id: 1,
    name: "Hasan",
    age: 28
}


let user2: IUser = {
    id: 2,
    name: "Moni",
    age: 26
}



// pushing to users array 
users.push(user1); 
users.push(user2); 

// printing users
const printUserInfo = (user: IUser) => {
    console.log(`Id: ${user.id} Name: ${user.name} Age: ${user.age}`); 
}
users.forEach(user => printUserInfo(user)); 
