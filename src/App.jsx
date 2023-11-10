import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HelloWorld from './components/HelloWorld';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById('root')
);
