import {Page} from "../Page.js";
import template from './profile_form.hbs?raw';
import {FIELD_NAMES} from "../../constants";

export class ProfileForm extends Page {

  constructor() {
    const options = {
        avatar: {src: '/icons/avatar.svg', color: 'var(--color-grey-light)'},
        login: {name: FIELD_NAMES.login, placeholder: 'Логин'},
        password: {name: FIELD_NAMES.password, placeholder: 'Пароль'},
        password2: {name: FIELD_NAMES.password2, placeholder: 'Повторите пароль'},
        first_name: {name: FIELD_NAMES.first_name, placeholder: 'Имя'},
        second_name: {name: FIELD_NAMES.second_name, placeholder: 'Фамилия'},
        email: {name: FIELD_NAMES.email, placeholder: 'Почта'},
        phone: {name: FIELD_NAMES.phone, placeholder: 'Телефон'},
        save_button: {name: FIELD_NAMES.save_button, className: 'mt-1 button-active', text: 'Сохранить'},
    }
    super(template, options)
  }
}
