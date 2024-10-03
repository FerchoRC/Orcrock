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

export class Game extends Phaser.Scene{
    constructor(){
        super({ key: 'game'});
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

    init(data) {
        // Recibir el objeto seleccionado desde la escena de selección
        this.selectedObject = data.selectedObject;
    }

    preload(){

        // Carga el objeto seleccionado si es necesario
        if (this.selectedObject) {
        this.load.image(this.selectedObject, `assets/${this.selectedObject}.png`);
        }

        this.load.image(
            'scene01',
            'assets/Background.png'
        )

        this.load.spritesheet(
            'tileseat',
            'assets/demo.png',
            {frameWidth: 16, frameHeight: 16}
        )
        preload(this)

    }

    create(){

       // Iniciar la transición con un fade-in
       this.cameras.main.fadeIn(1000, 0, 0, 0);

       // Mostrar texto de bienvenida
       this.add.text(100, 100, '¡Bienvenido a Orcrock!', { fontSize: '32px', fill: '#fff' });

       // Aquí se puede usar el objeto seleccionado a gusto
       if (this.selectedObject) {
       this.add.image(100, 100, this.selectedObject); // Ejemplo de mostrar el objeto seleccionado
       }

        // Fondo
        background(this,730,780)

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