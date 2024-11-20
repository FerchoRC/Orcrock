export function createCharacter(scene, key, posx, posy, offsetx, offsety){

    scene.anims.create({
        key: key,
        frames: scene.anims.generateFrameNumbers(key, {
            start: 12,
            end: 15
        }),
        frameRate: 5,
        repeat: -1
    });
    const character = scene.physics.add.sprite(posx, posy, key).setDisplaySize(120,120);
    character.body.allowGravity = true;
    character.setSize(20,30);
    character.setOffset(offsetx, offsety);
    character.anims.play(key)

    return character;
}