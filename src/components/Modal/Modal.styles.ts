import {Box} from 'components/Box';
import styled from 'styled-components';

export const StyledModalWrapper = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: ${(props) => props.theme.colors.gray[500]};
    opacity: 0.3;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;
