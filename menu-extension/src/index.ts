import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';
import { Menu } from '@lumino/widgets';

/**
 * Initialization data for the menu-extension extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'menu-extension',
  autoStart: true,
  requires: [IMainMenu],
  activate: (app: JupyterFrontEnd, mainMenu: IMainMenu) => {
    const { commands } = app;
    const command = 'jlab-examples:main-menu';

    commands.addCommand(command, {
      label: 'Execute jlab-examples:main-menu Command',
      caption: 'Executre jlab-examples:main-menu Command',
      execute: (args: any) => {
        console.log(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
        window.alert(
          `jlab-examples:main-menu has been called ${args['origin']}.`
        );
      }
    });

    commands.addCommand('my custom command', {
      label: 'My Custom Command',
      caption: 'My Custom Command',
      execute: (args: any) => {}
    });

    // Create a menu
    const tutorialMenu: Menu = new Menu({ commands });
    tutorialMenu.title.label = 'Main Menu Example';
    // Add the command to the menu
    //Can add commands to a lumino menu by using the addItem.
    tutorialMenu.addItem({ command, args: { origin: 'from the menu' } });
    tutorialMenu.addItem({
      command: 'my custom command',
      args: { origin: 'from the menu' }
    });

    //mainMenu is like the collection of menus. After you create a lumino menu, you can add it to the main menu
    mainMenu.addMenu(tutorialMenu, { rank: 80 });
  }
};

export default extension;
