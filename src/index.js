import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Card from './Card.js';   // For class with only 1 export (export default)
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import {robots} from './Robots.js';   // {robots} For class with no export default (multiple exports(maybe))
import App from './App.js';

// Reconciliation -> Process that syncs the virtual DOM w/ real DOM.
// Fibers -> Objects that map the changes.
// ReactElement -> Resides within Virtual DOM, constitutes basic nodes. Every HTML tag.
// ReactComponent -> Blocks of code. It gets re-rendered onto the screen.
// Diffing Algorithm -> Identify the changes. Make changes. Re-rendering the DOM with minimal time.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();