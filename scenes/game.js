import { createBubbles, createColumns } from "../table.js";
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

        this.load.spritesheet(
            'frameTable',
            'assets/Marco02.png',
            {frameWidth: 36, frameHeight: 27}
        )

        this.load.spritesheet(
            'table',
            'assets/tableBack02.png',
            {frameWidth: 56, frameHeight:56}
        )

        this.load.image(
            'bubble',
            'assets/Bubble.png',
        )

        this.load.image(
            'ball',
            'assets/Ball.png',
        )

        this.load.image(
            'pillar',
            'assets/pillar2.png',
        )

        this.load.image(
            'bubble2',
            'assets/Bubble3.png'
        )
        
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

        // Fondo Tablero
        this.add.tileSprite(1010,559,850,700,'table')

        // Fondo
        this.add.tileSprite(0, this.sys.game.config.height - 730, this.sys.game.config.width,780,'scene01')
        .setOrigin(0,0.5)
        .setDisplaySize(1900,290)

        //Bola
        this.ball = createBall(this, this.initialBallPosition);

        //Tablero
        createColumns(this, this.ball);
        createBubbles(this,this.ball,positions);

        //suelo
        this.add.tileSprite(0, 210,this.sys.game.config.width,16, 'tileseat')
        .setOrigin(0,1)
        .setScale(1)

        this.suelo = this.physics.add.staticGroup();
        this.suelo.create(this.sys.game.config.width / 2, 202, 'tileseat').setDisplaySize(this.sys.game.config.width, 16).setVisible(false).refreshBody()
        
        this.physics.add.collider(this.ball, this.suelo);

        //Lanzamiento bola
        pointer(this, this.ball)

    }

    update(){
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width || this.ball.y < 0 || this.ball.y > this.sys.game.config.height) {
            resetBallPosition(this.ball, this.initialBallPosition);
        }
    }
}