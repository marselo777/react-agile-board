import {RouteComponentProps} from '@reach/router';
import {Box} from 'components/Box';
import {BoardContainer} from 'containers/BoardContainer';
import React from 'react';

export const BoardRoute = ({}: RouteComponentProps) => {
    return (
        <Box>
            <BoardContainer />
        </Box>
    );
};
