import {applyMiddleware, createStore, combineReducers} from 'redux';
import dataReducer from './ProductStore.js/ProductDetail/Reducer';
import userReducer from './ProductStore.js/Register/Reducer';
import thunk from 'redux-thunk';

function dataStore(){
    const rootReducer = combineReducers({
        data: dataReducer,
        user: userReducer,
      });

    return createStore(rootReducer, applyMiddleware(thunk));
}

export default dataStore;