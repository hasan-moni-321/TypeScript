
/*
let my_ame = "Hasan"
console.log(my_ame)
*/ 

/*
let age: number; 
age = 12345
console.log(age);  
*/ 

// use of built-in-datatype 
let userId : number; 
let fName: string
let userName : string; 
let fullName : string;
let isActivated : boolean; 


userId = 123; 
fName = "Kamrul"; 
userName = " Hasan Moni"; 
fullName = fName.concat(userName); 
isActivated = true; 

console.log(`Your id: ${userId}, First Name: ${fName}, Last Name: ${userName}, Activate: ${isActivated} Full name: ${fullName}`); 

console.log("Full name is: ", fullName); 

console.log("Splitting the full name: ", fullName.split(" "))
console.log("Uppercase the full name: ", fullName.toUpperCase())
console.log("Lowercase the full name: ", fullName.toLowerCase())

// use of void 
function display(): void{
    console.log("Hi I am displaying something!");
}

display(); 

