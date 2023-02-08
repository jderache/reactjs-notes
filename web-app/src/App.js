import { Side, Main } from "./App.styled";
import { darkTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Note from "./Note/index.js";
import { useEffect, useState } from "react";
import LinkToNote from "./LinkToNote";
import { NoteList } from "./NoteList/NoteList.styled";

function App() {
  const [notes, setNotes] = useState(null);

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:4000/notes");
    const notes = await response.json();
    setNotes(notes);
    console.log(notes);
  };

  useEffect(() => {
    //GET http://localhost:4000/notes
    fetchNotes();
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Side>
          {notes && (
            <NoteList>
              {notes.map((note) => (
                <li key={note.id}>
                  <LinkToNote key={note.id} title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Note />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
