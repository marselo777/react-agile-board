import React from 'react';
import {variants} from './config';
import {StyledTypography, StyledTypographyProps} from './Typography.styles';

export interface TypographyProps extends StyledTypographyProps {
    children: React.ReactNode;
}

export const Typography = ({
    variant,
    type,
    children,
    ...rest
}: TypographyProps) => {
    const asHTMLTag = variants.get(variant);
    return (
        <StyledTypography
            as={asHTMLTag}
            variant={variant}
            type={type}
            {...rest}
        >
            {children}
        </StyledTypography>
    );
};
