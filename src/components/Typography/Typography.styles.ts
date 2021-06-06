import styled from 'styled-components';
import {ColorProps, variant, color} from 'styled-system';

export interface StyledTypographyProps extends ColorProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text' | 'line';
    type?: 'primary' | 'default' | 'line-through';
    bold?: boolean;
}

export const StyledTypography = styled.span<StyledTypographyProps>`
    ${variant({
        prop: 'variant',
        scale: 'typogprahy',
        variants: {},
    })}
    ${(props) => props.bold && 'font-weight: bold;'}
    ${color}
`;

StyledTypography.defaultProps = {
    variant: 'text',
    type: 'default',
    bold: true,
};
