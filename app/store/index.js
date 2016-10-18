import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

const appStore = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default appStore;