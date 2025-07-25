import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.player = null;
    }

    preload() {
        //load assets
        
        this.load.spritesheet("dino", "assets/dino-run.png",{frameWidth:88, frameHeight:94})
    }

    create() {
        //initialise everything when game starts
        this.physics.add.image(200,200, "dino")
            .set0rigin(0);
    }

    update() {
        //game logic
    }

}