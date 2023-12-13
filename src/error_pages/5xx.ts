import {Component} from "../components";
import {CenteredForm} from "../forms/centered_form/centered";

const template = `
    <h3 class="mt-1">Мы уже делаем все возможное, чтобы её исправить</h3>
    <p class="mt-3 mb-1 bold font-grey">Попробуйте:</p>
    <p class="mt-1 ml-2 link">Войти в чат</p>
    <p class="mt-1 ml-2 link">Создать аккаунт</p>
`;

export class Page5xx implements Component {
    div: Node;

    constructor() {
        this.div = new CenteredForm("Ошибка", template).getElement();
    }

    getElement() {
        return this.div;
    }
}
