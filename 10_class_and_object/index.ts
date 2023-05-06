class User{
    userName: string; 
    age: number; 

    constructor(userName: string, age: number){
        this.userName = userName; 
        this.age = age; 
    }

    display(): void {
        console.log(`User name: ${this.userName} Age: ${this.age}`); 
    } 

}

let user1 = new User("Hasna", 28)
user1.display()

let user2 = new User("Moni", 27)
user2.display()
