import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {getUniqueId} from 'tinybase';
import {App} from './App';

addEventListener('load', () => {
  const serverPathId = location.pathname;
  if (serverPathId == '/') {
    location.assign('/' + getUniqueId());
    return;
  }

  ReactDOM.createRoot(document.getElementById('app')!).render(<App />);
});
