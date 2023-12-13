import {Component} from "../components";

export class page5xx implements Component {
    div?: HTMLElement = undefined;

    getElement() {
        if (!this.div) {
            const div = document.createElement('div')
            div.innerHTML = 'E5xx'
            this.div = div;
            return div;
        } else
            return this.div;
    }
}
