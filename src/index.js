import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import InitialPage from './InitialPage';
import './assets/styles.css'

ReactDOM.render(
  <div className='background-image'>
    <InitialPage />
  </div>
      // {/* <NavigationBar /> */ }
      // {/* <App/> */ }
  ,
  document.getElementById('root')
);