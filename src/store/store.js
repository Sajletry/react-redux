import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import rootReducer from './rootReducer';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {counterMiddleware} from "./counterMiddleware";//импортим мидлварю

export const history = createBrowserHistory();


export const store = createStore(
    rootReducer(history),
    applyMiddleware(logger, thunk, routerMiddleware(history), counterMiddleware) //подключаем ее
);
