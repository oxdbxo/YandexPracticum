import {Component} from "../../components";
import {CenteredForm} from "../centered_form/centered";

const template = `
<div class="form-div">
    <input type="text" class="text-input" value="" placeholder="Имя">
    <input type="text" class="text-input" value="" placeholder="Фамилия">
    <input type="text" class="text-input" value="" placeholder="e-mail">
    <input type="text" class="text-input" value="" placeholder="Логин">
    <input type="password" class="text-input" value="" placeholder="Пароль">
    <input type="password" class="text-input" value="" placeholder="Повтроите пароль">
    <button id="login-form-button-enter" class="mt-1 button-active">Создать аккаунт</button>
</div>
`;

export class RegisterForm implements Component {
    div: Node;

    constructor() {
        this.div = new CenteredForm("Регистрация", template).getElement();
    }

    getElement() {
        return this.div;
    }
}
