import {CenteredFormPage} from "../centered/centered";
import {router} from "../../app";
import {loginTemplate} from "./login_form_tmpl";
import Handlebars from "handlebars";
import {searchElementByName} from "../../functions";

export class LoginForm extends CenteredFormPage {
    _registerButton?: HTMLElement;

    constructor() {
        const template = Handlebars.compile(loginTemplate);
        //todo get user and password (current)
        const html = template({user: 'pupkin', password: 'ivan'})
        super('Вход', html)
        this._registerButton = searchElementByName(this.div, 'register_b')
        this._registerButton?.addEventListener('click', () => router.navigate('/registration'))
    }
}
