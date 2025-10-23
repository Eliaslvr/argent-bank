import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './store/index';
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

root.render(
  // Le composant <Provider> permet de rendre le store accessible à tous les composants React de l'application.
  <Provider store={store}>
    <App />
  </Provider>
);

