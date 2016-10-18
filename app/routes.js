import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MasterLayout from './components/MasterLayout';
import UsersPage from './containers/UsersPage';

export default (
    <Route path='/' component={MasterLayout}>
        <IndexRoute component={UsersPage} />
    </Route>
);