import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';

import { VideoListWidget } from './VideoListWidget';
/**
 * Initialization data for the video extension.
 */

//Make the sidebar open on deafult. It should show a react widget

const extension: JupyterFrontEndPlugin<void> = {
  id: 'video',
  autoStart: true,
  requires: [ICommandPalette],
  activate: (app: JupyterFrontEnd, palette: ICommandPalette) => {
    const { shell } = app;

    const videoListWidget = new VideoListWidget();

    videoListWidget.id = 'VideoListWidgetID';
    videoListWidget.title.label = 'Video List';
    videoListWidget.title.closable = true;

    shell.add(videoListWidget, 'right');
    shell.activateById('VideoListWidgetID');

    // const command = 'jlab-examples:command-palette';
    // commands.addCommand(command, {
    //   label: 'Execute jlab-exaples:command-palette Command',
    //   caption: 'Execute jlab-examples:command-palette Command',
    //   execute: (args: any) => {
    //     console.log(`command has been called from ${args['origin']}`);
    //     //open a new main area widget.
    //     const content = new CounterWidget(app);
    //     const widget = new MainAreaWidget<CounterWidget>({ content });
    //     widget.title.label = 'Videos';
    //     app.shell.add(widget, 'main');
    //   }
    // });
    // const category = 'Extension Examples';
    // palette.addItem({ command, category, args: { origin: 'from palette' } });
  }
};

export default extension;
