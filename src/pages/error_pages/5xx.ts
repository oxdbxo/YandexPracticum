import {Page} from "../Page";
import template from './5xx.hbs?raw';

export class Page5xx extends Page {
    constructor() {
        super(template, {fade: false})
    }
}
