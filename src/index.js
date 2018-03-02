import * as Phaser from 'phaser'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}