// 1. Access modifier :-->  1. public  2. privae  3. protected  4. readonly 
// protected --> we can't acces and modify protected value but can extends from sub class. 
class User{
    protected userName: string; 
    age: number; 

    constructor(userName: string, age: number){
        this.userName = userName; 
        this.age = age; 
    }

    display(): void {
        console.log(`Name: ${this.userName} Age: ${this.age}`)
    } 
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

// trying to access protected variable, that is not possible. 
console.log(student1.userName) // private --> 
