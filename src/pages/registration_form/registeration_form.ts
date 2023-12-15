import {CenteredFormPage} from "../centered/centered";
import {registerTemplate} from "./registeration_form_tmpl";
import {searchElementByName} from "../../functions";
import {router} from "../../app";

//Форма регистрации
export class RegistrationForm extends CenteredFormPage {
    _loginButton?: HTMLElement;
    constructor() {
        super('Регистрация', registerTemplate)
        //this.div = new CenteredForm("Регистрация", registerTemplate).getElement();
        this._loginButton = searchElementByName(this.div, 'login_b')
        this._loginButton?.addEventListener('click', () => router.navigate('/login/'))
    }
}
