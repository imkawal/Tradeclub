import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

function Test() {
  const path = window.location.pathname;
  const type = path.slice(1, 5);
  return type;
}

console.log(Test());

if (Test() != 'ecom') {
  var elementToRenderIn = document.getElementById('root'); // Render in 'root'
  var ecomElement = document.getElementById('ecom'); // Get the 'ecom' element
  ecomElement.innerHTML = ''; // Remove the inner HTML of 'ecom'
} else {
  var elementToRenderIn = document.getElementById('customroot'); // Render in 'ecom'
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  elementToRenderIn
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
