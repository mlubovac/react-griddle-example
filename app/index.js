import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from 'react-router';
import routes from './routes';
import appStore from './store';

render(
    <Provider store={appStore}>
        <Router history={hashHistory} routes={routes} />
    </Provider>, 
    document.getElementById('app'));