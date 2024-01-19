interface Service {
    connect();
}

class ProxyDatabase implements Service {
    service: Service;

    constructor(s: Service) {
        this.service = s;
    }

    checkAccess() {
        return true;
    }
    connect() {
        if(this.checkAccess()) {
            this.service.connect();
        }
    }
}

class DatabaseService implements Service {
    connect() {

    }
}