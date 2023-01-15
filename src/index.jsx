import React from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context/ContextProvider';
import App from './components/App';
import './reset.css';
import './global.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
