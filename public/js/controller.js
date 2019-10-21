/**
 * handles the client's control input. when a change is made it's sent to the server
 * @todo test the system on Windows/Linux
 */

class Controller {
    constructor() {
        this.up = new Key(this.handleStateChange);
        this.right = new Key(this.handleStateChange);
        this.down = new Key(this.handleStateChange);
        this.left = new Key(this.handleStateChange);
    }

    state() {
        return {
            up: this.up.state(),
            right: this.right.state(),
            down: this.down.state(),
            left: this.left.state()
        }
    }

    //called whenever there is a change to the key state
    handleStateChange = () => { console.log(this.state()); }

    handleKeyDown = event => {
        switch (event.key) {
            case 'w': this.up.press(); break;
            case 'a': this.left.press(); break;
            case 's': this.down.press(); break;
            case 'd': this.right.press(); break;
            default: break;
        }
    }

    handleKeyUp = event => {
        switch (event.key) {
            case 'w': this.up.release(); break;
            case 'a': this.left.release(); break;
            case 's': this.down.release(); break;
            case 'd': this.right.release(); break;
            default: break;
        }
    }

    /*resizes the view to be the full window size.
    This is apart of the controller because resizing could
    be considered a type of control input.*/
    handleWindowResize = app => { app.renderer.resize(window.innerWidth, window.innerHeight); }
}

//simple helper class used by ClientController to keep track of key state
class Key {
    constructor(handleStateChange) { 
        this.active = false; 
        this.handleStateChange = handleStateChange;
    }

    press() {
        if (!this.active) {
            this.active = true;
            this.handleStateChange();
        }
    }

    release() {
        if (this.active) {
            this.active = false;
            this.handleStateChange();
        }
    }

    state() { return this.active; }
}