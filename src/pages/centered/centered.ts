/**
 * Класс страницы для форм располагающихся в центре экрана
 * @module centered
 */
import {centeredTemplate} from './centered.tmpl'
import './centered.css'
import Handlebars from "handlebars";

export class CenteredFormPage {
    div?: HTMLDivElement = undefined;

    /**
     * @param {string} title Заголовок
     * @param {string} body HTML-тело формы
     */
    constructor(title: string, body: string) {
        this.div = document.createElement('div')
        this.div.classList.add('centered_form_div', 'fade')
        const template = Handlebars.compile(centeredTemplate);
        this.div.innerHTML = template({title: title, body: body})
    }
}
