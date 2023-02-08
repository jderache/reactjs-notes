import { Side, Main } from "./App.styled";
import { GlobalStyle } from "./GlobalStyle";
import Note from "./Note/index.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Side>Barre latérale</Side>
      <Main>
        <Note />
      </Main>
    </>
  );
}

export default App;
