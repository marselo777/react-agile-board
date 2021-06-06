import {Box} from 'components/Box';
import {List} from 'components/List';
import React from 'react';
import {StyledNavLink} from './Sidebar.styles';

import {
    AiFillAppstore,
    AiFillHome,
    AiOutlineBlock,
    AiOutlinePlus,
} from 'react-icons/ai';
import {Typography} from 'components/Typography';
import {Flex} from 'components/Flex';
import {Button} from 'components/Button';

export const Sidebar = () => {
    return (
        <Box>
            <nav>
                <Box mb={20} minWidth="200px">
                    <List>
                        <StyledNavLink icon={AiFillAppstore} to="test">
                            <Typography>Boards</Typography>
                        </StyledNavLink>
                        <StyledNavLink icon={AiOutlineBlock} to="test">
                            <Typography>Templates</Typography>
                        </StyledNavLink>
                        <StyledNavLink icon={AiFillHome} to="test">
                            <Typography>Home page</Typography>
                        </StyledNavLink>
                    </List>
                </Box>
                <Box>
                    <Box mb={2}>
                        <Flex
                            color="black"
                            p="5px"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography>Workspaces</Typography>
                            <AiOutlinePlus fontSize={20} color="#42526E" />
                        </Flex>
                    </Box>
                </Box>
            </nav>
        </Box>
    );
};
