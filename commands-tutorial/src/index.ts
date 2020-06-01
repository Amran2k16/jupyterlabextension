import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the commands-tutorial extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'commands-tutorial',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    const { commands } = app; //Commands are functions stored in a registry under a specific unique identifier. These functions can be
    //executed from any piece of code that has access to that registry. almost like global functions.
    const command = 'jlab-examples:command'; // this is the unique identifier for this command
    //The command is an object of type CommandRegistry.ICommandOptions.

    //commandRegistry is an attribute of the main jupyterlab application. It has an addCommand method that adds your own function.
    //Method takes two arguements. The unique command id and the options for the command.
    // execute is the only mandatory option. This takes the function to be called when the command is executed. It can also take in arguements.
    commands.addCommand(command, {
      label: 'Execute jlab_examples:command Command',
      caption: 'Execute jlab-examples:command Command',
      execute: (args: any) => {
        const orig = args['origin'];
        console.log(`jlab-examples:command has been called from ${orig}.`);
        if (orig !== 'Init') {
          window.alert(`jlab-examples:command has been called from ${orig}.`);
        }
      }
    });

    //To execute commands, you only need access to the commands registry in any other parts of the application. Then you need to call the execute method of the registry
    //With the unique command id and optionally the arguments.
    commands.execute(command, { origin: 'Init' }).catch(reason => {
      console.error(`An error has occured during the execution ${reason}`);
    });

    console.log('JupyterLab extension commands-tutorial is activated!');
  }
};

export default extension;
