// function with void return 
let userInfo1: () => void 
userInfo1 = () => {
    console.log("Hi I am Hasan."); 
}
console.log(userInfo1()); 


// function with string return 
let userInfo2: () => string 
userInfo2 = () => {
    return "Hi I am returning something!"; 
}
console.log(userInfo2()); 


// function with void return and parameter.  
let userInfo3: (name: string) => void 
userInfo3 = (para1: string) => {
    console.log(`Hi I am ${para1} living in Sylhet`)
}
userInfo3("Hasan Moni"); 


// function with string return and 2 parameter.
let userInfo4: (name: string, age: number) => string 
userInfo4 = (name: string, age: number) => {
    return `I am ${name} and ${age} years old`;
}
console.log(userInfo4("Moni", 28)); 
