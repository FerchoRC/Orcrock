// configuracion inicial del phaser 
const config = {
    type: Phaser.AUTO,
    width: 1900, // ancho de la pantalla
    height: 890, // largo de la pantalla
    autoCenter: Phaser.Scale.CENTER_BOTH, // centra la pantalla
    parent: 'game', // es el div del index

    scene: {
        preload, // precarga todos los recursos del juego
        create, // aqui carga cuando el juego comienza
        update, // ejecuta constantemente
    }
}

new Phaser.Game(config)

function preload(){
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
    
}

function create(){

    // Fondo Tablero
    this.add.tileSprite(1010,559,850,700,'table')

    // Fondo
    this.add.tileSprite(0, config.height - 830, config.width,780,'scene01')
    .setOrigin(0,0.5)
    .setDisplaySize(1900,290)
    
    // columnas
    this.add.tileSprite(520,550,36,710,'frameTable')
    this.add.tileSprite(550,240,36,70,'frameTable')
    this.add.tileSprite(570,240,36,70,'frameTable')
    this.add.tileSprite(590,550,36,710,'frameTable')
    this.add.tileSprite(1450,550,36,710,'frameTable')
    
    // suelo
    this.add.tileSprite(0, 209,config.width,16, 'tileseat')
    .setOrigin(0,1)
    .setScale(1)

}

function update(){
}