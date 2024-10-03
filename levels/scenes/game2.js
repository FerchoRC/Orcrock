import { createBubbles, createColumns } from "../table.js";
import { preload, tileseat, background } from "../preload.js";
import { createBall, resetBallPosition, pointer } from "../ball.js";

const positions = [
    { x: 780, y: 400 }, { x: 810, y: 400 }, { x: 840, y: 400 },
    { x: 795, y: 380 }, { x: 825, y: 380 }, { x: 995, y: 380 },
    { x: 1025, y: 380 }, { x: 980, y: 400 }, { x: 1010, y: 400 },
    { x: 1040, y: 400 }, { x: 1180, y: 400 }, { x: 1210, y: 400 },
    { x: 1240, y: 400 }, { x: 1195, y: 380 }, { x: 1225, y: 380 },
    { x: 870, y: 500 }, { x: 825, y: 520 }, { x: 855, y: 520 },
    { x: 885, y: 520 }, { x: 1040, y: 500 }, { x: 1070, y: 500 },
    { x: 1025, y: 520 }, { x: 1055, y: 520 }, { x: 1085, y: 520 },
    { x: 1240, y: 500 }, { x: 840, y: 500 }, { x: 1270, y: 500 },
    { x: 1225, y: 520 }, { x: 1255, y: 520 }, { x: 1285, y: 520 },
    { x: 765, y: 620 }, { x: 745, y: 620 }, { x: 730, y: 640 },
    { x: 780, y: 640 }, { x: 745, y: 660 }, { x: 765, y: 660 },
    { x: 900, y: 620 }, { x: 920, y: 620 }, { x: 885, y: 640 },
    { x: 935, y: 640 }, { x: 920, y: 660 }, { x: 900, y: 660 },
    { x: 1100, y: 620 }, { x: 1120, y: 620 }, { x: 1085, y: 640 },
    { x: 1135, y: 640 }, { x: 1120, y: 660 }, { x: 1100, y: 660 },
    { x: 1300, y: 620 }, { x: 1320, y: 620 }, { x: 1285, y: 640 },
    { x: 1335, y: 640 }, { x: 1320, y: 660 }, { x: 1300, y: 660 },
];

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
            'scene01',
            'assets/Background2.png'
        )
        this.load.spritesheet(
            'tileseat',
            'assets/demo2.png',
            {frameWidth: 16, frameHeight: 16}
        )
        preload(this)
       
    }

    create(){

        // Fondo
        background(this,740,270)

        //Bola
        this.ball = createBall(this, this.initialBallPosition);

        //Tablero
        createColumns(this, this.ball);
        createBubbles(this,this.ball,positions);

        //suelo
        tileseat(this, this.ball)

        //Lanzamiento bola
        pointer(this, this.ball)
    }

    update(){
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width || this.ball.y < 0 || this.ball.y > this.sys.game.config.height) {
            resetBallPosition(this.ball, this.initialBallPosition);
        }
    }
}