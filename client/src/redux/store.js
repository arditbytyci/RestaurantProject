import {combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducer';
import messageReducer from './reducers/messageReducers';
const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    
});

const initialState = {};


const middleware = [thunk];

const store = legacy_createStore(
    reducer,
     initialState, 
     composeWithDevTools(applyMiddleware(...middleware)));



export default store;


