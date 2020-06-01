import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette, MainAreaWidget } from '@jupyterlab/apputils';

import { CounterWidget } from './widget';

/**
 * Initialization data for the video extension.
 */

const extension: JupyterFrontEndPlugin<void> = {
  id: 'video',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { commands } = app;

    const command = 'jlab-examples:command-palette';
    const showVideoCommand = 'example:showVideo';

    commands.addCommand(command, {
      label: 'Execute jlab-exaples:command-palette Command',
      caption: 'Execute jlab-examples:command-palette Command',
      execute: (args: any) => {
        console.log(`command has been called from ${args['origin']}`);
        //open a new main area widget.
        const content = new CounterWidget(app);
        const widget = new MainAreaWidget<CounterWidget>({ content });
        widget.title.label = 'Videos';
        app.shell.add(widget, 'main');
      }
    });

    commands.addCommand(showVideoCommand, {
      label: 'Execute example:showVideo',
      caption: 'Execute example:showVideo',
      execute: (args: any) => {
        console.log('Show video command called');
      }
    });

    const category = 'Extension Examples';

    palette.addItem({ command, category, args: { origin: 'from palette' } });
  }
};

export default extension;
