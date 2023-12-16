import LoginFormTemplate from './login_form.hbs?raw';
import {router} from "../../app.js";
import {searchElementByName} from "../../functions.js";
import {Page} from "../Page";
import {FIELD_NAMES} from "../../constants";

export class LoginForm extends Page {
    _registerButton?: HTMLElement;

    constructor() {
        //TODO create all options
        const options = {
            login: {
                name: FIELD_NAMES.login,
                type: 'text',
                value: '',
                placeholder: 'Логин',
            },
            password: {
                name: FIELD_NAMES.password,
                type: 'password',
                value: '',
                placeholder: 'Пароль',
            },
            login_button: {
                name: FIELD_NAMES.login_button,
                className: 'mt-1 button-active',
                text: 'Войти',
            },
            registration_button: {
                name: FIELD_NAMES.registration_button,
                className: 'button-text',
                text: 'Зарегистироваться',
            },
        }
        super(LoginFormTemplate, options)
        this._registerButton = searchElementByName(this.div, 'registration_button');
        this._registerButton?.addEventListener('click', () => router.navigate('/registration'))
    }
}
