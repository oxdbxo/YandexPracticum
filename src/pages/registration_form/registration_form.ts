import registerTemplate from "./registration_form.hbs?raw";
import {searchElementByName} from "../../functions";
import {router} from "../../app";
import {Page} from "../Page";
import {FIELD_NAMES} from "../../constants";

//Форма регистрации
export class RegistrationForm extends Page {
    _loginButton?: HTMLElement;
    constructor() {
        const options = {
            login: {name: FIELD_NAMES.login, placeholder: 'Логин'},
            password: {name: FIELD_NAMES.password, placeholder: 'Пароль'},
            password2: {name: FIELD_NAMES.password2, placeholder: 'Повторите пароль'},
            first_name: {name: FIELD_NAMES.first_name, placeholder: 'Имя'},
            second_name: {name: FIELD_NAMES.second_name, placeholder: 'Фамилия'},
            email: {name: FIELD_NAMES.email, placeholder: 'Почта'},
            phone: {name: FIELD_NAMES.phone, placeholder: 'Телефон'},
            registration_button: {name: FIELD_NAMES.registration_button, className: 'mt-1 button-active', text: 'Создать аккаунт'},
            login_button: {name: FIELD_NAMES.login_button, className: 'button-text', text: 'Форма входа'},
        }
        super(registerTemplate, options)
        this._loginButton = searchElementByName(this.div, 'login_button')
        this._loginButton?.addEventListener('click', () => router.navigate('/login/'))
    }
}
