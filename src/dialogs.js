'use strict';

/**
 * Dialogs plugin.
 */
Phaser.Plugin.Dialogs = function (game) {
    Phaser.Plugin.call(this, game);
    this.game = game;
    this.dialogs = new Phaser.Group(this.game, this.game.world, 'Dialogs');

    this.getDialog = function getDialog(name) {
        for(var i = 0, col = this.dialogs.children, len = col.length; i<len; i++) {
            if(col[i].name === name) return col[i];
        }
    };

    this.animate = function animate(dialog, type) {
        var self = this,
            animations = {
                'alphaIn': function () {
                    return self.game.add.tween(dialog)
                        .from({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
                },
                'alphaUpIn': function () {
                    self.game.add.tween(dialog)
                        .from({alpha: 0, y: dialog.y + 50}, 500, Phaser.Easing.Cubic.InOut, true);
                    return self.game.add.tween(dialog.scale)
                        .from({x: 0.5, y: 0.5}, 500, Phaser.Easing.Cubic.InOut, true);
                },
                'alphaDownIn': function () {
                    self.game.add.tween(dialog)
                        .from({alpha: 0, y: dialog.y - 50}, 500, Phaser.Easing.Cubic.InOut, true);
                    return self.game.add.tween(dialog.scale)
                        .from({x: 0.5, y: 0.5}, 500, Phaser.Easing.Cubic.InOut, true);
                },
                'alphaScaleIn': function () {
                    return self.game.add.tween(dialog)
                        .from({alpha: 0, y: dialog.y + 50}, 500, Phaser.Easing.Cubic.InOut, true);
                },
                'alphaOut': function () {
                    return self.game.add.tween(dialog)
                        .to({alpha: 0}, 500, Phaser.Easing.Linear.None, true);
                },
                'alphaUpOut': function () {
                    self.game.add.tween(dialog)
                        .to({alpha: 0, y: dialog.y + 50}, 500, Phaser.Easing.Cubic.InOut, true);
                    return self.game.add.tween(dialog.scale)
                        .to({x: 0.5, y: 0.5}, 500, Phaser.Easing.Cubic.InOut, true);
                },
                'alphaDownOut': function () {
                    self.game.add.tween(dialog)
                        .to({alpha: 0, y: dialog.y - 50}, 500, Phaser.Easing.Cubic.InOut, true);
                    return self.game.add.tween(dialog.scale)
                        .to({x: 0.5, y: 0.5}, 500, Phaser.Easing.Cubic.InOut, true);
                },
                'alphaScaleOut': function () {
                    return self.game.add.tween(dialog)
                        .to({alpha: 0, y: dialog.y + 50}, 500, Phaser.Easing.Cubic.InOut, true);
                }
            },
            tween, animType;

        animType = (type === 'In') ? dialog.fadeInType : dialog.fadeOutType;

        if (animType && typeof animType === "string") {
            tween = animations[animType+type].call(self);
        } else if (typeof animType === "function") {
            tween = animType.call(self, dialog);
        } else {
            tween = animations["alpha"].call(self);
        }

        return tween;
    };

     this.destroy = function destroy (name) {
       var currentDialog = this.getDialog(name);
       if (currentDialog && currentDialog.fadeOutType !== '') {
         this.animate(currentDialog, 'Out').onComplete.add(function () {
           currentDialog.destroy();
         }, this);
       } else if (currentDialog) {
         currentDialog.destroy();
       }
     }
};

Phaser.Plugin.Dialogs.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.Dialogs.prototype.constructor = Phaser.Plugin.Dialogs;

Phaser.Plugin.Dialogs.prototype.createDialog = function createDialog (config) {
    var self = this,
        spriteSheet = config.spriteSheet || '',
        name = config.name || '',
        hasEasyClose = config.hasEasyClose || false,
        hasBgScreen = config.hasBgScreen || false,
        bgImg = config.bgImg || '',
        closeBtnSprite = config.closeBtnSprite || '',
        btnOffsetY = config.btnOffsetY || 0,
        bgScreenColor = config.bgScreenColor || "0x000000",
        bgScreenAlpha = config.bgScreenAlpha || 0.7,
        fadeInType = config.fadeInType || '',
        fadeOutType = config.fadeOutType || '',
        objects = config.objects || [];

    var bgScreen;
    var dialog = this.game.add.group();
    dialog.fadeOutType = fadeOutType;
    dialog.fadeInType = fadeInType;
    dialog.name = name;
    dialog.x = self.game.width / 2;
    dialog.y = self.game.height / 2;


    var initBgScreen = function initBg() {
        bgScreen = self.game.add.graphics(0, 0);
        bgScreen.beginFill(bgScreenColor, bgScreenAlpha);
        bgScreen.drawRect(0 - self.game.width * 2, 0 - self.game.height * 2, self.game.width * 4, self.game.height * 4);
        bgScreen.inputEnabled = true;
        dialog.add(bgScreen);
    };

    var initBgImg = function initBg() {
        if(spriteSheet !== '') {
          bgImg = self.game.add.sprite(0, 0, spriteSheet, bgImg);
        } else {
          bgImg = self.game.add.sprite(0, 0, bgImg);
        }
        bgImg.anchor.x = 0.5;
        bgImg.anchor.y = 0.5;
        bgImg.inputEnabled = false;

        dialog.add(bgImg)
    };

    var initCloseBtn = function initCloseBtn () {
        var closeBtn;

        if(spriteSheet !== '') {
          closeBtn= self.game.add.sprite(0, 0, spriteSheet, closeBtnSprite);
        } else {
            closeBtn= self.game.add.sprite(0, 0, closeBtnSprite);
        }
        closeBtn.inputEnabled = true;
        closeBtn.y = 0 + btnOffsetY;
        closeBtn.anchor.x = 0.5;
        closeBtn.anchor.y = 0.5;
        closeBtn.events.onInputDown.addOnce(function() {
            self.destroy(name);
        }, self);

        dialog.add(closeBtn);
    };

    var initObjects = function initObjects () {
        for(var i = 0, len = objects.length; i < len; i++) {
            var item = objects[i],
                type = item.type || 'text',
                color = item.color || '#000',
                fontFamily = item.fontFamily || 'Arial',
                fontSize = item.fontSize || 32,
                stroke = item.stroke || '#000',
                strokeThickness = item.strokeThickness || 0,
                align = item.align || 'center',
                offsetX = item.offsetX || 0,
                offsetY = item.offsetY || 0,
                contentScale = item.contentScale || 1,
                content = item.content || '',
                animation = item.animation || [],
                callback = item.callback || false,
                label;


            if (type === "text") {
                label = self.game.add.text(0, 0, content, {
                    font: fontSize + 'px ' + fontFamily,
                    fill: color,
                    stroke: stroke,
                    strokeThickness: strokeThickness,
                    align: align
                });
                label.contentType = 'text';
                label.update();
                label.x = (0 - (label.width / 2)) + offsetX;
                label.y = (0 - (label.height / 2)) + offsetY;
            }

            if (type === 'bitmapText') {
                label = self.game.add.bitmapText(0, 0, fontFamily, String(content), fontSize);
                label.contentType = 'bitmapText';
                label.updateText();
                label.x = (0 - ((label.width) / 2)) + offsetX;
                label.y = (0 - ((label.height) / 2)) + offsetY;
            }

            if (type === "image") {
                if(spriteSheet !== '') {
                  label = self.game.add.sprite(0, 0, spriteSheet, content);
                  if(animation.length > 0) {
                    label.animations.add('anim', animation);
                    label.animations.play('anim', 10, true);
                  }
                } else{
                  label = self.game.add.sprite(0, 0, content);
                }
                label.scale.setTo(contentScale, contentScale);
                label.x = (0 - ((label.width) / 2)) + offsetX;
                label.y = (0 - ((label.height) / 2)) + offsetY;

                if(callback) {
                  label.inputEnabled = true;
                  label.events.onInputDown.add(callback, self)
                }
            }

            label.offsetX = offsetX;
            label.offsetY = offsetY;

            dialog.add(label);
        }
    };

    var setEasyClose = function setEasyClose () {
        self.game.input.onDown.addOnce(function () {
          self.destroy(name);
        });
    };


    hasBgScreen && initBgScreen();
    bgImg !== '' && initBgImg();
    closeBtnSprite != '' && initCloseBtn();
    objects.length > 0 && initObjects();
    hasEasyClose && setEasyClose();

    fadeInType != '' && this.animate(dialog, 'In');

    this.dialogs.add(dialog);
    this.game.world.bringToTop(this.dialogs);
};

//TODO fix this.
//Phaser.Plugin.Dialogs.prototype.hide = function hide (name) {
//  var currentDialog = this.getDialog(name);
//  if(currentDialog.fadeOutType !== '') {
//    this.animate(currentDialog, 'Out').onComplete.add(function () {
//      currentDialog.visibility = false;
//    }, this);
//  } else {
//    currentDialog.visibility = false;
//  }
//};
//
//Phaser.Plugin.Dialogs.prototype.show = function show (name) {
//  var currentDialog = this.getDialog(name);
//  if(currentDialog.fadeInType !== '') {
//    this.animate(currentDialog, 'In').onComplete.add(function () {
//      currentDialog.visibility = true;
//    }, this);
//  } else {
//    currentDialog.visibility = true;
//  }
//};
