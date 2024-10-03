export function createBall(scene, initialPosition) {
    // Aqui se crea la bola
    const ball = scene.physics.add.image(initialPosition.x, initialPosition.y, 'ball').setDisplaySize(120, 120);
    ball.setSize(200, 200);
    ball.setCircle(100)
    ball.setOffset(405, 347);
    ball.setBounce(1, 1);
    ball.setVelocity(0, 0);
    ball.body.allowGravity = false;
    ball.isLaunched = false;

    return ball;
}

export function resetBallPosition(ball, initialPosition) {
    ball.setPosition(initialPosition.x, initialPosition.y);
    ball.setVelocity(0, 0);
    ball.isLaunched = false;
}

export function aimBall(scene, ball, pointer) {
    if (!ball.isLaunched) {
        scene.line.clear();
        scene.line.lineBetween(ball.x, ball.y, pointer.x, pointer.y);
    }
}

export function launchBall(scene, ball, pointer) {
    if (!ball.isLaunched) {

        
        // Calcula la dirección y la velocidad en función de la posición del ratón
        let directionX = pointer.x - ball.x;
        let directionY = pointer.y - ball.y;

        // Normaliza la dirección para obtener una velocidad proporcional
        let magnitude = Math.sqrt(directionX * directionX + directionY * directionY); // Magnitud del vector
        let speed = 500; // Establece una velocidad base

        // Calcula la velocidad proporcional para lanzar la bola
        ball.setVelocity((directionX / magnitude) * speed, (directionY / magnitude) * speed);
        ball.isLaunched = true; // Marca que la bola fue lanzada
        scene.line.clear();
    }
}

export function pointer(scene, ball) {
    // Línea gráfica
    scene.line = scene.add.graphics();

    // Configuracion del mouse
    scene.input.on('pointermove', (pointer) => aimBall(scene, ball, pointer));
    scene.input.on('pointerdown', (pointer) => launchBall(scene, ball, pointer));
}