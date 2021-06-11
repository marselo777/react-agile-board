import {Box} from 'components/Box';
import {Flex} from 'components/Flex';
import {Typography} from 'components/Typography';
import React from 'react';
import {Sidebar} from 'widgets/Sidebar';
import {AiOutlineUser} from 'react-icons/ai';
import {StyledButton} from './BoardRootContainer.styles';
import {Header} from 'widgets/Header';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'root/store';
import {createBoardStart} from 'entities/board';
import {v4} from 'uuid';
import {Link} from '@reach/router';

import image from './image.png';

console.log(image, 'image');

export const BoardRootContainer = () => {
    const {
        entities: {boards},
    } = useSelector((state: RootState) => state);
    const boardsButtons =
        !!boards.length &&
        boards.map(({title, id, colorScheme}) => {
            return (
                <Link to={`/board/${id}`} key={id}>
                    <StyledButton
                        width="159px"
                        height="96px"
                        mr={20}
                        mb={10}
                        bg={colorScheme}
                    >
                        <Typography>{title}</Typography>
                    </StyledButton>
                </Link>
            );
        });

    const dispatch = useDispatch();

    return (
        <>
            <Box>
                <Header />
                <Flex
                    minHeight="calc(100vh - 60px)"
                    justifyContent="center"
                    p={40}
                >
                    <Box>
                        <Sidebar />
                    </Box>
                    <Box width={1} maxWidth="825px" minWidth="225px" px={40}>
                        <Flex alignItems="center" mb={2}>
                            <Box mr={2}>
                                <AiOutlineUser fontSize={20} color="#42526E" />
                            </Box>
                            <Typography>Your workspace boards</Typography>
                        </Flex>
                        <Box>
                            <Flex flexWrap="wrap">
                                {boardsButtons}
                                <StyledButton
                                    width="159px"
                                    height="96px"
                                    bg="rgba(9,30,66,.04)"
                                    onClick={() =>
                                        dispatch(
                                            createBoardStart({
                                                id: v4(),
                                                title: `board-${v4()}`,
                                            }),
                                        )
                                    }
                                >
                                    <Typography>Add board</Typography>
                                </StyledButton>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};
