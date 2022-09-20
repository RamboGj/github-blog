import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus {
      outline: 0;
      color: ${props => props.theme['blue-500']}
    }
  }

  body {
    background: ${(props) => props.theme['blue-800']};
    color: ${(props) => props.theme['blue-300']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    } 
`