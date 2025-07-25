import { Scene } from 'phaser';

const WIDTH = 1024;
const HEIGHT = 768;

export class Game extends Scene {
    constructor() {
        super('Game');
        this.player = null;
        let player;
        let ground;
        let clouds;
    }

    preload() {
        //lxoad assets
        this.load.image("ground", "assets/ground.png");
        this.load.image("cloud", "assets/cloud.png");
        this.load.spritesheet("dino", "assets/dino-run.png",{frameWidth:88, frameHeight:94});
        for(let i =0;i<6;i++){
            let cactusNum=i+1;
            this.load.image(`obstacle-${cactusNum}`, `assets/cactuses_${cactusNum}.png`)}
    }

    create() {
        //initialise everything when game starts
        this.player=this.physics.add.sprite(200,100, "dino").setOrigin(0,1).setGravityY(500).setCollideWorldBounds(true).setBodySize(44,92);
        this.ground=this.add.tileSprite(0, 325, 1000, 30, "ground").setOrigin(0,1);
        this.gameSpeed=13;
        this.clouds=this.add.group()
        this.clouds=this.clouds.addMultiple([
            this.add.image(200,100, "cloud"),
            this.add.image(300,130, "cloud"),
            this.add.image(450,90, "cloud"),
        ]);
        this.groundCollider=this.physics.add.staticSprite(0,300, "ground").setOrigin(0);
        this.groundCollider.body.setSize(1000, 30); //(adjust collision size if needed)
        this.physics.add.collider(this.player, this.groundCollider);
        this.obstacles=this.physics.add.group({allowGravity: false});
        

    }

    update() {
        //game logic
        this.ground.tilePositionX +=this.gameSpeed;
        this.obstacleNum=Math.floor(Math.random()*6)+1;
        this.obstacles.create(500, 220,`obstacle-${this.obstacleNum}`).setOrigin(0);
    }

}