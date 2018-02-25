import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
    authReducer,
    invoicesReducer,
} from './reducers';

import { combineReducers } from 'redux';

const getAvailableDevTools = () => {
    if (window.devToolsExtension) {
        return window.devToolsExtension();
    }

    return f => f;
};

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk,
    ),
    getAvailableDevTools()
)(createStore);

export default createStoreWithMiddleware(combineReducers({
    auth: authReducer,
    invoices: invoicesReducer,
}), {});
