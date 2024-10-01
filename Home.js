export class Home extends Phaser.Scene {
    constructor() {
        super({ key: 'Home' });
    }

    preload() {

        console.log("Cargando recursos...");

        // Cargar la imagen de fondo
        this.load.image(
            'home',
            'assets/pantalla_inicio.png'
        )

        this.load.audio('backgroundMusic', 'assets/music.ogg');
    
        // Verifica que la música se ha cargado
        this.load.on('complete', function() {
            console.log("Música cargada correctamente");
        });
    }

    create() {
        

         // Reproducir la música de fondo y hacer que no se detenga al cambiar de escena
         this.music = this.sound.add('backgroundMusic', {
            volume: 5,
            loop: true // Repetir la música en bucle
        });

        this.music.play();
        
        // Verificar si la música ya está sonando
        if (!this.sound.get('backgroundMusic')) {
            this.music.play();
            console.log("Música reproduciéndose");
        } else {
            console.log("La música ya está activa");
        }

        console.log("Se está creando la escena");
        this.add.image(400, 900, 'home'); // Añadir el fondo

        // Escalar el fondo
        let background = this.add.image(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'home');
        background.setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);

        const centerX = this.cameras.main.centerX;
        const centerY = this.cameras.main.centerY;

        // Crear las 3 zonas clickeables invisibles
        let hitbox1 = this.add.zone(750, 350, 400, 50).setOrigin(0).setInteractive(); // Ajusta las posiciones y tamaños
        let hitbox2 = this.add.zone(750, 450, 400, 50).setOrigin(0).setInteractive();
        let hitbox3 = this.add.zone(750, 530, 400, 50).setOrigin(0).setInteractive();

        // Evento para cuando se haga clic en la primera hitbox
        hitbox1.on('pointerdown', () => {
            console.log('Hitbox 1 clickeada');
            this.cameras.main.fadeOut(1000, 0, 0, 0); // Iniciar fade
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('SelectionScene');
        });
    });

        hitbox2.on('pointerdown', () => {
            console.log('Hitbox 2 clickeada');
            this.cameras.main.fadeOut(1000, 0, 0, 0); // Iniciar fade
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('SelectionScene');
        });
    });

        hitbox3.on('pointerdown', () => {
            console.log('Hitbox 3 clickeada');
            this.cameras.main.fadeOut(1000, 0, 0, 0); // Iniciar fade
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('SelectionScene');
        });
    });
    }
}
