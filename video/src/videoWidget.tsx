import { ReactWidget } from '@jupyterlab/apputils';
import React from 'react';

const VideoComponent = (): JSX.Element => {
  return (
    <iframe
      style={{ position: 'absolute', top: '0px', left: '0px' }}
      width="560"
      height="315"
      src="https://www.youtube.com/embed/20_9FNvVeFE"
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};

export class VideoWidget extends ReactWidget {
  constructor() {
    super();

    this.addClass('jp-ReactWidget');
  }

  render(): JSX.Element {
    return <VideoComponent />;
  }
}
