  'use strict';

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.Dialogs = this.game.plugins.add(new Phaser.Plugin.Dialogs(this.game));
      this.bg = this.game.add.sprite(-300,-300,'bg');

      var buttons = ['game-over-btn', 'level-btn', 'list-btn', 'random-btn'];
      var dialogs = [
        {
          name: 'gameOver',
          closeBtnOffsetY: 50,
          bgScreenAlpha: 0.9,
          hasBgScreen: true,
          hasEasyClose: true,
          fadeIn: 'alpha',
          fadeOut: 'alpha',
          objects: [
            {
              type: 'text',
              color: '#fff',
              fontFamily: 'Arial',
              fontSize: 90,
              offsetY: -150,
              content: "Game Over"
            },
            {
              type: 'text',
              color: '#fff',
              fontFamily: 'Arial',
              fontSize: 40,
              content: "Score:"
            },
            {
              type: 'text',
              color: '#fff',
              fontFamily: 'Arial',
              fontSize: 25,
              offsetY: 50,
              content: "1500"
            }
          ]
        },
        {
          name: 'level',
          spriteSheet: 'popup',
          closeBtnSprite: 'close-btn',
          bgImg: 'bg-popup',
          closeBtnOffsetY: 151,
          hasEasyClose: false,
          fadeIn: 'alphaScale',
          fadeOut: 'alphaScale',
          objects: [
            {
              type: 'text',
              color: '#222',
              fontFamily: 'Arial',
              fontSize: 52,
              offsetY: -130,
              content: "Level Cleared!"
            },
            {
              type: 'text',
              color: '#222',
              fontFamily: 'Arial',
              fontSize: 30,
              offsetX: -200,
              offsetY: -20,
              content: "Gems: "
            },
            {
              type: 'text',
              color: '#222',
              fontFamily: 'Arial',
              fontSize: 30,
              offsetX: -120,
              offsetY: -20,
              content: "120"
            },
            {
              type: 'image',
              offsetX: -20,
              offsetY: -20,
              content: "gem"
            }
          ]
        },
        {
          name: 'list',
          bgImg: 'yeoman',
          hasBgScreen: true,
          hasEasyClose: true,
          fadeIn: 'alphaDown',
          fadeOut: 'alphaUp',
          objects: [
            {
              type: 'text',
              color: '#111',
              fontFamily: 'Arial',
              fontSize: 52,
              offsetX: 0,
              offsetY: -150,
              content: "Hello sir"
            }
          ]
        },
        {
          name: 'random',
          spriteSheet: 'popup',
          closeBtnOffsetY: 100,
          hasBgScreen: true,
          bgScreenColor: 0x55ffff,
          hasEasyClose: true,
          fadeIn: 'alphaScale',
          fadeOut: 'alphaUp',
          objects: [
            {
              type: 'text',
              color: '#000',
              fontFamily: 'Arial',
              fontSize: 52,
              offsetX: 0,
              offsetY: -100,
              content: "Random Mario animation"
            },
            {
              type: 'image',
              offsetX: -30,
              content: "mario"
            },
            {
              type: 'image',
              offsetX: 30,
              content: "mario",
              animation: ['mario0', 'mario1', 'mario2']
            }
          ]
        }
      ];
      this.game.Dialogs.createDialog({});

      for(var i = 0; i < 4; i++){
        var self = this,
            sprite = this.game.add.sprite(200 * i + 50, self.game.height/2 - 20, 'popup', buttons[i]);
        sprite.inputEnabled = true;
        sprite.anchor.y = 0.5;
        (function (i) {
          sprite.events.onInputDown.add(function () {
            self.game.Dialogs.createDialog(dialogs[i]);
          }, this);
        })(i);

      }
    },
    update: function() {
    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
