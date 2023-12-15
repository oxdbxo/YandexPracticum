import Handlebars from "handlebars";
import centeredTemplate from './centered.hbs?raw';
import './centered.css';

export class CenteredFormPage {
    div?: HTMLDivElement = undefined;

    constructor(title: string, body: string) {
        this.div = document.createElement('div')
        this.div.classList.add('centered_form_div', 'fade')
        const template = Handlebars.compile(centeredTemplate);
        this.div.innerHTML = template({title: title, body: body})
    }
}
