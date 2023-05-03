import React from 'react';
import ReactDOM from 'react-dom/client';

import { DarkModeContextProvider } from './context/DarkModeContext';
import { AuthContextProvider } from './context/AuthContext';
import App from './App.jsx';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);