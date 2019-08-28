import React from 'react';
 import ReactDOM from 'react-dom';
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './Reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//const store = createStore(rootReducer)
//store={store}>
ReactDOM.render(    
      <App />,
 document.getElementById('root'));

serviceWorker.unregister();
