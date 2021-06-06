import React from 'react';
import {StyledList, StyledListProps} from './List.styles';

export interface ListProps extends StyledListProps {
    children: React.ReactNode;
}

export const List = ({children, ...rest}: ListProps) => {
    return <StyledList {...rest}>{children}</StyledList>;
};
