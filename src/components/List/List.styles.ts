import styled from 'styled-components';
import {space, SpaceProps} from 'styled-system';

export type StyledListProps = SpaceProps;

export const StyledList = styled.ul<StyledListProps>`
    ${space}
`;
export const StyledListItem = styled.li<StyledListProps>`
    ${space}
`;
