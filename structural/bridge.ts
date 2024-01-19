
class ShapeModifier {
    private shape: Shape;

    constructor(shape: Shape) {
        this.shape = shape;
    }

    enlargeShape() {
        this.shape.setSize(this.shape.getSize() * 2);
    }

    smallenShape() {
        this.shape.setSize(this.shape.getSize() / 2);
    }

}

interface Shape {
    color: string;
    setColor();
    setSize(size: any);
    getColor();
    getSize();
    size: string;
}

class CircleShape implements Shape {
    size: string;
    color: string;
    getColor() {
        
    }
    setSize(size: any) {
        
    }
    getSize() {
        

    }
    setColor() {
        
    }
}

const circleShape = new CircleShape();
const shapeModifier = new ShapeModifier(circleShape);

// Bridge pattern implementira tkzv. "Abstraction and Implemnetation"
// Abstraction je high level layer (ShapeModifier) koji uzima implementation interfejs (Shape) i radi neke funkcionalnosti
// na visokom nivou (enlargeShape)
// Concrete implementation je ustvari CircleShape koji se prosledjuje abstraction layeru i abstraction layer upravlja nad njime

// Pogodan je ukoliko zelimo da napravimo neki agnostic layer 