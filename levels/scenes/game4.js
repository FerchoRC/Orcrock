import { createBubbles, createColumns } from "../table.js";
import { preload, tileseat, background } from "../preload.js";
import { createBall, resetBallPosition, pointer } from "../ball.js";

export class Game4 extends Phaser.Scene{
    constructor(){
        super({ key: 'game4'})
        this.selectedObject = null; // Agregar una propiedad para el objeto seleccionado
        this.bubblePosition = [];
        this.bubble = null;
        this.bubble2 = null;
        this.initialBallPosition = { x: 1000, y: 280 };
        this.line = null;
        this.maxLineLength = 300;
        this.ball = null;
        this.isLaunched = false;
    }

    preload(){
        this.load.image(
            'scene01',
            'assets/coliseo.png'
        )
        this.load.spritesheet(
            'tileseat',
            'assets/demo4.png',
            {frameWidth: 16, frameHeight: 16}
        )
        preload(this)
       
    }

    create(){
        background(this,735,0)

        tileseat(this, this.ball)
    }

}