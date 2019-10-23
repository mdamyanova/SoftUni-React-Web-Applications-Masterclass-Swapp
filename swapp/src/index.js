import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { unregister } from './serviceWorker';
import './theme.css';
import './assets/fonts/SfDistantGalaxy-0l3d.ttf';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
unregister();
