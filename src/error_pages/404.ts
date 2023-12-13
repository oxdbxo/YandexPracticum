import {Component} from "../components";
import {CenteredForm} from "../forms/centered_form/centered";

const template = `
    <h2 class="font-error">Страница не найдена</h2>
    <p class="mt-3 mb-1 bold font-grey">Но вы можете:</p>
    <p class="mt-1 ml-2 link">Войти в чат</p>
    <p class="mt-1 ml-2 link">Создать аккаунт</p>
`;

export class page404 implements Component {
    div: Node;

    constructor() {
        this.div = new CenteredForm("404", template).getElement();
    }

    getElement() {
        return this.div;
    }
}
