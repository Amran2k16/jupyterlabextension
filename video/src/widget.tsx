import { ReactWidget } from '@jupyterlab/apputils';

import { JupyterFrontEnd } from '@jupyterlab/application';

import React, { useState } from 'react';

import { VideoWidget } from './videoWidget';

const CounterComponent = (props: { app: JupyterFrontEnd }): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const { commands, shell } = props.app;
  return (
    <div>
      <p>You clicked {counter} times</p>
      <button
        onClick={(): void => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={(): void => {
          const widget = new VideoWidget();
          widget.id = 'Video_overlay';
          widget.title.label = 'video';
          widget.title.closable = true;
          shell.add(widget, 'main');
          commands.execute('example:showVideo');
          setShowVideo(!showVideo);
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
