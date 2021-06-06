import {Redirect, Router} from '@reach/router';
import React from 'react';
import {IndexRoute} from './IndexRoute';
import {Layout} from 'components/layout';

export const Routes = () => {
    return (
        <Layout>
            <Router>
                <IndexRoute path="boards" />
                <Redirect from="/" noThrow to="boards" />
            </Router>
        </Layout>
    );
};
