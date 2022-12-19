import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: ${(props) => props.theme.colors.gradient};
  color: white;
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
}
`;
