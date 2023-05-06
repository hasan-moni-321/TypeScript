// 1. Access modifier :-->  1. public  2. privae  3. protected  4. readonly 
// readOnly --> we can read readOnly variable but can't modify. 
class User_class_readOnly{
    readonly userName: string; 
    public age: number; 

    constructor(userName: string, age: number){
        this.userName = userName; 
        this.age = age; 
    }

    display(): void {
        console.log(`Name: ${this.userName} Age: ${this.age}`)
    } 
}

class Student_class_readOnly extends User_class_readOnly{
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


// using Student_class_readOnly class 
let Student_class_readOnly1 = new Student_class_readOnly("Moni", 28, 1522020009)

Student_class_readOnly1.setStudentId(12345); 
console.log(Student_class_readOnly1.getStudentId()); 

// printing readOnly userName
let User_class_readOnly1 = new User_class_readOnly("Hasan", 35); 
console.log(User_class_readOnly1.userName) 
console.log(Student_class_readOnly1.userName)
// Student_class_readOnly1.userName = "hasan"; // trying to modify but not possible due to readOnly.
