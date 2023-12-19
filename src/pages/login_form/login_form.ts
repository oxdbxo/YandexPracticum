import LoginFormTemplate from './login_form.hbs?raw';
import {router} from "../../app.js";
import {searchElementByName} from "../../functions.js";
import {Page} from "../Page";
import {FIELD_NAMES} from "../../constants";

export class LoginForm extends Page {
    private registerButton?: HTMLElement;

    constructor() {
        const options = {
            login: {
                name: FIELD_NAMES.login,
                id: FIELD_NAMES.login,
                type: 'text',
                value: '',
                placeholder: 'Логин',
            },
            password: {
                name: FIELD_NAMES.password,
                id: FIELD_NAMES.login,
                type: 'password',
                value: '',
                placeholder: 'Пароль',
            },
            login_button: {
                name: FIELD_NAMES.login_button,
                id: FIELD_NAMES.login,
                className: 'mt-1 button-active',
                text: 'Войти',
            },
            registration_button: {
                name: FIELD_NAMES.registration_button,
                id: FIELD_NAMES.login,
                className: 'button-text',
                text: 'Зарегистироваться',
            },
        }
        super(LoginFormTemplate, options)
        this.registerButton = searchElementByName(this.div, FIELD_NAMES.registration_button);
        this.registerButton?.addEventListener('click', () => router.navigate('/registration'))
    }
}
