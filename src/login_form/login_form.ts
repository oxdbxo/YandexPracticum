import {Component} from "../components";

export class LoginForm implements Component{
    div: Node;

    constructor() {
        const div = document.createElement('div')
        div.innerHTML = 'Hui'
        this.div = div;
    }

    getElement() {
        return this.div;
    }
}
