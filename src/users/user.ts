//Заглушка для демонстрации.
//Узеры не существуют в первом спринте

const meData = {
    login: 'pupkini',
    password: 'pupkins_1234',
    first_name: 'Иван',
    second_name: 'Пукин',
    email: 'ivan@pupkins.ru',
    phone: '+79085432312',
}

export interface UserType {
    id ?: string,
    login ?: string,
    password ?: string,
    first_name ?: string,
    second_name ?: string,
    email ?: string,
    phone ?: string,
}

const anotData = {
    first_name: 'Иван',
    second_name: 'Пукин',
    email: 'ivan@pupkins.ru',
    phone: '+79085432312',
}

class User {
    itsMe: boolean = false;
    data?: UserType;

    constructor(data: UserType, itsMe: boolean = false) {
        this.itsMe = itsMe;
        this.data = data;
    }
}

const ME = new User(meData, true)
const AnotherUser = new User(anotData, true)

export {User, ME, AnotherUser}
