import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  .p {
    font-weight: bolder;
  }
`;

export default GlobalStyles;
