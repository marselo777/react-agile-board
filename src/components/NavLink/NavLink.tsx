import {LinkProps} from '@reach/router';
import {Box} from 'components/Box';
import React from 'react';
import {IconType} from 'react-icons';
import {StyledNavLink, StyledNavLinkProps} from './NavLink.styles';

export interface INavLinkProps
    extends StyledNavLinkProps,
        Omit<LinkProps<any>, 'ref'> {
    icon?: IconType;
    iconProps?: {fontSize?: number; color?: string};
    children: React.ReactNode;
}

export const NavLink = ({
    children,
    icon,
    iconProps,
    ...rest
}: INavLinkProps) => {
    return (
        <StyledNavLink {...rest}>
            {icon && <Box mr={2}> {React.createElement(icon, iconProps)}</Box>}
            {children}
        </StyledNavLink>
    );
};
