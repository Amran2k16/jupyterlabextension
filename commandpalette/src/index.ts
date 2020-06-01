import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the commandpalette extension.
 */

//Jupyterlab is built on top of the Lumino library. A major concept of that lumino library is the notion of Commands.
//Commands can be used from the command palette.

const extension: JupyterFrontEndPlugin<void> = {
  id: 'commandpalette',
  autoStart: true,
  requires: [ICommandPalette],
  //To use the ICommandPalette, it needs to be passed down as an arguement to this plugin/extension.
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    console.log('JupyterLab extension commandpalette is activated!');
    const { commands } = app;
    const command = 'jlab-examples:command-palette';

    //Steps to add a command are as follows
    //Get access to the commandRegistry.
    //Create a unique identifier for you command
    //Add the command to the commandRegistry

    commands.addCommand(command, {
      label: 'Execute jlab-examples:command-palette Command',
      caption: 'Execute jlab-examples:command-palette Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:command-palette has been called ${args['origin']}.`
        );
      }
    });

    //This is the category the command will appear under inside of the list of commands in the palette.
    const category = 'Extension Examples';
    //ICommandPalette provides the addItem method that links a palette entry to a command in the command registry.
    //It takes in two arguements. The unique command id, and the command category. Optionally, you can specify
    // the arguements that will be passed to the command when executed from the palette.
    palette.addItem({ command, category, args: { origin: 'from palette' } });
  }
};

export default extension;
