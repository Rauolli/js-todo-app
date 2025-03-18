import { ToDo } from "./todo";

let todos = [
    new ToDo("Käse kaufen", false),
    new ToDo("Äpfel kaufen", true),
    new ToDo("Kirschen essen", false)
]

window.addEventListener('load', updateToDoListOnScreen);

function updateToDoListOnScreen(){
    const todoListElement = document.getElementById('todolist');
    todoListElement.innerHTML = '';

    for(const todo of todos){
        const todoListEntry = todo.element();
        todoListElement.appentChild(todoListEntry);
    }

}