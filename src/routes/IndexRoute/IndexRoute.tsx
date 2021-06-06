import React from 'react';
import {RouteComponentProps} from '@reach/router';
import {BoardRootContainer} from 'containers/BoardRootContainer';

export const IndexRoute = ({}: RouteComponentProps) => {
    return <BoardRootContainer />;
};
