import { createGlobalStyle } from 'styled-components';
import Colors from './colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        max-width: 100vw;
    }

    body, h1, h2, h3, p, button {
        font-family: Roboto;
        font-style: normal;
    }

    h2 {
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: ${Colors.brandColor}
    }

    p {
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }
`;
