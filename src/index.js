import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import  thunkMiddleware from 'redux-thunk' // listens for actions returning a funciton
import './index.css';
import App from './containers/App'; 
import { searchRobots, requestRobots } from './reducers'
import 'tachyons'; 

//create logger
const logger = createLogger(); 

const rootReducer = combineReducers({searchRobots, requestRobots})

//combine all reducers together
// pass store as a prop to app
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); 



// Provider passes down the store to all the components
ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>
   ,document.getElementById('root'),

  
);
