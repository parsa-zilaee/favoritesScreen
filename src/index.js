import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FavoriteContextProvider } from './FavoriteContext';



ReactDOM.render(
  <React.StrictMode>
    <FavoriteContextProvider>
      <App />
    </FavoriteContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
