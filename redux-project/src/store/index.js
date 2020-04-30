import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import productListReducer from './reducers/productListReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];
const allReducers = combineReducers({productData: productListReducer, users: userReducer});

const initialState = {
    users: [],
    productData: {name: 'onePlus'},
};

const store = createStore(allReducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;