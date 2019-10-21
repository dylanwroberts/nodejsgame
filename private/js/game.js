const World = require('./world.js');

class Game {
    constructor() {
        this.world = new World();
    }
}

module.exports = Game;