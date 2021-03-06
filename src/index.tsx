import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,applyMiddleware,compose } from 'redux';
import rootReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers,
              composeEnhancers(applyMiddleware(thunk))
            );

ReactDOM.render(
    <Provider store = {store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);

//************************** React Redux**********************************/
//**************************Action****************************************/
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

//**************************/REDUCER/***************************************/  
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

//*******************************/Display/********************************/
// store.subscribe(() =>console.log(store.getState()));

//*****************************/Dispatch/****************************** */
// store.dispatch(increment());
// store.dispatch(decrement());
