import { initializeIcons, initializeResponsiveMode } from '@fluentui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

initializeIcons();
initializeResponsiveMode();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
