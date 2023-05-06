// implementing interface 
interface IUserFormatter {
    formatUser: () => string 
}

class User implements IUserFormatter{
    constructor(private fullName: string, private age: number){
    }

    // using of interface 
    formatUser = () => {
        return `Name: ${this.fullName} Age: ${this.age}`
    }
}

let user = new User("Hasan", 28)
console.log(user.formatUser()); 
