  'use strict';

  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.Dialogs = this.game.plugins.add(new Phaser.Plugin.Dialogs(this.game));
      var dialogs = [
        {
          name: 'popup',
          btnOffsetY: 50,
          hasEasyClose: true,
          fadeInType: 'alpha',
          fadeOutType: 'alpha',
          objects: [
            {
              type: 'text',
              color: '#fff',
              fontFamily: 'Arial',
              fontSize: 70,
              offsetX: -20,
              offsetY: -200,
              content: "Hello Sup"
            }
          ]
        },
        {
          name: 'popup2',
          closeBtnSprite: 'closeBtn',
          btnOffsetY: 150,
          bgImg: 'yeoman',
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
          name: 'popup',
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
            }
          ]
        },
        {
          name: 'popup',
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
        var sprite = this.game.add.sprite(180 * i, 50, 'yeoman');
        sprite.inputEnabled = true;
        (function (i) {
          sprite.events.onInputDown.add(function () {
            console.log(i);
            self.game.Dialogs.createDialog(dialogs[i]);
          }, this);
        })(i);

      }

      var sprite2 = this.game.add.sprite(400, 500, 'closeBtn');
      sprite2.inputEnabled = true;
      sprite2.events.onInputDown.add(this.clickListener, this);
    },
    update: function() {
    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };

  module.exports = Play;
