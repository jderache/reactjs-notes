import { Side, Main } from "./App.styled";
import { darkTheme, GlobalStyle, lightTheme } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Note from "./Note/index.js";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Side>Barre latérale</Side>
        <Main>
          <Note />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
