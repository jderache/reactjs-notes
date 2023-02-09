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
  ContainerHeaderNote,
  IconeDelete,
  ContainerLinkReturn,
  LinkReturn,
} from "./Note.styled";
import { useParams } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import { VscLoading } from "react-icons/vsc";
import { FullHeightWidthCentered } from "../App.styled";

const Note = ({ onChange, onDelete }) => {
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

  // Fonction DELETE
  const deleteNote = async () => {
    const response = await fetch(`/notes/${note.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setGetStatus("DELETE");
      onDelete(note.id);
    }
  };

  useEffect(() => {
    setSaveStatus("IDLE");
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

  if (getStatus === "DELETE") {
    return (
      <FullHeightWidthCentered>
        <ContainerLinkReturn>
          La note {id} a bien été supprimé.
          <LinkReturn to="/" exact>
            Retour
          </LinkReturn>
        </ContainerLinkReturn>
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
        <ContainerHeaderNote>
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
          <IconeDelete
            onClick={(event) => {
              deleteNote();
            }}
          />
        </ContainerHeaderNote>
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
