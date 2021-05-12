import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
  }

  a {
    text-decoration: none;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    text-rendering: optimizeLegibility !important;
    -moz-osx-font-smoothing: grayscale !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  button,
  input {
    font: 1.6rem 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }

  h1,
  h2,
  h3,
  strong {
    font-weight: ${({ theme }) => theme.font.bold};
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;
