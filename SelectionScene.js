export class SelectionScene extends Phaser.Scene {
    constructor() {
        super({ key: 'SelectionScene' });
    }

    preload() {

        console.log("Cargando recursos...");

        // Cargar la imagen de fondo
        this.load.image(
            'background',
            'assets/bricks.png'
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

        // Cargar las imágenes de los objetos
        this.load.image('daga', 'assets/daga.png');
        this.load.image('maza', 'assets/maza.png');
        this.load.image('espada', 'assets/iron_sword.png');
    }

    create() {

        console.log("Se está creando la escena");
        this.add.image(400, 900, 'background'); // Añadir el fondo

        // Escalar el fondo
        let background = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'background');
        background.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // Mostrar los objetos
        const object1 = this.add.image(centerX - 400, centerY, 'daga').setOrigin(0.5).setScale(2).setInteractive();
        const object2 = this.add.image(centerX, centerY, 'maza').setOrigin(0.5).setScale(1.4).setInteractive();
        const object3 = this.add.image(centerX + 400, centerY, 'espada').setOrigin(0.5).setScale(1.5).setInteractive();

        // Detectar clics en los objetos
        object1.on('pointerdown', () => this.selectObject('daga'));
        object2.on('pointerdown', () => this.selectObject('maza'));
        object3.on('pointerdown', () => this.selectObject('espada'));

        // Enviarnos al juego al escoger objeto
        object1.on('pointerdown', () => this.scene.start('game'));
        object2.on('pointerdown', () => this.scene.start('game'));
        object3.on('pointerdown', () => this.scene.start('game'));
    }

    selectObject(object) {
        console.log('Objeto seleccionado:', object);
        // Aquí puedes cambiar a la escena principal y guardar el objeto seleccionado
        this.scene.start('Game', { selectedObject: object });
    }
}    