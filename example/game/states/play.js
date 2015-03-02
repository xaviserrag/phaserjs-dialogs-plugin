  'use strict';

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.Dialogs = this.game.plugins.add(new Phaser.Plugin.Dialogs(this.game));
      this.bg = this.game.add.sprite(-300,-300,'bg');

      var buttons = ['gameOver', 'level', 'list', 'random'];

      var dialogs = [
        {
          name: 'gameOver',
          btnOffsetY: 50,
          bgScreenAlpha: 0.9,
          hasEasyClose: true,
          fadeInType: 'alpha',
          fadeOutType: 'alpha',
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
          spriteSheet: 'btn',
          closeBtnSprite: 'close',
          btnOffsetY: 150,
          hasEasyClose: false,
          fadeInType: 'alphaScale',
          fadeOutType: 'alphaScale',
          objects: [
            {
              type: 'text',
              color: '#33ff33',
              fontFamily: 'Arial',
              fontSize: 52,
              offsetX: 0,
              offsetY: -100,
              content: "Hello World"
            },
            {
              type: 'text',
              color: '#3333ff',
              fontFamily: 'Arial',
              fontSize: 20,
              offsetX: 0,
              offsetY: -20,
              content: "Hi men"
            }
          ]
        },
        {
          name: 'list',
          bgImg: 'yeoman',
          hasEasyClose: true,
          fadeInType: 'alphaDown',
          fadeOutType: 'alphaUp',
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
          closeBtnSprite: 'closeBtn',
          btnOffsetY: 100,
          bgImg: 'yeoman',
          hasEasyClose: true,
          fadeInType: 'alphaScale',
          fadeOutType: 'alphaUp',
          objects: [
            {
              type: 'text',
              color: '#ff55ff',
              fontFamily: 'Arial',
              fontSize: 52,
              offsetX: 0,
              offsetY: -100,
              content: "Hello World"
            },
            {
              type: 'image',
              offsetY: -200,
              offsetX: -200,
              content: "yeoman"
            },
            {
              type: 'image',
              offsetY: -200,
              offsetX: 200,
              content: "yeoman"
            }
          ]
        }
      ];

      for(var i = 0; i < 4; i++){
        var self = this;
        var sprite = this.game.add.sprite(200 * i + 50, self.game.height/2 - 20, 'btn', buttons[i]);
        sprite.inputEnabled = true;
        sprite.anchor.y = 0.5;
        (function (i) {
          sprite.events.onInputDown.add(function () {
            console.log(i);
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
