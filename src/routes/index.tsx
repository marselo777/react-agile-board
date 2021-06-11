import {Redirect, Router} from '@reach/router';
import React from 'react';
import {IndexRoute} from './IndexRoute';
import {Layout} from 'components/layout';
import {BoardRoute} from './BoardRoute/BoardRoute';

export const Routes = () => {
    return (
        <Layout>
            <Router>
                <IndexRoute path="boards" />
                <BoardRoute path="board/:boardId" />
                <Redirect from="/" noThrow to="boards" />
            </Router>
        </Layout>
    );
};
