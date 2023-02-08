import { useState, useEffect, useCallback } from "react";
import { Form, Title, Content } from "./Note.styled";
import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  const fetchNote = useCallback(async () => {
    const response = await fetch(`http://localhost:4000/notes/${id}`);
    const note = await response.json();
    setNote(note);
    console.log(note);
  }, [id]);

  useEffect(() => {
    //GET http://localhost:4000/notes
    fetchNote();
  }, [id, fetchNote]);

  console.log({ id });
  return (
    <Form>
      <Title onChange type="text" value={note ? note.title : ""} />
      <Content value={note ? note.content : ""}></Content>
      <button>Save</button>
    </Form>
  );
};

export default Note;
