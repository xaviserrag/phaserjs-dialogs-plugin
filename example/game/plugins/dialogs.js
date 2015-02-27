'use strict';

/**
 * Dialogs plugin.
 */
Phaser.Plugin.Dialogs = function (game) {
    Phaser.Plugin.call(this, game);
    this.game = game;

    this.dialogs = game.add.group();
    this.dialogs.name = 'Dialogs';
};

Phaser.Plugin.Dialogs.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Dialogs.prototype.constructor = Phaser.Plugin.Dialogs;

Phaser.Plugin.Dialogs.prototype.createDialog = function (config) {
    var self = this,
        type = config.type || '',
        hasBg = config.hasBg || false,
        hasCloseBtn = config.hasCloseBtn || false,
        bgColor = config.bgColor || "0x000000",
        bgAlpha = config.bgAlpha || 0.7,
        centerV = config.centerV || true,
        centerH = config.centerH || true,
        objects = config.objects || [];

    var dialog = this.game.add.group();

    var initBg = function initBg() {
        var bg;

        bg = self.game.add.graphics(0, 0);
        bg.beginFill(bgColor, bgAlpha);
        bg.drawRect(0, 0, self.game.width, self.game.height);
        bg.inputEnabled = true;

        dialog.add(bg)
    };

    var initcloseBtn = function initcloseBtn() {
        console.log('initCloseBtn');
    };

    hasBg && initBg();
    hasCloseBtn && initcloseBtn();
};

Phaser.Plugin.Dialogs.prototype.hideDialog = function (config) {
};

Phaser.Plugin.Dialogs.prototype.showDialog = function (config) {
};

Phaser.Plugin.Dialogs.prototype.showDialog = function (config) {
};
