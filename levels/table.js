export function createBubbles(scene, ball, positions) {
    // Limpiar burbujas existentes
    if (scene.bubble) {
        scene.bubble.clear(true);
    }
    scene.bubble = scene.physics.add.staticGroup();

    let random = Phaser.Math.Between(0, positions.length - 1);
    let randomPos = positions[random];

    positions.forEach(pos => {
        // Agregar burbujas a la escena
        if (!(pos.x === randomPos.x && pos.y === randomPos.y)) {
            scene.bubble.create(pos.x, pos.y, 'bubble').setScale(2.5).setCircle(10).refreshBody();
        }
    });

    // Crear burbuja especial
    if (scene.bubble2) {
        scene.bubble2.clear(true);
    }
    scene.bubble2 = scene.physics.add.staticGroup();
    scene.bubble2.create(randomPos.x, randomPos.y, 'bubble2').setScale(2.5).setCircle(10).refreshBody();

    // Manejo de colisiones
    collision(scene, ball, positions)
}

export function createColumns(scene, ball) {
    // Define las posiciones de las columnas
    const columnPositions = [
        { x: 520, y: 550, width: 36, height: 710 },
        { x: 550, y: 240, width: 36, height: 70 },
        { x: 570, y: 240, width: 36, height: 70 },
        { x: 590, y: 550, width: 36, height: 710 },
        { x: 1450, y: 550, width: 36, height: 710 },
    ];

    // Agregar los sprites de las columnas
    columnPositions.forEach(pos => {
        scene.add.tileSprite(pos.x, pos.y, pos.width, pos.height, 'frameTable');
    });

    // Crear un grupo de colisiones
    scene.columnColliders = scene.physics.add.staticGroup();

    // Agregar los colisionadores
    columnPositions.forEach(pos => {
        scene.columnColliders.create(pos.x, pos.y, 'frameTable')
            .setDisplaySize(pos.width, pos.height)
            .setVisible(false)
            .refreshBody();
    });
    scene.pillars = scene.physics.add.staticGroup();

    // Definir las posiciones de los pilares
    const pillarPositions = [
        { x: 780, y: 750 },
        { x: 1020, y: 750 },
        { x: 1250, y: 750 },
    ];

    // Agregar los pilares al grupo
    pillarPositions.forEach(pos => {
        scene.pillars.create(pos.x, pos.y, 'pillar').setScale(1.8).refreshBody();
    });
    scene.physics.add.collider(ball, scene.columnColliders);
    scene.physics.add.collider(ball, scene.pillars);
}

function collision(scene, ball, positions) {
    // Colisión con burbujas normales
    scene.physics.add.collider(ball, scene.bubble, (ball, bubble) => {
        bubble.destroy();
    });

    // Colisión con burbuja que reinicia
    scene.physics.add.collider(ball, scene.bubble2, (ball, bubble2) => {
        bubble2.destroy();
        createBubbles(scene, ball, positions);
    });
}