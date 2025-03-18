export class ToDo{
    constructor(title, isDone){
        this.title = title;
        this.isDone = isDone;
    }

    element(){
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const checkboxElement = document.createElement('input');
        const labelElement = document.createElement('label');
        const buttonElement = document.createElement('button');

        liElement.appendChild(divElement);
        divElement.appendChild(checkboxElement);
        divElement.appendChild(labelElement);
        divElement.appendChild(buttonElement);
    }

}