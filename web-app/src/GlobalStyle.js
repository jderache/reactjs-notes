import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
  box-sizing: border-box;
}

*:focus{
  border: 1px solid ${({ theme }) => theme.mainTextColor};
}

body {
  margin: 0;
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color .2s;
}
`;
export const darkTheme = {
  mainBackgroundColor: "#2c3338",
  asideBackgroundColor: "#1D2327",
  mainTextColor: "white",
  errorColor: "red",
};

export const lightTheme = {
  mainBackgroundColor: "#d3ccc7",
  asideBackgroundColor: "#e2dcd8",
  mainTextColor: "black",
  errorColor: "red",
};
