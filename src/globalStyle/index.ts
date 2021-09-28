import * as styled from 'styled-components';

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Montserrat';
    font-size: 62.5%;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  :root {
    // COLORS
    --color-black: #12153d;
    --color-grey: #737599;
    --color-grey-2: #bbbbbb;
    --color-red: #fe6d8e;
  }
`;

export default GlobalStyle;
