import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

// import { MainAreaWidget } from '@jupyterlab/apputils';

import { ILauncher } from '@jupyterlab/launcher';

import { reactIcon } from '@jupyterlab/ui-components';

// import { CounterWidget } from './widget';

namespace CommandIds {
  export const create = 'create-react-widget';
  export const create2 = 'create-react-widget2';
}

/**
 * Initialization data for the react-example extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'react-example',
  autoStart: true,
  optional: [ILauncher],
  activate: (app: JupyterFrontEnd, launcher: ILauncher) => {
    const { commands } = app;

    const command = CommandIds.create;
    commands.addCommand(command, {
      caption: 'Create a new React widget',
      label: 'React Widget',
      icon: args => (args['isPalette'] ? null : reactIcon),
      execute: () => {
        // const content = new CounterWidget();
        // const widget = new MainAreaWidget<CounterWidget>({ content });
        // widget.title.label = 'React Widget';
        // app.shell.add(content, 'main');
      }
    });
    if (launcher) {
      launcher.add({
        command
      });
    }
  }
};

export default extension;
