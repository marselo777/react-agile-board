import {Button} from 'components/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
    transition: 0.3s;
    :hover {
        background-color: rgba(9, 30, 66, 0.08);
        box-shadow: none;
        border: none;
        color: #172b4d;
    }
`;
