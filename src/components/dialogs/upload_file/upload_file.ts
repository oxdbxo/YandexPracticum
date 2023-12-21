import {Dialog} from "../dialog";
import {default as UploadDialogTemplate} from './upload_file.hbs?raw';
import Handlebars from "handlebars";

//Диалог загрузки файла
export class UploadFileDialog extends Dialog {
    loadButton ?: HTMLElement|null;
    callback ?: Function;

    constructor(callback: Function) {
        const options = {
            header: 'Загрузить файл',
        }
        const html = Handlebars.compile(UploadDialogTemplate)(options);
        super(html, options)
        this.callback = callback;
        const div = this.div?.firstChild as HTMLElement;
        if (div) {
            this.loadButton = div.querySelector("[name='upload-button']")
            if (this.loadButton) {
                this.loadButton.addEventListener('click',(event) => {
                    event.preventDefault()
                    event.stopImmediatePropagation()
                    if (this.callback)
                        this.callback(this)
                })
            }
        }
    }
}
