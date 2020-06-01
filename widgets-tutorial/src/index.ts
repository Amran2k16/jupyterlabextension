import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ExampleWidget } from './ExampleWidget';

//To add commands to the command palette. This token is required
import { ICommandPalette } from '@jupyterlab/apputils';

/**
 * Initialization data for the widgets-tutorial extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'widgets-tutorial',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    //A widget can be added to the main area through the Jupyterlab Shell. We can destructure this from the app.
    const { commands, shell } = app;

    const command = 'widget-tutorial:command';

    commands.addCommand(command, {
      label: 'Widget Command Another One seven',
      execute: (args: any) => {
        const widget = new ExampleWidget();
        shell.add(widget, 'main');
        console.log(`${command} executed from test`);
      }
    });

    const category = 'Extension Widget example';
    //ICommandPalette provides the addItem method that links a palette entry to a command in the command registry.
    //It takes in two arguements. The unique command id, and the command category. Optionally, you can specify
    // the arguements that will be passed to the command when executed from the palette.
    palette.addItem({ command, category });
  }
};

export default extension;
