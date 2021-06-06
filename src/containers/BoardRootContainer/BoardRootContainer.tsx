import {Box} from 'components/Box';
import {Flex} from 'components/Flex';
import {Typography} from 'components/Typography';
import React from 'react';
import {Sidebar} from 'widgets/Sidebar';
import {Header} from './components';

import {AiOutlineUser} from 'react-icons/ai';
import {StyledButton} from './BoardRootContainer.styles';

export const BoardRootContainer = () => {
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
                            <Flex>
                                <StyledButton
                                    width="193px"
                                    height="96px"
                                    bg="rgba(9,30,66,.04)"
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
