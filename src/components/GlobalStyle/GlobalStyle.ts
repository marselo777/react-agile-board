import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle<{
    bg?: string;
}>`
    html {
        height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        box-sizing: border-box;
        background: ${(props) => props.bg || '#f5f5f5'};
        color: white;
        height: 100%;
    }
    ul,li {
        padding: 0;
        margin: 0;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    #react-app {
        height: 100%;
    }
`;
