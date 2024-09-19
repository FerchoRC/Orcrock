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
            {frameWidth: 8, frameHeight: 8}
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

        //Obstaculos
        //fila 1
        this.add.tileSprite(780,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(810,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(840,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(795,380,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(825,380,8,8,'bubble').setScale(2.5)
        
        this.add.tileSprite(995,380,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1025,380,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(980,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1010,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1040,400,8,8,'bubble').setScale(2.5)

        this.add.tileSprite(1180,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1210,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1240,400,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1195,380,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1225,380,8,8,'bubble').setScale(2.5)
        
        //fila 2
        this.add.tileSprite(840,500,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(870,500,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(825,520,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(855,520,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(885,520,8,8,'bubble').setScale(2.5)

        this.add.tileSprite(1040,500,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1070,500,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1025,520,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1055,520,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1085,520,8,8,'bubble').setScale(2.5)

        this.add.tileSprite(1240,500,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1270,500,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1225,520,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1255,520,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1285,520,8,8,'bubble').setScale(2.5)
        
        //fila 3
        this.add.tileSprite(765,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(745,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(730,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(780,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(745,660,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(765,660,8,8,'bubble').setScale(2.5)

        this.add.tileSprite(900,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(920,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(885,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(935,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(920,660,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(900,660,8,8,'bubble').setScale(2.5)

        this.add.tileSprite(1100,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1120,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1085,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1135,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1120,660,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1100,660,8,8,'bubble').setScale(2.5)

        this.add.tileSprite(1300,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1320,620,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1285,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1335,640,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1320,660,8,8,'bubble').setScale(2.5)
        this.add.tileSprite(1300,660,8,8,'bubble').setScale(2.5)


    }

    update(){
    }
}