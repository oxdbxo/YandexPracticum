//Заглушка для демонстрации.
//Узеры не существуют в первом спринте

export interface UserType {
    id ?: string,
    login ?: string,
    password ?: string,
    first_name ?: string,
    second_name ?: string,
    email ?: string,
    phone ?: string,
}

class User {
    itsMe: boolean = false;
    data?: UserType;

    constructor(data: UserType, itsMe: boolean = false) {
        this.itsMe = itsMe;
        this.data = data;
    }
}

//фиктивные данные для тестов:
const meData = {
    login: 'serg123',
    password: '123456',
    first_name: 'Сергей',
    second_name: 'Константинов',
    email: 'my@pochta.hru',
    phone: '+79085432312',
}
const testData = [
    {
        first_name: 'Иван',
        second_name: 'Иванофф',
        email: 'ivan@pupkins.ru',
        phone: '+79085432312',
    },
    {
        first_name: 'Сидор',
        second_name: 'Сидоров',
        email: 'ivan@pupkins.ru',
        phone: '+79085432312',
    },
    {
        first_name: 'ООО',
        second_name: 'Рога и копыта',
        email: 'rog-kop@roga.ru',
        phone: '+79085432312',
    },
    {
        first_name: 'Петр',
        second_name: 'Петров',
        email: 'ivan@pupkins.ru',
        phone: '+79085432312',
    },
    {
        first_name: 'Гадя Петрович',
        second_name: 'Хренова',
        email: 'ivan@pupkins.ru',
        phone: '+79085432312',
    },
]

const testUsers:Array<User> = [];

for(let user of testData) {
    testUsers.push(new User(user, false))
}

const ME = new User(meData, true)

export {User, ME, testUsers}
