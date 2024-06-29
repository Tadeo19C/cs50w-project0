// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/bootstrap.min.css'; // Importa tus estilos
import './assets/styles/style.css'; // Importa tus estilos personalizados
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
