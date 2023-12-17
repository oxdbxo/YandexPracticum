import {Page} from "../Page";
import template from './main_page.hbs?raw';
import {testChats} from "../../tests";
import {ME} from "../../users/user";

export class MainPage extends Page {
    constructor() {
        console.log(testChats)
        const options = {
            ChatsList: testChats,
            User: ME.data,
        }
        super(template, options);
    }
}
