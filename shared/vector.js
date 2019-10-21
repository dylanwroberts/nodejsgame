class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    set(x, y) { 
        this.x = x;
        this.y =y;
    }

    set x(newX) { this.x = newX; }

    set y(newY) { this.y = newY; }

    get x() { return this.x; }

    get y() { return this.y; }

    get location() { return { x: this.x, y: this.y }; }

    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
}