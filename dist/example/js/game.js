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
    this.load.image('closeBtn', 'assets/close-btn.png');

  },
  create: function() {
    this.asset.cropEnabled = false;
    this.game.plugins.add(Phaser.Plugin.Debug);
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;

},{}]},{},[1])