import { createStore, applyMiddleware } from 'redux';
import Reducers from './Reducers';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { DeviceEventEmitter } from 'react-native';

const middleWare = applyMiddleware(
    thunk,
    //createLogger()
);

const Store = createStore(Reducers, middleWare);

export default Store;