import styled from 'styled-components';
import {
    space,
    SpaceProps,
    layout,
    LayoutProps,
    compose,
    ColorProps,
    BackgroundProps,
    background,
    color,
} from 'styled-system';

export interface ButtonStyledProps
    extends LayoutProps,
        SpaceProps,
        ColorProps,
        BackgroundProps {}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    ${compose(space, layout, color, background)}
    border-radius: 3px;
    color: white;
    padding: 4px;
`;
