import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleWare from 'redux-saga';
import root from './saga/root';
import {userReducer} from './userReducer';

const combinedReducer = combineReducers({
  userState: userReducer,
});

const sagaMiddleware = createSagaMiddleWare();
const middleWares = [sagaMiddleware];

const store = createStore(combinedReducer, applyMiddleware(...middleWares));

sagaMiddleware.run(root);

export default store;
