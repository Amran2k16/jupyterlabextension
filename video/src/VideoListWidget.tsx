import React from 'react';
import { ReactWidget } from '@jupyterlab/apputils';

const VideoListComponent = (): JSX.Element => {
  return (
    <div>
      <h1>Video List</h1>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}> Video 1 </div>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}> Video 2 </div>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}> Video 3 </div>
      <div style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}> Video 4 </div>
    </div>
  );
};

export class VideoListWidget extends ReactWidget {
  constructor() {
    super();
  }

  render(): JSX.Element {
    return <VideoListComponent />;
  }
}
