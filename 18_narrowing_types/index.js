// truthiness 
function printTodos(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("no todo");
    }
}
var todos = ['todo1', 'todo2'];
printTodos(todos);
printTodos(null);
var firstName;
var lastName;
firstName = "Hasan";
lastName = "Moni";
console.log(firstName);
console.log(lastName);
