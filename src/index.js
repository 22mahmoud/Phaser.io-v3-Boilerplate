import Phaser from 'phaser';

function preload() {}

function create() {}

function update() {}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
