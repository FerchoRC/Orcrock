export function preload(scene) {
    scene.load.spritesheet('table', 'assets/tableBack02.png', {frameWidth: 56, frameHeight: 56});
    scene.load.spritesheet('frameTable', 'assets/Marco02.png', {frameWidth: 36, frameHeight: 27});
    scene.load.image('pillar', 'assets/pillar2.png');
    scene.load.image('ball', 'assets/Ball.png');
    scene.load.image('bubble', 'assets/Bubble.png');
    scene.load.image('bubble2', 'assets/Bubble3.png');
}

export function tileseat(scene, ball) {
    // Crea el tileSprite
    scene.add.tileSprite(0, 210, scene.sys.game.config.width, 16, 'tileseat')
        .setOrigin(0, 1)
        .setScale(1);

    // Crea el suelo
    scene.suelo = scene.physics.add.staticGroup();
    scene.suelo.create(scene.sys.game.config.width / 2, 202, 'tileseat')
        .setDisplaySize(scene.sys.game.config.width, 16)
        .setVisible(false)
        .refreshBody();

    // Colisión entre la bola y el suelo
    scene.physics.add.collider(ball, scene.suelo);
}

export function background(scene,heightSet,widthSet) {
    scene.add.tileSprite(1010,559,850,700,'table')
    scene.add.tileSprite(
        0,
        scene.sys.game.config.height - heightSet,
        scene.sys.game.config.width,
        widthSet,
        'scene01'
    )
    .setOrigin(0, 0.5)
    .setDisplaySize(1900, 290);
}