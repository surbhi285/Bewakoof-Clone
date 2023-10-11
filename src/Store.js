import {applyMiddleware, createStore} from 'redux';
import dataReducer from './Reducer';
import thunk from 'redux-thunk';

function dataStore(){

    return createStore(dataReducer, applyMiddleware(thunk));
}

export default dataStore;