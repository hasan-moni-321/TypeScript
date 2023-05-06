// 1. abstract method don't have body. 
// 2. can't make method of abstract class 

abstract class User{
    userName: string; 
    age: number; 

    constructor(userName: string, age: number){
        this.userName = userName; 
        this.age = age; 
    }

    abstract display(): void; 
}

class Student extends User{
    studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId; 
    }

    display(): void {
        console.log(`Name: ${this.userName} Age: ${this.age} ID: ${this.studentId}`)
    }
}

// using Student class 
let student1 = new Student("Moni", 28, 1522020009)
student1.display()
console.log(student1.age)
console.log(student1.userName)
