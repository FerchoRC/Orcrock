import { Objects } from './objects.js'
export class Game extends Phaser.Scene{

    constructor(){
        super({ key: 'game'});
        this.bubblePosition = [];
        this.bubble = null;
        this.bubble2 = null;
        this.initialBallPosition = { x: 1000, y: 280 };
        this.line = null
        this.maxLineLength = 300
    }
    preload(){
        
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

        // Fondo Tablero
        this.add.tileSprite(1010,559,850,700,'table')

        // Fondo
        this.add.tileSprite(0, this.sys.game.config.height - 730, this.sys.game.config.width,780,'scene01')
        .setOrigin(0,0.5)
        .setDisplaySize(1900,290)
        
        // columnas
        this.add.tileSprite(520,550,36,710,'frameTable')
        this.add.tileSprite(550,240,36,70,'frameTable')
        this.add.tileSprite(570,240,36,70,'frameTable')
        this.add.tileSprite(590,550,36,710,'frameTable')
        this.add.tileSprite(1450,550,36,710,'frameTable')

        this.columnColliders = this.physics.add.staticGroup();

        this.columnColliders.create(520, 550, 'frameTable').setDisplaySize(36, 710).setVisible(false).refreshBody();
        this.columnColliders.create(550, 240, 'frameTable').setDisplaySize(36, 70).setVisible(false).refreshBody();
        this.columnColliders.create(570, 240, 'frameTable').setDisplaySize(36, 70).setVisible(false).refreshBody();
        this.columnColliders.create(590, 550, 'frameTable').setDisplaySize(36, 710).setVisible(false).refreshBody();
        this.columnColliders.create(1450, 550, 'frameTable').setDisplaySize(36, 710).setVisible(false).refreshBody();
        
        
        // suelo
        this.add.tileSprite(0, 210,this.sys.game.config.width,16, 'tileseat')
        .setOrigin(0,1)
        .setScale(1)

        this.suelo = this.physics.add.staticGroup();
        this.suelo.create(this.sys.game.config.width / 2, 210, 'tileseat').setDisplaySize(this.sys.game.config.width, 16).setVisible(false).refreshBody()

        // pilar
        this.pillar = this.physics.add.staticGroup()
        this.pillar.create(780,750,'pillar').setScale(1.8).refreshBody()
        this.pillar.create(1020,750,'pillar').setScale(1.8).refreshBody()
        this.pillar.create(1250,750,'pillar').setScale(1.8).refreshBody()

        //Bola
        this.ball = this.physics.add.image(this.initialBallPosition.x, this.initialBallPosition.y, 'ball').setDisplaySize(120,120)
        this.ball.setSize(200,200)
        this.ball.setOffset(400,340)
        this.ball.setBounce(1,1)
        this.ball.setVelocity(0,0)
        this.ball.body.allowGravity = false;


        //Colisiones
        this.createBubbles();
        
        
        this.physics.add.collider(this.ball, this.bubble, (ball, bubble) => {
            if (ball.body.touching && bubble.body.touching){
                bubble.destroy()
            }
        })
        this.physics.add.collider(this.ball, this.bubble2,(ball, bubble2) => {
            bubble2.destroy()
            this.createBubbles()
        })
        this.physics.add.collider(this.ball, this.columnColliders);
        this.physics.add.collider(this.ball, this.suelo);
        this.physics.add.collider(this.ball, this.pillar);

        //mouse
        this.input.on('pointermove',this.aimBall, this)
        this.input.on('pointerdown',this.launchBall, this)

        //puntero
        this.line = this.add.graphics()

    }
    // Creacion de las burbujas en sus posiciones
    createBubbles(){
        if(this.bubble){
            this.bubble.clear(true)
        }
        this.bubble = this.physics.add.staticGroup()
        let positions = [
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
        let random = Phaser.Math.Between(0,positions.length - 1)
        let randomPos = positions[random]
        positions.forEach(pos => {
            if (!(pos.x === randomPos.x && pos.y === randomPos.y)) {
                this.bubble.create(pos.x, pos.y, 'bubble').setScale(2.5).refreshBody();
            }
        })

        if (this.bubble2) {
            this.bubble2.clear(true); 
        }
        this.bubble2 = this.physics.add.staticGroup();
        this.bubble2.create(randomPos.x, randomPos.y, 'bubble2').setScale(2.5).refreshBody()

        this.physics.add.collider(this.ball, this.bubble, (ball, bubble) => {
            if (ball.body.touching && bubble.body.touching) {
                bubble.destroy();
            }
        });

        this.physics.add.collider(this.ball, this.bubble2,(ball, bubble2) => {
            bubble2.destroy()
            this.createBubbles()
        })

    }

    resetBallPosition(){
        this.ball.setPosition(this.initialBallPosition.x, this.initialBallPosition.y)
        this.ball.setVelocity(0, 0);
        this.isLaunched = false;
    }

    aimBall(pointer) {
        if (!this.isLaunched) {
            this.line.clear()
            this.line.lineBetween(this.ball.x, this.ball.y, pointer.x, pointer.y);
        }
    }

    launchBall(pointer) {
        if (!this.isLaunched) {
            // Calcula la dirección y la velocidad en función de la posición del ratón
            let directionX = pointer.x - this.ball.x;
            let directionY = pointer.y - this.ball.y;

            // Normaliza la dirección para obtener una velocidad proporcional
            let magnitude = Math.sqrt(directionX * directionX + directionY * directionY); // Magnitud del vector
            let speed = 500; // Establece una velocidad base

            // Calcula la velocidad proporcional para lanzar la bola
            this.ball.setVelocity((directionX / magnitude) * speed, (directionY / magnitude) * speed);
            this.isLaunched = true; // Marca que la bola fue lanzada
            this.line.clear()
        }
    }

    update(){
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width || this.ball.y < 0 || this.ball.y > this.sys.game.config.height) {
            this.resetBallPosition();
        }
    }
}