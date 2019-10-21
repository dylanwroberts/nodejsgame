class GameObject {
    constructor(x, y, id) {
        this.location = new Vector(x, y);
        this.id = id;
    }

    get location() { return this.location.location; }

    get x() { return this.location.x; }

    get y() { return this.location.y; }
}