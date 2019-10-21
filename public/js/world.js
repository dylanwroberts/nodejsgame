//acts as a container for gameobjects and is used by the renderer to display

class World {
    constructor(state) {
        this.gameObjects = state.gameObjects;
    }
}