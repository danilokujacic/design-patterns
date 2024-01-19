
interface House {
    method();
}
interface Builder {
    house: House;
    doWalls(): void;
    doDoors(): void;
    doGarden(): void;
    reset():void;
}

class SimpleHouse implements House {
    method() {
        
    }
}

class ModernHouse implements House {
    method() {

    }
}

class BuildSimpleHouse implements Builder {
    house: SimpleHouse;
    constructor() {
        this.house = new SimpleHouse();
    }
    reset() {
        this.house = new SimpleHouse();
    }
    doWalls() {

    }
    doDoors() {
        
    }
    doGarden() {
        
    }
    getHouse() {
        return this.house;
    }
}

class BuildModernHouse implements Builder {
    house: SimpleHouse;
    constructor() {
        this.house = new ModernHouse();
    }
    reset() {
        this.house = new ModernHouse();
    }
    doWalls() {

    }
    doDoors() {
        
    }
    doGarden() {
        
    }
    doSomeModernStuff(){

    }

    getHouse() {
        return new ModernHouse();
    }
}

// Kada imamo mnogo parametara u construct klasi
// Kada odjemo da napravimo razlicite varijacije istog proizvoda