import './index.css';
import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ServiceProvider } from './components/Context';


ReactDOM.render(
  <ServiceProvider>
    <App /> 
  </ServiceProvider>,
  document.getElementById('root'));

