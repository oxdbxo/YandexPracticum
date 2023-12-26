import {Page} from "../Page";
import template from './main_page.hbs?raw';
import {testChats, testUsers} from "../../tests/";
import {ME} from "../../tests/";

export class MainPage extends Page {
    constructor() {
        const cn = 3;
        const options = {
            ChatsList: testChats,
            User: ME.data,
            Feeds: testChats[cn].feeds,
            ChatInfo:testUsers[cn].data,
        }
        testChats[cn].selected = true;
        console.log(options)
        super(template, options);
    }
}
