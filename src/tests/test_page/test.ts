import template from './test.hbs?raw';
import {Page} from "../../pages/Page";
import {openNewWindow} from "../../functions";
import {CreateChatDialog, UploadFileDialog} from "../../components/dialogs";
import {Dialog} from "../../components/dialogs/dialog";

export class TestPage extends Page {

    showDialog(event: Event) {
        const target = event.target as HTMLElement;
        const id = target?.id;
        const callback = (dialog: Dialog) => {dialog.close()}
        if (id) {
            switch (id) {
                case 'login-link':
                    openNewWindow('/login')
                    break;
                case 'registration-link':
                    openNewWindow('/registration')
                    break;
                case 'profile-link':
                    openNewWindow('/profile')
                    break;
                case 'main-link':
                    openNewWindow('/main')
                    break;
                case 'p404-link':
                    openNewWindow('/404')
                    break;
                case 'p5xx-link':
                    openNewWindow('/5xx')
                    break;
                case 'upload-dialog-link':
                    new UploadFileDialog(callback)
                    break;
                case 'create-dialog-link':
                    new CreateChatDialog(callback)
                    break;
                default:
                    openNewWindow('/5xx')
            }
            event.stopPropagation()
            event.stopImmediatePropagation()
        }
    }

    constructor() {
        super(template);
        if (this.div) {
            const arr = this.div.querySelectorAll(".link")
            arr.forEach(ele => {
                ele.addEventListener('click', this.showDialog)
            })
        }
    }
}
