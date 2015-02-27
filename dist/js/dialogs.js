'use strict';

/**
 * Dialogs plugin.
 */
Phaser.Plugin.Dialogs = function (game) {
    Phaser.Plugin.call(this, game);

  this.dialogs = game.add.group();
    this.dialogs.inputEnabled = true;
};

Phaser.Plugin.Dialogs.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Dialogs.prototype.constructor = Phaser.Plugin.Dialogs;

Phaser.Plugin.Dialogs.prototype.createDialog = function (config) {
  var type = config.type || '',
      hasBg = config.hasBg || false,
      hasCloseBtn = config.hasCloseBtn || false,
      bgColor = config.bgColor || "0x000000",
      bgAlpha = config.bgAlpha || 0.7,
      centerV = config.centerV || true,
      centerH = config.centerH || true,
      objects = config.objects || [];

  var dialog;

  var initBg = function initBg() {
    console.log("init Bg");
  };

  hasBg && initBg();
};

Phaser.Plugin.Dialogs.prototype.hideDialog = function (config) {
};

Phaser.Plugin.Dialogs.prototype.showDialog = function (config) {
};

Phaser.Plugin.Dialogs.prototype.showDialog = function (config) {
};
