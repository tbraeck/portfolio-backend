import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { DesignProvider } from './contexts/DesignContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppProvider>
  <DesignProvider>
  <Router>
    <App />
  </Router> 
  </DesignProvider>
</AppProvider>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
