//Все данные вымышленные, все совпадения идут лесом
//Чаты не существуют в первом спринте

import {ME, testUsers, User} from "../users/user";

class Chat {
    chatInfo ?: User;
    feeds ?: Array<any>;
    last_message ?: any;
    unreaded?: number;
    selected ?: boolean;
    constructor(chatInfo: User, feeds: Array<any>) {
        this.chatInfo = chatInfo;
        this.feeds = feeds;
        this.last_message = feeds[feeds.length-1]
        this.unreaded = Math.floor(Math.random()*8)
        if (this.unreaded < 4)
            this.unreaded = undefined;
    }
}

function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
const startDate = new Date(1810, 0, 1)
const endDate = new Date(2022, 12, 31)

function makeString(length:number) {
    let result = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
        counter += 1;
    }
    return result;
}

const testChats: Array<Chat> = []
let chatsCount = 5;

while(chatsCount > 0) {
        const feeds = []
        let mesCounts = Math.random()*20+15;
        while(mesCounts > 0) {
            let sentense = ''
            let worldCount = Math.random()*20;
            while(worldCount > 0) {
                sentense += makeString(Math.floor(Math.random()*11)) + ' ';
                worldCount--;
            }
            const isMe = Math.random() > 0.5;
            const date = randomDate(startDate, endDate)
            let dateString = `${date.toLocaleDateString('ru')} ${date.toLocaleTimeString('ru')}`
            dateString = dateString.substring(0, dateString.length-3);
            feeds.push({Date: dateString, User: isMe?testUsers[5-chatsCount]:ME, Message: sentense})
            mesCounts--;
        }
    testChats.push(new Chat(testUsers[5-chatsCount], feeds))
    chatsCount--;
}

export {Chat, testChats}
