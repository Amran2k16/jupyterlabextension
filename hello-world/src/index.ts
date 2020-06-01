import {
  JupyterFrontEnd, // main jupyterlab application class. Allows you to access and modify some of its main components.
  JupyterFrontEndPlugin // Class of the extension you are building.
} from '@jupyterlab/application';

/**
 * Initialization data for the hello-world extension.
 */

//An extension is an object of type JupyterFrontEndPlugin. which is of type IPlugin that takes two generic types, T and U which are (JupyterFrontEnd and void) in this case
// U appears to be the return type of the activate function.
const extension: JupyterFrontEndPlugin<void> = {
  id: 'hello-world', //unique id of the extension.
  autoStart: true, // a flag to start the extension automatically or not
  activate: (app: JupyterFrontEnd) => {
    //A function that takes one arguement, app of type JupyterFrontEnd and will be called by the main application to activate the extension
    //app is simply the main Jupyterlab application. The activate function acts as an entry point into the extension
    //So my guess is that each plugin receives an instance(or reference) to the main app object. And can interact with it.
    console.log('The Jupyterlab Main Application', app);
  }
};

export default extension;
