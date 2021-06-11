import {useParams} from '@reach/router';
import {Box} from 'components/Box';
import {GlobalStyles} from 'components/GlobalStyle';
import {Layout} from 'components/Layout';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'root/store';
import {Header} from 'widgets/Header';

export const BoardContainer = () => {
    const {
        entities: {boards},
    } = useSelector((state: RootState) => state);

    const {boardId} = useParams<{boardId: string}>();
    const currentBoard = boards.find(({id}) => id === boardId);

    return (
        <Layout>
            <Box bg={currentBoard?.colorScheme}>
                <Header bg="rgba(0, 0, 0, 0.32)" />
            </Box>
            <GlobalStyles bg={currentBoard?.colorScheme} />
        </Layout>
    );
};
