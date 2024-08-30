import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "../styles/stylesVariables";

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${fonts.Cabin};
    font-size: 15px;
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};

    padding: 0;
    margin: 0;

  }
`;

export default GlobalStyles;
