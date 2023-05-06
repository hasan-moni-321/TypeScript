//let userNames: string[]; 
let userNames: Array<string>; 

userNames = ['rana', 'hasan', 'tamim']; 
console.log("Full array: ", userNames); 
console.log("sorted array: ", userNames.sort()); 
console.log(userNames[0]); 

// multitype array 
let multitypeArray: (string | number)[]; 
multitypeArray = ['rana', 12, 'hasan', 45, 'tamim', 78]; 

console.log("Multitype array: ",multitypeArray)
console.log(multitypeArray[2]); 


