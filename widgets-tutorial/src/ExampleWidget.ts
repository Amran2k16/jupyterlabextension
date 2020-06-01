import { Widget } from '@lumino/widgets';

export class ExampleWidget extends Widget {
  constructor() {
    super();
    // this.addClass('jp-example-view');
    this.id = 'simple-widget-example';
    this.title.label = 'Widget Example view';
    this.title.closable = true;
  }
}
