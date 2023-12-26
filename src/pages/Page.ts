//Класс страницы для роутинга. Отсюда наследуются все страницы.

import Handlebars from "handlebars";

export class Page {
    div: HTMLElement;
    constructor(template: string, options: {} = {}) {
        this.div = document.createElement('main')
        this.div.classList.add('full-content', 'background')
        this.div.innerHTML = Handlebars.compile(template)(options)
    }
}
