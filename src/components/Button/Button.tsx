import React from 'react';
import {Box} from 'components/Box';
import {ButtonStyled, ButtonStyledProps} from './Button.styles';

export interface ButtonProps extends ButtonStyledProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    iconStyle?: ButtonStyledProps & {color?: string};
    color?: string;
}

export const Button = ({
    children,
    iconStyle = {},
    icon,
    ...rest
}: ButtonProps) => {
    return (
        <ButtonStyled {...rest}>
            {icon && <Box {...iconStyle}>{icon}</Box>}
            {children}
        </ButtonStyled>
    );
};
