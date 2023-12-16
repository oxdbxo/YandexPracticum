import {Page} from "../Page";
import template from './main_page.hbs?raw';

export class MainPage extends Page {
    constructor() {
        super(template);
    }
}
