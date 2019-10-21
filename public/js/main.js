/**
 * The main file that controls the entire client
 */

//create objects
const socket = io();
const controller = new Controller();
const app = new PIXI.Application({ width: window.innerWidth, height: window.innerHeight });

//event listeners
window.addEventListener('keydown', controller.handleKeyDown);
window.addEventListener('keyup', controller.handleKeyUp);
window.addEventListener('resize', () => { controller.handleWindowResize(app); });

//pixijs
document.body.appendChild(app.view);

app.loader
    .add('player', './images/player.png')
    .load(() => {
        //create the sprite
        let player = new PIXI.Sprite(app.loader.resources.player.texture);

        //set the sprites location on the canvas
        player.x = app.renderer.width / 2;
        player.y = 200;

        //add the sprite to the stage
        app.stage.addChild(player);
    });

//main client loop
let fps = new FpsCounter();

function mainloop() {
    window.requestAnimationFrame(() => {
        //fps counter
        fps.track();
        fps.display();

        //recalls the loop
        mainloop();
    });
}

mainloop();