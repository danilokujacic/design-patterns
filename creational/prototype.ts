abstract class Prototype {
    x: string;
    y: string;
    radius: string;
    constructor(source: Prototype) {
        this.x = source.x;
        this.y = source.y
        this.radius = source.radius;
    }
    abstract clone(): Prototype;
}

class ConcretePrototype extends Prototype {

    constructor(source?: Prototype) {
        if(source) {
            super(source);
            this.x = source.x;
            this.y = source.y;
            this.radius = source.radius;
        }
        
    }

    clone() {
        return new ConcretePrototype(this);
    }
}

const concreteObject: ConcretePrototype = new ConcretePrototype()

concreteObject.x = '10';
concreteObject.y = '10';
concreteObject.radius = '10';

const anotherConcreteObject: ConcretePrototype = concreteObject.clone();

console.log('Concrete', concreteObject.x);
console.log('Another concrete', anotherConcreteObject.x);

// Ovo je dobro kada zelimo da naslijedimo objekat sa istim podacima
// Kada zelimo da napravimo vise varijacija od jedne klase koje su slicne