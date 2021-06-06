import styled from 'styled-components';
import {
    SpaceProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    ShadowProps,
    PositionProps,
    space,
    border,
    layout,
    background,
    shadow,
    compose,
    color,
    ColorProps,
} from 'styled-system';

export interface StyledBoxProps
    extends LayoutProps,
        SpaceProps,
        BackgroundProps,
        BorderProps,
        ShadowProps,
        PositionProps,
        ColorProps {}

export const StyledBox = styled.div`
    ${compose(space, border, layout, background, shadow, color)}
`;
