'use strict';

/**
 * Dialogs plugin.
 */
Phaser.Plugin.Dialogs = function (game) {
    Phaser.Plugin.call(this, game);
    this.game = game;
    this.dialogs = new Phaser.Group(game, game.world, 'Dialogs');
};

Phaser.Plugin.Dialogs.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Dialogs.prototype.constructor = Phaser.Plugin.Dialogs;

Phaser.Plugin.Dialogs.prototype.createDialog = function createDialog (config) {
    var self = this,
        type = config.type || '',
        name = config.name || '',
        hasEasyClose = config.hasEasyClose || false,

        hasBg = config.hasBg || false,
        hasCloseBtn = config.hasCloseBtn || false,
        closeBtnSprite = config.closeBtnSprite || '',
        bgColor = config.bgColor || "0x000000",
        bgAlpha = config.bgAlpha || 0.7,
        centerV = config.centerV || true,
        centerH = config.centerH || true,
        objects = config.objects || [];

    var bg;
    var dialog = this.game.add.group();

    var initBg = function initBg() {

        bg = self.game.add.graphics(0, 0);
        bg.beginFill(bgColor, bgAlpha);
        bg.drawRect(0, 0, self.game.width, self.game.height);
        bg.inputEnabled = false;

        dialog.add(bg)
    };

    var initcloseBtn = function initcloseBtn () {
        var closeBtn = self.game.add.sprite(0, 0, closeBtnSprite);
        closeBtn.inputEnabled = true;
        closeBtn.x = self.game.width/2;
        closeBtn.y = self.game.height/2;
        closeBtn.anchor.x = 0.5;
        closeBtn.anchor.y = 0.5;
        closeBtn.events.onInputDown.add(function() {
            self.hideDialog(name);
        }, self);

        dialog.add(closeBtn);
    };

    var setEasyClose = function setEasyClose () {
        self.game.input.onDown.add(function() {
            self.hideDialog(name);
        }, self);

    };

    hasEasyClose && setEasyClose();
    hasBg && initBg();
    hasCloseBtn && initcloseBtn();
    this.dialogs.add(dialog);
    this.game.world.bringToTop(this.dialogs);
};

Phaser.Plugin.Dialogs.prototype.hideDialog = function hideDialog (name) {
    var dialog,
        self = this,
        getDialog = function getDialog() {
            for(var i = 0, col = self.dialogs.children, len = col.length; i<len; i++) {
                if(col[i].name === name) return col[i];
            }
        };
    dialog = getDialog(name);
    dialog.visible = false;


};
