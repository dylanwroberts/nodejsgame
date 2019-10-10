/**
 * handles the client's control input. when a change is made it's sent to the server
 * @todo test the system on Windows/Linux
 */

class ClientController {
    constructor() {
        this.up = new Key();
        this.right = new Key();
        this.down = new Key();
        this.left = new Key();
    }

    handleKeyDown(event) {

    }

    handleKeyUp(event) {

    }
}

//helper class used by ClientController to keep track of key state
class Key {
    constructor() { this.active = false; }

    press() { if(!this.active) this.active = true; }

    release() { if(this.active) this.active = false; }

    state() { return this.active; }
}