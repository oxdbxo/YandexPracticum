import Handlebars from "handlebars";

export class Page {
    div: HTMLElement;
    constructor(template: string, options: object = {}) {
        this.div = document.createElement('div')
        this.div.classList.add('page', 'full-fill')
        this.div.innerHTML = Handlebars.compile(template)(options)
    }
}
