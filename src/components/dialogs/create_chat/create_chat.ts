import {Dialog} from "../dialog";
import {default as CreateChatDialogTemplate} from './create_chat.hbs?raw';
import Handlebars from "handlebars";

//Диалог создания чата
export class CreateChatDialog extends Dialog {
  loadButton ?: HTMLElement|null;
  callback ?: Function;

  constructor(callback: Function) {
    const options = {
      header: 'Создать чат',
    }
    const html = Handlebars.compile(CreateChatDialogTemplate)(options);
    super(html, options)
    this.callback = callback;
    const div = this.div?.firstChild as HTMLElement;
    if (div) {
      this.loadButton = div.querySelector("[name='add-chat-button']")
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
