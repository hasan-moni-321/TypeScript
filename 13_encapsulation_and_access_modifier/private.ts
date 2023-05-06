// 1. Access modifier :-->  1. public  2. privae  3. protected  4. readonly 
// protected --> we can't acces and modify protected value but can extends from sub class. 
// private --> can access only in this class where it declared. but can access and modify using public function. 

class User_class{
    public userName: string; 
    public age: number; 

    constructor(userName: string, age: number){
        this.userName = userName; 
        this.age = age; 
    }

    display(): void {
        console.log(`Name: ${this.userName} Age: ${this.age}`)
    } 
}

class Student_class extends User_class{
    private studentId: number;

    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId; 
    }

    // printing all the variable 
    display(): void {
        console.log(`Name: ${this.userName} Age: ${this.age} ID: ${this.studentId}`)
    }

    // set private studentId using public function 
    setStudentId(studentId: number): void{
        this.studentId = studentId; 
    }

    // accessing private studentId using function 
    getStudentId(): number{
        return this.studentId; 
    }
}


// using Student_class class 
let student_class1 = new Student_class("Moni", 28, 1522020009)

student_class1.setStudentId(12345); 
console.log(student_class1.getStudentId()); 
