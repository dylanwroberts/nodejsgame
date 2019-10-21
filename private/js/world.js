/**
 * This is a data structure that holds all the gameobjects in the simulated world
 */

class World {
    constructor() {
        //holds all the game's gameobjects
        this.gameObjects = [];

        //counts the number of gameobjects
        this.count = 0;
    }

    /**
     * inserts a gameobject into the world
     * @param {GameObject} gameobject the gameobject being inserted into the world
     * @return {Boolean} true the gameobject was added, false if not
     * @todo do some sort of check for validity of the parameter so the method is able to return false
     */
    addChild(gameobject) {
        let initialSize = this.gameObjects.length;
        this.gameObjects.push(gameobject);
        this.count++;

        //if the number of gameobjects did increment by 1, return true.
        if(this.gameObjects.length++ == initialSize) { return true; }
        else return false;
    }

    /**
     * searches the gameobject array for the element with matching id
     * @param {Number} id the unique id of the element atempting to be removed
     * @return {Boolean} whether or not the element was removed
     */
    removeChild(id) {
        let result = false;

        //loops until it reaches the end OR finds and deletes the item
        for(let i = 0; i < this.gameObjects.length && !result; i++) {
            if(this.gameObjects[i].id == id) {
                delete this.gameObjects[i];
                result = true;
            }
        }

        return result;
    }

    /**
     * returns the number of gameobjects in the world
     */
    get count() { return this.count; }
}

module.exports = World;