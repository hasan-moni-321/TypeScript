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

class Student extends User{
    studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId; 
    }
    


}

// using User class 
let user1 = new User("Hasan", 28); 
console.log(user1); 
user1.display(); 
console.log(user1.userName); 
console.log(user1.age); 

// using Student class 
let student1 = new Student("Moni", 28, 1522020009)
student1.display()
console.log(student1.age)
console.log(student1.userName)

