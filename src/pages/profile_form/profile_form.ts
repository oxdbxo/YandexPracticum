//Страница формы профиля

import {Page} from "../Page.js";
import template from './profile_form.hbs?raw';
import {FIELD_NAMES} from "../../constants";
import {ME} from "../../tests";

export class ProfileForm extends Page {

  constructor() {
    const options = {
        avatar: {name: FIELD_NAMES.avatar, height: '80px', className: "pointer", iconClass: "icon-button-huge"},
        login: {name: FIELD_NAMES.login, placeholder: 'Логин', value: ME.data?.login},
        oldPassword: {name: FIELD_NAMES.password2, type: 'password', placeholder: 'Старый пароль', value: ''},
        password: {name: FIELD_NAMES.password, type: 'password', placeholder: 'Новый пароль', value: ''},
        first_name: {name: FIELD_NAMES.first_name, placeholder: 'Имя', value: ME.data?.first_name},
        second_name: {name: FIELD_NAMES.second_name, placeholder: 'Фамилия', value: ME.data?.second_name},
        display_name: {name: FIELD_NAMES.dispay_name, placeholder: 'Отображаемое имя', value: ME.data?.second_name},
        email: {name: FIELD_NAMES.email, placeholder: 'Почта', value: ME.data?.email},
        phone: {name: FIELD_NAMES.phone, placeholder: 'Телефон', value: ME.data?.phone},
        save_button: {name: FIELD_NAMES.save_button, className: 'mt-1 button-active', text: 'Сохранить'},
    }
    super(template, options)
  }
}
