import {StyledBoxProps} from 'components/Box/Box.styles';
import styled from 'styled-components';
import {flexbox, FlexboxProps} from 'styled-system';
import {Box} from '../Box';

export interface StyledFlexProps extends FlexboxProps, StyledBoxProps {}

export const StyledFlex = styled(Box)<StyledFlexProps>`
    display: flex;
    ${flexbox}
`;
