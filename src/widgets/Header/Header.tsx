import {Box} from 'components/Box';
import {Flex} from 'components/Flex';
import {Typography} from 'components/Typography';
import React from 'react';
import {Button} from 'components/Button';
import {
    AiOutlineAppstore,
    AiOutlineHome,
    AiOutlineBuild,
    AiOutlinePlus,
    AiOutlineInfoCircle,
    AiOutlineUser,
    AiOutlineBell,
} from 'react-icons/ai';

export interface IHeaderProps {
    bg?: string;
}

export const Header = ({bg}: IHeaderProps) => {
    return (
        <Box bg={bg} maxHeight={42}>
            <Flex justifyContent="space-between" alignItems="center" p={1}>
                <Flex justifyContent="space-evenly">
                    <Button width={32} height={32} mr={1}>
                        <AiOutlineAppstore color="white" fontSize={20} />
                    </Button>
                    <Button width={32} height={32} mr={1}>
                        <AiOutlineHome color="white" fontSize={20} />
                    </Button>
                    <Button mr={1}>
                        <Box mr={1}>
                            <AiOutlineBuild color="white" fontSize={20} />
                        </Box>
                        <Typography color="white.100">Boards</Typography>
                    </Button>
                    <Button>
                        <Typography color="white.100">Navigate to</Typography>
                    </Button>
                </Flex>

                <Box>
                    <Typography color="white.100" variant="h2">
                        Agile Board
                    </Typography>
                </Box>

                <Flex>
                    <Button width={32} height={32} mr={1}>
                        <AiOutlinePlus color="white" fontSize={24} />
                    </Button>
                    <Button width={32} height={32} mr={1}>
                        <AiOutlineInfoCircle color="white" fontSize={24} />
                    </Button>
                    <Button width={32} height={32} mr={1}>
                        <AiOutlineBell color="white" fontSize={24} />
                    </Button>
                    <Button width={32} height={32}>
                        <AiOutlineUser color="white" fontSize={24} />
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
};

Header.defaultProps = {
    bg: 'blue.900',
};
