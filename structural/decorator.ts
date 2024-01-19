
abstract class NotifiactionService {
    abstract sendMessage(data:any);
   abstract receiveMessage(data:any);
}

class NotificationData extends NotifiactionService {


    sendMessage(data) {

    }

    receiveMessage(data) {

    }
}

class BaseNotificationDecorator extends NotifiactionService {
    wrapee: NotifiactionService;
    constructor(wrapee: NotifiactionService) {
        super();
        this.wrapee = wrapee;
    }

    sendMessage = (data) => {
        this.wrapee.sendMessage(data)
    }
    receiveMessage = (data) => {
        this.wrapee.receiveMessage(data)
    }
}

class SlackNotificationDecorator extends BaseNotificationDecorator  {
   
    constructor(wrapee: NotifiactionService) {
        super(wrapee);
    }
    sendMessage = (data) => {
        data.type = 'slack';
        this.wrapee.sendMessage(data)
    }
    receiveMessage = (data) => {
        this.wrapee.receiveMessage(data)
    }
    
}

const notification = new NotificationData();
const slackNotification = new SlackNotificationDecorator(notification);
slackNotification.sendMessage('skaco');