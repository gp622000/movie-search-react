import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers';


const store = createStore(movies);
// console.log('calling from the main index')
console.log('state',store);
console.log('BEFORE STATE',store.getState());

store.dispatch({
  type:'ADD_MOVIES',
  movies:[{ name : 'Superman'}]
});

console.log('AFTER STATE',store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
