(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'test-dialog');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('preload', require('./states/preload'));
  

  game.state.start('boot');
};
},{"./states/boot":2,"./states/gameover":3,"./states/menu":4,"./states/play":5,"./states/preload":6}],2:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],3:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],4:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = Menu;

},{}],5:[function(require,module,exports){
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
          btnOffsetY: 50,
          bgScreenAlpha: 0.9,
          hasBgScreen: true,
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
          spriteSheet: 'popup',
          closeBtnSprite: 'close-btn',
          bgImg: 'bg-popup',
          btnOffsetY: 151,
          hasEasyClose: false,
          fadeInType: 'alphaScale',
          fadeOutType: 'alphaScale',
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
          hasBgScreen: true,
          bgScreenColor: 0x55ffff,
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
        var sprite = this.game.add.sprite(200 * i + 50, self.game.height/2 - 20, 'popup', buttons[i]);
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

},{}],6:[function(require,module,exports){
'use strict';

function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('yeoman', 'assets/yeoman-logo.png');
    this.load.atlasJSONHash('popup', 'assets/btn.png', 'assets/btn.json');
    this.load.image('bg', 'assets/bg.png');

  },
  create: function() {
    this.asset.cropEnabled = false;
    this.game.plugins.add(Phaser.Plugin.Debug);
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('play');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])