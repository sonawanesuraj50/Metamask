import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//************************** React Redux**********************************/
// //Action
// const increment = () => {
//     return {
//       type: 'INCREMENT',
//      }
//   }

//   const decrement = () => {
//     return {
//       type: 'DECREMENT',
//      }
//   }

// // REDUCER  
// const counter = (state = 0,action) => {
//   switch(action.type){
//     case 'INCREMENT':
//           return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//       default: console.log('Switch case error')
//   }
// }

// let store = createStore(counter);

// //Display
// store.subscribe(() =>console.log(store.getState()));

// //Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
