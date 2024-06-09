import {combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducer';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducer';
import productReducer from './reducers/productReducer';
const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
    products: productReducer,

});

const initialState = {};


const middleware = [thunk];

const store = legacy_createStore(
    reducer,
     initialState, 
     composeWithDevTools(applyMiddleware(...middleware)));



export default store;


