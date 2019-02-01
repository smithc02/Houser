import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from "redux-promise-middleware";


const reducers = combineReducers({})

export default createStore(reducers, applyMiddleware(promiseMiddleware))