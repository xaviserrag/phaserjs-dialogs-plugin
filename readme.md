#Phaser Dialogs plugin

Dialogs is a plugin to help you out with the creation of dialogs on your game.


##How to install the plugin

Load the script on the html file:
```javascript
  <script src="js/dialogs.js"></script>
```

Add this line of code on the same state were you want to create the dialogs (at this moment is
not possible to use the Plugin on different states):
```javascript
 game.Dialogs = this.game.plugins.add(new Phaser.Plugin.Dialogs(this.game));
```

It is necessary to pass the `game` to the `constructor` of the Plugin.

After the instantiation of the `Dialogs` plugin, you can now create a dialog simply calling:
 ```javascript
 this.game.Dialogs.createDialog(options)
 ```

##How to run the examples
 First of all you'll need to clone this repository on your machine. To do so run this
 command on the console:
 ```javascript
 git clone https://github.com/xaviserrag/phaserjs-dialogs-plugin.git
 ```
 After that, you'll have the boilerplate on your machine, now is time to install all
 the dependencies of the project. On the main folder use:
 
 ```javascript
 npm install
 ```
 
 Then change to the example folder and run:
 
 ```javascript
 bower install
 ```
 
 Now you can return to the main folder and run:
 ```javascript
 grunt
 ```
 
 Okay! Examples running! :) 
 
###Example
The object `options` is were all the configurations of the popup are created. This is a possible example
of a configuration object:
 ```javascript
{
    name: 'dialogName',
    hasEasyClose: true,
    hasBgScreen: true,
    bgScreenAlpha: 0.9,
    btnCloseY: 0,
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
      }
    ]
  },
 ```

First of all there are the general options, then is possible to add objects with their own properties.

###General Options
* <b>name</b> -> Name of the popup, to differentiate between dialogs. Default: ''.
* <b>hasEasyClose</b> -> If true, clicking on the screen will close the Dialog. Debault: false.
* <b>hasBgScreen</b> -> If true, a full layer of a color will appear, giving more focus on the 
dialog. Default: false.
* <b>bgScreenColor</b> -> Color of the bgScreen. Default #000.
* <b>bgScreenAlpha</b> -> Alpha of the bgScreen. Default 0.7.
* <b>bgImg</b> -> Name of the sprite or frame that will be used for the background of the dialog.
 If no sprite is passed, no bg will appear.
* <b>closeBtnSprite</b> -> Name of the sprite or frame that will be used for the close Button. Default: ''.
If no closeBtnSprite is passed, there will be no close button. Be careful to have always a close button or an easyClose activated.
* <b>closeBtnOffsetY</b> -> Offset Y of the close button. Default: 0 (centered on the center).

After all those properties, we can setup our fadeIn or fadeOut animations, and our objects. Let's explain those deeper.


