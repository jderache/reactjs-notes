import { useState, useEffect, useCallback } from "react";
import {
  Form,
  Title,
  Content,
  SaveButton,
  IconAndLabel,
  Loader,
  SaveButtonContainer,
  ErrorMessage,
} from "./Note.styled";
import { useParams } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { VscLoading } from "react-icons/vsc";
import { FullHeightWidthCentered } from "../App.styled";

const Note = ({ onChange }) => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [getStatus, setGetStatus] = useState("IDLE");
  const [saveStatus, setSaveStatus] = useState("IDLE");

  const fetchNote = useCallback(async () => {
    setGetStatus("LOADING");
    const response = await fetch(`/notes/${id}`);
    const note = await response.json();
    if (response.ok) {
      setNote(note);
      setGetStatus("IDLE");
    } else {
      setGetStatus("ERROR");
    }
    setNote(note);
  }, [id]);

  // Fonction "saveNote" permet les modifications apportées à la note et de les transmettre au serveur
  const saveNote = async () => {
    setSaveStatus("LOADING");
    if (note.title === "") {
      note.title = `Sans titre ` + id;
    }
    const response = await fetch(`http://localhost:4000/notes/${note.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    if (response.ok) {
      setSaveStatus("SAVED");
      onChange(note);
    } else {
      setSaveStatus("ERROR");
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id, fetchNote]);

  if (getStatus === "LOADING") {
    return (
      <FullHeightWidthCentered>
        <Loader />
      </FullHeightWidthCentered>
    );
  }

  if (getStatus === "ERROR") {
    return (
      <FullHeightWidthCentered>
        <ErrorMessage>404 : la note {id} n'existe pas.</ErrorMessage>
      </FullHeightWidthCentered>
    );
  }

  return (
    <>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Form submit", note);
          saveNote();
        }}
      >
        <Title
          type="text"
          value={note ? note.title : ""}
          onChange={(event) => {
            setSaveStatus("IDLE");
            //console.log({ note });
            //console.log(event.target.value);
            setNote({
              ...note,
              title: event.target.value,
            });
          }}
        />
        <Content
          value={note ? note.content : ""}
          onChange={(event) => {
            setSaveStatus("IDLE");
            //console.log(event.target.value);
            setNote({
              ...note,
              content: event.target.value,
            });
          }}
        />
        <SaveButtonContainer>
          <SaveButton>Enregistrer</SaveButton>
          {saveStatus === "SAVED" ? (
            <IconAndLabel>
              <FiCheck />
              Enregistrement terminé.
            </IconAndLabel>
          ) : saveStatus === "LOADING" ? (
            <IconAndLabel>
              <Loader>
                <VscLoading />
              </Loader>
              Enregistrement en cours...
            </IconAndLabel>
          ) : saveStatus === "ERROR" ? (
            <ErrorMessage>Erreur lors de la sauvegarde</ErrorMessage>
          ) : null}
        </SaveButtonContainer>
      </Form>
    </>
  );
};

export default Note;
