import { ToDo } from "./todo.js";

let todos = [
    new ToDo("Käse kaufen", false),
    new ToDo("Äpfel kaufen", true),
    new ToDo("Kirschen essen", false)
]

function compareTodos( todoA, todoB){
    return todoA.title.localeCompare(todoB.title);
}

function updateToDoListOnScreen(){
    const todoListElement = document.getElementById('todolist');
    todoListElement.innerHTML = '';
    
    for(const todo of todos.sort(compareTodos)){
        const todoListEntry = todo.element();
        todoListElement.appendChild(todoListEntry);
    }

    // todos-Array filter, sodass in offenen ToDos alle ToDos enthalten sind, bei denen: isDone= false
    const openTodos = todos.filter((t)=> !t.isDone);
    const countElement = document.getElementById('count');
    countElement.innerText = openTodos.length;   
}

window.addEventListener('load', (event) => {
    updateToDoListOnScreen();
    const newTodoElement = document.getElementById('newToDo');
    newTodoElement.addEventListener('keydown',(event) => {
        if(event.key === "Enter"){
            const newTodo = new ToDo(newTodoElement.value, false);
            todos.push(newTodo);
            updateToDoListOnScreen();
        }
    });
     
});