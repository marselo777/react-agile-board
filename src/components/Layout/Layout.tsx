import React from 'react';
import {StyledLayout} from './Layout.styles';

export type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
    return <StyledLayout>{children}</StyledLayout>;
};
