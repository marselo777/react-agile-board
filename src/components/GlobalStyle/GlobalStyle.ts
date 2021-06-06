import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        box-sizing: border-box;
        background: #f5f5f5;
        color: white;
    }
    ul,li {
        padding: 0;
        margin: 0;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;
