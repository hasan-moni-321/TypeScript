function printUserInfo(userId: string | number | boolean | object){ 
    console.log(`user id: ${userId}`)
}

printUserInfo("123"); 
printUserInfo(123); 
printUserInfo(true)
printUserInfo({id: 101}); 


// using Generic 
function printUserInfo2<X>(userId: X){
    console.log(`user id: ${userId}`)
}

printUserInfo2("567"); 
printUserInfo2(567); 
printUserInfo2(true)
printUserInfo2({id: 102}); 



// using Generic for multiple parameter
function printUserInfo3<X, Y>(userId: X, userAge: Y){
    console.log(`user id: ${userId} user age: ${userAge}`)
}

printUserInfo3("567", "28"); 
printUserInfo3(567, 28); 
printUserInfo3(true, false)
printUserInfo3({id: 102}, {id: 302});


// using generic with arrow function 
const arrowFunction = <X, Y>(Id: X, Age: Y) => {
    console.log(`Id: ${Id} Age: ${Age}`)
}

arrowFunction(12, 23); 
arrowFunction("12", "25");
arrowFunction("567", 234); 
arrowFunction(true, "345"); 
arrowFunction(false, 678); 
arrowFunction({id: 1234}, {age: 25}); 

