import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import App from './pages/App.jsx';
import Provider from './context/Provider.jsx';
import LoaderProvider from './context/LoaderProvider.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <LoaderProvider>
        <App/>
      </LoaderProvider>
    </Provider>
  </React.StrictMode>
);
