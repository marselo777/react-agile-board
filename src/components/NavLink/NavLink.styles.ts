import {Link} from '@reach/router';
import styled, {css} from 'styled-components';
import {space, SpaceProps} from 'styled-system';

export interface StyledNavLinkProps extends SpaceProps {
    active?: boolean;
}

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
    display: flex;
    border-radius: 4px;
    padding: 5px;
    text-decoration: none;
    overflow: hidden;
    transition: 0.2s;
    color: #172b4d;
    ${space}
    ${(props) =>
        props.active &&
        css`
            background-color: #e4f0f6;
            color: #0079bf;
        `}
`;

export const StyledLi = styled.li<SpaceProps>`
    ${space}
`;
