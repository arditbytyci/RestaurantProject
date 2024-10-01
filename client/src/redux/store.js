import {combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import loadingReducer from './reducers/loadingReducers';
import messageReducer from './reducers/messageReducers';
import categoryReducer from './reducers/categoryReducers';
import productReducer from './reducers/productReducers';
import filterReducer from './reducers/filterReducers';
import cartReducer from './reducers/cartReducers';
import orderReducer from './reducers/orderReducers';


const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    loading: loadingReducer,
    messages: messageReducer,
    categories: categoryReducer,
    products: productReducer,
    filters: filterReducer,
    cart: cartReducer,
    order: orderReducer,

});


const persistedReducer = persistReducer(persistConfig, reducer)

const initialState = {};


const middleware = [thunk];

const store = legacy_createStore(
    persistedReducer,
     initialState, 
     composeWithDevTools(applyMiddleware(...middleware)));



export default store;


