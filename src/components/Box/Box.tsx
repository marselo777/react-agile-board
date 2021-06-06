import React from 'react';
import {StyledBox, StyledBoxProps} from './Box.styles';

export interface BoxProps extends StyledBoxProps {
    children: React.ReactNode;
    color?: string;
}

export const Box = ({children, ...rest}: BoxProps) => {
    return <StyledBox {...rest}>{children}</StyledBox>;
};
