import { Side, Main } from "./App.styled";
import { Routes, Route } from "react-router-dom";
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
                  <LinkToNote key={note.id} id={note.id} title={note.title} />
                </li>
              ))}
            </NoteList>
          )}
        </Side>
        <Main>
          <Routes>
            <Route
              path="/"
              element={<div>Sélectionnez une note pour l'éditer</div>}
            />
            <Route path="/notes/:id" element={<Note />} />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
