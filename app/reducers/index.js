import { combineReducers } from 'redux';
import gridReducer from './../containers/UsersPage/reducer';

const appStore = combineReducers({
    gridReducer
});

export default appStore;