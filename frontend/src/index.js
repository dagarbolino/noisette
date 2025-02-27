import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "@material-tailwind/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <React.StrictMode>
      <ThemeProvider >
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Router>

);


reportWebVitals();
