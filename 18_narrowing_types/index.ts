// truthiness 
function printTodos(todos: string[] | null){
    if(todos) {
        todos.map((todo) => console.log(todo))
    }else {
        console.log("no todo"); 
    }
}

const todos = ['todo1', 'todo2']; 
printTodos(todos); 
printTodos(null);  



let firstName: string 
let lastName: typeof firstName
firstName = "Hasan"; 
lastName = "Moni"

console.log(firstName); 
console.log(lastName); 
