
let userId : string | number | boolean; 

userId = "moni"; 
userId = 110; 
userId = true; 
console.log(userId); 



function displayInfo(userId: string | number){
    console.log(userId)
}

displayInfo("hasan"); 
displayInfo(1011)