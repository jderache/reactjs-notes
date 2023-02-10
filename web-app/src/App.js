import {
  Side,
  Main,
  MessageNoNoteSelected,
  ContainerThemeAside,
  IconeTheme,
  IconeAddNewNote,
  IconesContainer,
} from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { darkTheme, lightTheme, GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Note from "./Note/index.js";
import { useEffect, useState } from "react";
import LinkToNote from "./LinkToNote";
import { NoteList } from "./NoteList/NoteList.styled";
import { Loader, LoaderWrapper } from "./Note/Note.styled";
import SideActions from "./SideActions";

function App() {
  const [notes, setNotes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profileName, setProfileName] = useState("");

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
    const response = await fetch(
      "http://localhost:4000/notes?_sort=id&_order=desc"
    );
    const notes = await response.json();
    setIsLoading(false);
    setNotes(notes);
    // console.log(notes);
  };

  const fetchProfile = async () => {
    const response = await fetch("/profile");
    const profile = await response.json();
    setProfileName(profile.name);
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

  const newNote = async () => {
    const response = await fetch(`http://localhost:4000/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Sans titre" }),
    });
    const note = await response.json();
    setNotes([note, ...notes]);
  };

  const deleteNote = (id) => {
    console.log(notes.filter((_note) => _note.id !== id));
    console.log(id);
    setNotes(notes.filter((_note) => _note.id !== id));
  };

  useEffect(() => {
    //GET http://localhost:4000/notes
    fetchNotes();
    fetchProfile();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Side>
          <ContainerThemeAside>
            <SideActions
              profileName={profileName}
              onProfileUpdate={setProfileName}
            />
            <IconesContainer>
              <IconeAddNewNote onClick={newNote} />
              <IconeTheme
                onClick={toggleTheme}
                title={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
              />
            </IconesContainer>
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
              element={<Note onChange={updateNotes} onDelete={deleteNote} />}
            />
          </Routes>
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
