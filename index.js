import { Home } from './Home.js'
import { Options } from './opciones.js';
import { Credits } from './creditos.js';
import { SelectionScene } from './SelectionScene.js'
import { Game } from './levels/scenes/game.js';
import { Game2 } from './levels/scenes/game2.js';
import { Game4 } from './levels/scenes/game4.js';
import { Game3 } from './levels/scenes/game3.js';

// configuracion inicial del phaser 
const config = {
    type: Phaser.AUTO,
    width: 1890, // ancho de la pantalla
    height: 800, // largo de la pantalla
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, // centra la pantalla
    },
    scene: [  Game, Game2, Game3, Game4], // Escenas
    audio: {
        disableWebAudio: false, noAudio: false, // Habilita el sistema de audio de Phaser
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100},
            debug: false
        }
    }
}
let game = new Phaser.Game(config)