import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './index.css';

// Initialize redirect handling
import RedirectManager from './js/redirectManager';
RedirectManager.restoreOriginalPath();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
