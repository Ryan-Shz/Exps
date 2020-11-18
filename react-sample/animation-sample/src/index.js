import React from 'react';
import ReactDOM from 'react-dom';
import TransitionSample from './css-transition';
import TransitionGroupSample from './transition-group'

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <TransitionSample />
      <TransitionGroupSample />
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);
