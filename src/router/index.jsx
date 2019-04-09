import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { history } from '../store/store';

import Test from '../Test'; // наш временный компонент

const Router = () => (
    <ConnectedRouter history={history}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        </BrowserRouter>
    </ConnectedRouter>
);

export default Router;
