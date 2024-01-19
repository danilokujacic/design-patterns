
class Database {
    public static instance: Database;
    constructor() {
        // DB CONNECTION
    }
    static singleton() {
        if(!this.instance) {
            this.instance = new Database();
        }
        
        return this.instance;
    }
}

// Dobro ako ne zelimo da imamo vise instanci jedne klase (kao sto je database)