import { createBubbles, createColumns } from "../table.js";
import { createBall, resetBallPosition, pointer } from "../ball.js";

export class Game2 extends Phaser.Scene{
    constructor(){
        super({ key: 'game2'})
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
            'scene02',
            'assets/Background2.png'
        )
        this.load.spritesheet(
            'tileseat',
            'assets/demo2.png',
            {frameWidth: 16, frameHeight: 16}
        )
        this.load.spritesheet(
            'table',
            'assets/tableBack02.png',
            {frameWidth: 56, frameHeight:56}
        )
        this.load.spritesheet(
            'frameTable',
            'assets/Marco02.png',
            {frameWidth: 36, frameHeight: 27}
        )
        this.load.image(
            'pillar',
            'assets/pillar2.png',
        )
        this.load.image(
            'ball',
            'assets/Ball.png',
        )
    }

    create(){
        // Fondo Tablero
        this.add.tileSprite(1010,559,850,700,'table')

        // Fondo
        this.add.tileSprite(0, this.sys.game.config.height - 740, this.sys.game.config.width,270,'scene02')
        .setOrigin(0,0.5)
        .setDisplaySize(1900,290)

        //Bola
        this.ball = createBall(this, this.initialBallPosition);

        //Tablero
        createColumns(this, this.ball);

        //suelo
        this.add.tileSprite(0, 210,this.sys.game.config.width,16, 'tileseat')
        .setOrigin(0,1)
        .setScale(1)
    }
}