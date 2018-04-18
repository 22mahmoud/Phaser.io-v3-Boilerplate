import Phaser from 'phaser';

import sky from './assets/sky.png';
import bomb from './assets/bomb.png';
import dude from './assets/dude.png';
import platform from './assets/platform.png';
import star from './assets/star.png';

function preload() {
  this.load.image('sky', sky);
  this.load.image('ground', platform);
  this.load.image('star', star);
  this.load.image('bomb', bomb);
  this.load.spritesheet('dude', dude, {
    frameWidth: 32,
    frameHeight: 48,
  });
}

function create() {
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');
}

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

const game = new Phaser.Game(config);
