import Handlebars from "handlebars";

export class Page {
    div: HTMLElement;
    constructor(template: string, options: {} = {}) {
        this.div = document.createElement('div')
        this.div.classList.add('page', 'full-content', 'background')
        this.div.innerHTML = Handlebars.compile(template)(options)
    }
}
