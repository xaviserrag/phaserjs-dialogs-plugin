#Phaser Dialogs plugin

Dialogs is a plugin to help you out with the creation of dialogs on your game.


##How to install the plugin

Add this line of code on the same state were you want to create the dialogs.

```javascript
 game.Dialogs = this.game.plugins.add(new Phaser.Plugin.Dialogs(this.game));
```

It is necessary to pass the `game` to the `constructor` of the Plugin.

After the instantiation of the `Dialogs` plugin, you can now create a dialog simply calling
 
 ```javascript
 game.Dialogs.createDialog(options)
 ```

The object `options` is were all the configurations of the popup are created.
