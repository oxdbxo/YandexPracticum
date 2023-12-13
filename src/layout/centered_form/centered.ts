import {Component} from "../../components";
import Handlebars from "handlebars";
import './centered.css'

const centeredTemplate = `
<div class="centered_form_title">
    {{title}}
</div>
<div class="centered_form_body">
    {{{body}}}
</div>
`;

export class CenteredForm implements Component {
    div: Node;

    constructor(title: string, body: string) {
        const div = document.createElement('div')
        div.classList.add('centered_form_div')
        const template = Handlebars.compile(centeredTemplate);
        div.innerHTML = template({title: title, body: body})
        this.div = div;
    }

    getElement() {
        return (this.div)
    }

}
