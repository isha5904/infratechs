import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { CookieProvider } from './context/CookieContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CookieProvider>
          <App />
        </CookieProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
