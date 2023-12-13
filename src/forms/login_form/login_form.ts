import {Component} from "../../components";
import {CenteredForm} from "../centered_form/centered";

const template = `
<div class="form-div">
    <input type="text" class="text-input" value="" placeholder="Логин">
    <input type="password" class="text-input" value="" placeholder="Пароль">
    <button id="login-form-button-enter" class="mt-1 button-active">Войти</button>
    <button id="login-form-button-register" class="button-text">Зарегистироваться</button>
</div>
`;

export class LoginForm implements Component {
    div: Node;

    constructor() {
        this.div = new CenteredForm("Вход", template).getElement();
    }

    getElement() {
        return this.div;
    }
}
