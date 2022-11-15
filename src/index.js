import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contextApi/clientContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <AppProvider>
       <App />
    </AppProvider>
    </BrowserRouter>
);
