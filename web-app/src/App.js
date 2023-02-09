import {
  Side,
  Main,
  MessageNoNoteSelected,
  ContainerThemeAside,
  IconeTheme,
} from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Note from "./Note/index.js";
import { useEffect, useState } from "react";
import LinkToNote from "./LinkToNote";
import { NoteList } from "./NoteList/NoteList.styled";
import { Loader, LoaderWrapper } from "./Note/Note.styled";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Toggle le thème en sombre/clair
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const fetchNotes = async () => {
    const response = await fetch("http://localhost:4000/notes");
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
    // console.log(notes);
  };

  const updateNotes = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotes);
  };
  useEffect(() => {
    //GET http://localhost:4000/notes
    fetchNotes();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Side>
          <ContainerThemeAside>
            <IconeTheme onClick={toggleTheme} />
          </ContainerThemeAside>
          {isLoading && (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )}
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
              element={
                <MessageNoNoteSelected>
                  {!isLoading && "Sélectionnez une note pour l'éditer"}
                </MessageNoNoteSelected>
              }
            />
            <Route
              path="/notes/:id"
              element={<Note onChange={updateNotes} />}
            />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
