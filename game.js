export class Game extends Phaser.Scene{

    constructor(){
        super({ key: 'game'});
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
        
        // suelo
        this.add.tileSprite(0, 210,this.sys.game.config.width,16, 'tileseat')
        .setOrigin(0,1)
        .setScale(1)

        // pilar
        this.pillar = this.physics.add.staticGroup()
        this.pillar.create(780,750,'pillar').setScale(1.8).refreshBody()
        this.pillar.create(1020,750,'pillar').setScale(1.8).refreshBody()
        this.pillar.create(1250,750,'pillar').setScale(1.8).refreshBody()

        //Bola
        this.ball = this.physics.add.image(1000, 280, 'ball').setDisplaySize(120,120)
        this.ball.setSize(200,200)
        this.ball.setOffset(400,340)
        //this.ball.body.allowGravity = false;

        //Obstaculos
        this.bubble = this.physics.add.staticGroup()
        this.physics.add.collider(this.ball, this.bubble,null)
        this.ball.setBounce(1)
        //fila 1
        this.bubble.create(780,400,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(810,400,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(840,400,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(795,380,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(825,380,'bubble').setScale(2.5).refreshBody();
        
        this.bubble.create(995,380,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(1025,380,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(980,400,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(1010,400,'bubble').setScale(2.5).refreshBody();
        this.bubble.create(1040,400,'bubble').setScale(2.5).refreshBody();

        this.bubble.create(1180,400,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1210,400,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1240,400,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1195,380,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1225,380,'bubble').setScale(2.5).refreshBody()

        
        //fila 2
        this.bubble.create(840,500,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(870,500,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(825,520,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(855,520,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(885,520,'bubble').setScale(2.5).refreshBody()
        
        this.bubble.create(1040,500,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1070,500,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1025,520,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1055,520,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1085,520,'bubble').setScale(2.5).refreshBody()
        
        this.bubble.create(1240,500,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1270,500,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1225,520,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1255,520,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1285,520,'bubble').setScale(2.5).refreshBody()
        
        //fila 3
        this.bubble.create(765,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(745,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(730,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(780,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(745,660,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(765,660,'bubble').setScale(2.5).refreshBody()
        
        this.bubble.create(900,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(920,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(885,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(935,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(920,660,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(900,660,'bubble').setScale(2.5).refreshBody()
        
        this.bubble.create(1100,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1120,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1085,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1135,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1120,660,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1100,660,'bubble').setScale(2.5).refreshBody()
        
        this.bubble.create(1300,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1320,620,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1285,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1335,640,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1320,660,'bubble').setScale(2.5).refreshBody()
        this.bubble.create(1300,660,'bubble').setScale(2.5).refreshBody()


    }

    update(){
    }
}