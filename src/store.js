import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import TodoReducer from './reducers/TodoReducers';

const reducer = combineReducers({
    // this contains all reducers
    Todo:TodoReducer

});

const initialState = {}

const Middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...Middleware))
);

export default store;