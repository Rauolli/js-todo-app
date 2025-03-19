export class ToDo extends EventTarget{
    constructor(title, isDone){
        super();
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

        buttonElement.addEventListener('click', () => {
            this.dispatchEvent(new Event('delete'));
        });

        checkboxElement.addEventListener('change', () => {
            this.isDone = checkboxElement.checked;
            divElement.className = this.isDone ? "isdone" : "";
        })

        return liElement;
    }

}