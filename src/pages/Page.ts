import Handlebars from "handlebars";

export class Page {
    div: HTMLElement;
    constructor(template: string, options: object = {}) {
        this.div = document.createElement('div')
        this.div.classList.add('page', 'full-content')
        this.div.innerHTML = Handlebars.compile(template)(options)
    }
}
