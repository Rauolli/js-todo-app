import { ToDo } from "./todo.js";

let todos = [
    new ToDo("Käse kaufen", false),
    new ToDo("Äpfel kaufen", true),
    new ToDo("Kirschen essen", false)
]

function compareTodos( todoA, todoB){
    return todoA.title.localeCompare(todoB.title);
}

window.addEventListener('load', () => {
    const todoListElement = document.getElementById('todolist');
    console.log("Todo-List", todoListElement);
    todoListElement.innerHTML = '';
    
    for(const todo of todos.sort(compareTodos)){
        const todoListEntry = todo.element();
        todoListElement.appendChild(todoListEntry);
    }

    // todos-Array filter, sodass in offenen ToDos alle ToDos enthalten sind, bei denen: isDone= false
    const openTodos = todos.filter((t)=> !t.isDone);
    const countElement = document.getElementById('count');
    countElement.innerText = openTodos.length; 
});