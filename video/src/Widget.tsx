import { ReactWidget } from '@jupyterlab/apputils';

import { JupyterFrontEnd } from '@jupyterlab/application';

import React from 'react';

import { VideoWidget } from './VideoWidget';

const CounterComponent = (props: { app: JupyterFrontEnd }): JSX.Element => {
  const { shell } = props.app;

  const widget = new VideoWidget();
  widget.id = 'Video_overlay';
  widget.title.label = 'video';
  widget.title.closable = true;

  return (
    <div>
      <button
        onClick={(): void => {
          if (widget.isAttached) {
            shell.activateById('Video_overlay');
          } else {
            shell.add(widget, 'right');
            shell.activateById('Video_overlay');
          }
        }}
      >
        Open Video
      </button>
    </div>
  );
};

export class CounterWidget extends ReactWidget {
  app: JupyterFrontEnd;
  constructor(app: JupyterFrontEnd) {
    super();
    this.app = app;
    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return <CounterComponent app={this.app} />;
  }
}
