#Phaser Dialogs plugin

Dialogs is a plugin to help you out with the creation of dialogs on your game.


##How to install the plugin

Add this line of code on the same state were you want to create the dialogs:
```javascript
 game.Dialogs = this.game.plugins.add(new Phaser.Plugin.Dialogs(this.game));
```

It is necessary to pass the `game` to the `constructor` of the Plugin.

After the instantiation of the `Dialogs` plugin, you can now create a dialog simply calling:
 ```javascript
 this.game.Dialogs.createDialog(options)
 ```
 
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

###Options
