import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Open Sans Condensed';
        padding: 20px 60px;
        background-color: #1c1c1e;
        color: #fefefe;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    a {
        color: #5fa9ee;
        text-decoration: none;
    }
    
    img {
        filter: grayscale(20%);
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
