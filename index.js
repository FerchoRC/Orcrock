import { Home } from './Home.js';
import { SelectionScene } from './SelectionScene.js';
import { Game } from './game.js';

// configuracion inicial del phaser 
const config = {
    type: Phaser.AUTO,
    width: 1890, // ancho de la pantalla
    height: 800, // largo de la pantalla
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH, // centra la pantalla
    },
    scene: [Home, SelectionScene, Game], // Escenas
    audio: {
        disableWebAudio: false, noAudio: false, // Habilita el sistema de audio de Phaser
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100},
            debug: true
        }
    }
}
let game = new Phaser.Game(config)