import {Box} from 'components/Box';
import {Flex} from 'components/Flex';
import React from 'react';
import {IconType} from 'react-icons';
import {StyledListItem, StyledListProps} from './List.styles';

// TODO: исправить пропсы для иконок
export interface ListItemProps extends StyledListProps {
    icon?: IconType;
    iconProps?: {fontSize?: number; color?: string};
    children: React.ReactNode;
}

export const ListItem = ({
    children,
    icon,
    iconProps,
    ...rest
}: ListItemProps) => {
    return (
        <StyledListItem {...rest}>
            {icon && <Box mr={1}> {React.createElement(icon, iconProps)}</Box>}
            {children}
        </StyledListItem>
    );
};
