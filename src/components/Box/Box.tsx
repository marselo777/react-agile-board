import React from 'react';
import {StyledBox, StyledBoxProps} from './Box.styles';

export interface BoxProps extends StyledBoxProps {
    children: React.ReactNode;
    color?: string;
}

export const Box = React.forwardRef(
    (
        {
            children,
            ...rest
        }: BoxProps &
            React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLDivElement>,
                HTMLDivElement
            >,
        ref: any,
    ) => {
        return (
            <StyledBox ref={ref} {...rest}>
                {children}
            </StyledBox>
        );
    },
);
