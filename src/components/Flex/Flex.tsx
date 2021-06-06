import React from 'react';
import {StyledFlex, StyledFlexProps} from './Flex.styles';

export interface FlexProps extends StyledFlexProps {
    children: React.ReactNode;
    color?: string;
}

export const Flex = ({children, ...rest}: FlexProps) => {
    return <StyledFlex {...rest}>{children}</StyledFlex>;
};
