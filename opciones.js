export class Options extends Phaser.Scene {
    constructor() {
        super({ key: 'Options' });
    }

    preload() {

        console.log("Cargando recursos...");

        // Cargar la imagen de fondo
        this.load.image(
            'options',
            'assets/options.png'
        )
    }

    create() {
          // Iniciar la transición con un fade-in
       this.cameras.main.fadeIn(1000, 0, 0, 0);
       
        console.log("Se está creando la escena");
        this.add.image(400, 900, 'options'); // Añadir el fondo

        // Escalar el fondo
        let background = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'options');
        background.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // Crear las zonas clickeables invisibles
        let hitbox1 = this.add.zone(1030, 670, 100, 80).setOrigin(0).setInteractive(); // Ajusta las posiciones y tamaños
        let hitbox2 = this.add.zone(1250, 670, 100, 80).setOrigin(0).setInteractive();

        // Evento para cuando se haga clic en la primera hitbox
        hitbox1.on('pointerdown', () => {
            console.log('Hitbox 1 clickeada');
            this.scene.start('game');
        });

        hitbox2.on('pointerdown', () => {
            console.log('Hitbox 2 clickeada');
            this.scene.start('Home');
        });
    }
    }
