//Все данные вымышленные, все совпадения идут лесом
//Чаты не существуют в первом спринте

import {testUsers, User} from "../users/user";

class Chat {
    user ?: User;
    feeds ?: Array<any>;
    last_message ?: any;
    constructor(user: User, feeds: Array<any>) {
        this.user = user;
        this.feeds = feeds;
        const lastM = feeds[feeds.length-1].Messages;
        this.last_message = lastM[lastM.length-1]
    }
}

function randomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

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
const startDate = new Date(1810, 0, 1)
const endDate = new Date(2023, 12, 31)

while(chatsCount > 0) {
    const feeds = []
    let feedsCount = Math.random()*5;
    while(feedsCount > 0) {
        const messages = []
        let mesCounts = Math.random()*30;
        while(mesCounts > 0) {
            let sentense = ''
            let worldCount = Math.random()*20;
            while(worldCount > 0) {
                sentense += makeString(Math.floor(Math.random()*11)) + ' ';
                worldCount--;
            }
            messages.push({Date: '04 8562', Message: sentense})
            mesCounts--;
        }
        const feed = {Date: randomDate(startDate, endDate), Messages: messages}
        feeds.push(feed)

        feedsCount--;
    }
    testChats.push(new Chat(testUsers[chatsCount-1], feeds))
    chatsCount--;
}

export {Chat, testChats}
