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

        checkboxElement.setAttribute('type', 'checkbox');
        checkboxElement.setAttribute('name', this.title);
        checkboxElement.setAttribute('id', this.title);

        labelElement.setAttribute('for', this.title);
        labelElement.innerText = this.title;

        buttonElement.className = "delete";
        buttonElement.innerText = "X";

        if (this.isDone) {
            checkboxElement.setAttribute('checked', 'checked');
            divElement.className = "isdone";
        }

        return liElement;
    }

}