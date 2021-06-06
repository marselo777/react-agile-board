import React from 'react';
import {Box} from 'components/Box';
import {ButtonStyled, ButtonStyledProps} from './Button.styles';

export interface ButtonProps extends ButtonStyledProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconStyle?: ButtonStyledProps & {color?: string};
    color?: string;
}

export const Button = React.forwardRef(
    (
        {
            children,
            iconStyle = {},
            icon,
            ...rest
        }: ButtonProps &
            React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >,
        ref: any,
    ) => {
        return (
            <ButtonStyled ref={ref} {...rest}>
                {icon && <Box {...iconStyle}>{icon}</Box>}
                {children}
            </ButtonStyled>
        );
    },
);
