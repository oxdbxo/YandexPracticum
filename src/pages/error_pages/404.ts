import {Page} from "../Page";
import template from './404.hbs?raw';

export class Page404 extends Page {
    constructor() {
        super(template)
    }
}
