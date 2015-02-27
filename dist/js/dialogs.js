'use strict';

/**
 * Dialogs plugin.
 */
Phaser.Plugin.Dialogs = function (game) {

    Phaser.Plugin.call(this, game);
    console.log("working")
    //this.dialogs = game.add.group('Dialogs');

};

Phaser.Plugin.Dialogs.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Dialogs.prototype.constructor = Phaser.Plugin.Dialogs;

Phaser.Plugin.Dialogs.prototype.createDialog = function (config) {
};
