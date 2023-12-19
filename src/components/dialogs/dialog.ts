import Handlebars from "handlebars";
import {default as DialogTemplate} from './dialog.hbs?raw';

export class Dialog  {
    div?: HTMLElement;

    constructor(bodyHtml: string, options: {header: string}) {
        const element = document.getElementById('dialog')
        if (element) {
            this.div = element;
            const template = Handlebars.compile(DialogTemplate)
            this.div.innerHTML = template({body: bodyHtml, options: options});
            this.div.classList.remove('nodisplay')
        }
    }

    close() {
        if (this.div) {
            this.div.innerHTML = '';
            this.div.classList.add('nodisplay')
        }
    }
}
