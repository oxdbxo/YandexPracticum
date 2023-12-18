import {Page} from "../Page";
import template from './main_page.hbs?raw';
import {testChats, testUsers} from "../../tests/";
import {ME} from "../../tests/";

export class MainPage extends Page {
    constructor() {
        const options = {
            ChatsList: testChats,
            User: ME.data,
            Feeds: testChats[3].feeds,
            ChatInfo: testUsers[3].data,
        }
        super(template, options);
        //this.div.classList.add('backgound')
    }
}
