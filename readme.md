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
* <b>bgScreenColor</b> -> Color of the bgScreen. Default 0x000000.
* <b>bgScreenAlpha</b> -> Alpha of the bgScreen. Default 0.7.
* <b>bgImg</b> -> Name of the sprite or frame that will be used for the background of the dialog.
 If no sprite is passed, no bg will appear.
* <b>closeBtnSprite</b> -> Name of the sprite or frame that will be used for the close Button. Default: ''.
If no closeBtnSprite is passed, there will be no close button. Be careful to have always a close button or an easyClose activated.
* <b>closeBtnOffsetY</b> -> Offset Y of the close button. Default: 0 (centered on the center).

After all those properties, we can setup our fadeIn or fadeOut animations, and our objects. Let's explain those deeper.

###FadeIn and fadeOut
This plugin has four types of animations, they are inverse on the In and Out.

* <b>alpha</b> -> Standard alpha animation from 0 to 1.
* <b>alphaUp</b> -> Alpha animation + a little tween moving all the dialog from the bottom to the center.
* <b>alphaDown</b> -> Alpha animation + a little tween moving all the dialog from the top to the center.
* <b>alphaScale</b> -> Alpha animation + a little scale of the dialog.

All the animations appear on the examples. In the other hand, if you don't like any of those animations.
You can just pass a function to the fadeIn that returns your desired tween.
Example:

```javascript
fadeIn: function () {
    return this.game.add.tween(dialog)
        .from({alpha: 0}, 500, Phaser.Easing.Linear.None);
        .from({alpha: 1}, 5000, Phaser.Easing.Linear.None);
        .from({x: 550}, 500, Phaser.Easing.Linear.None, true);
}
```

It is important to apply the tween to the dialog object, you don't need to define it in your code.
`Autostart` is needed too.

You can also apply all these concepts on the fadeOut property.

###Objects

####What are the objects?

The objects are all the things that you want to appear on the dialog. They can be images, bitmap fonts or
normal fonts, even animations!

####Properties

* <b>type</b> -> 'text', 'bitmapText' or 'image'. The type of the object you want to add.
* <b>color</b> -> The color of the font. Default: #000. 
* <b>fontFamily</b> -> The font used. Default: Arial.
* <b>fontSize</b> -> The font size used. Default: 32.
* <b>stroke</b> -> If stroke thickness applied, color of the stroke. Default: #000.
* <b>strokeThickness</b> -> the thickness of the stroke. Default: 0 (no stroke).
* <b>align</b> -> the align of the text. Default: center.
* <b>offsetX</b> -> The offset X from the center. Default: 0 (centered on the center of the screen).
* <b>offsetY</b> -> The offset Y from the center. Default: 0 (centered on the center of the screen).
* <b>contentScale</b> -> If the type is an image you can scale it with this property. Default: 1 (no scale).
* <b>content</b> ->

In case of an `image` this will be the spriteName or frameName (if an spriteSheet is used on the dialog, this will expect a frame)

In case of a `text`, this will be the text printed.

* <b>animation</b> -> If case of an image, you can pass an array of frames here like in a normal animation.
 Example: 
 
 ```javascript
 animation: ['mario00', 'mario01', 'mario02']

 animation: [0, 1, 2]
 ```

* <b> callback</b> -> a callback that will be triggered when the object is clicked.



