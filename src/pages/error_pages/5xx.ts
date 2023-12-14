import {CenteredFormPage} from "../centered/centered";

const template = `
    <h2 class="mt-1 text-error">Произошла ошибка!</h2>
    <h4 class="text-italic">Мы уже её исправляем</h4>
    <p class="mt-3 mb-1 bold">Попробуйте:</p>
    <p class="mt-1 ml-2 link">Перезайти в чат</p>
    <p class="mt-1 ml-2 link">Список чатов</p>
`;

export class Page5xx extends CenteredFormPage{
    constructor() {
        super('500', template)
    }
}
