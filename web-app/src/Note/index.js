import { useState, useEffect, useCallback } from "react";
import { Form, Title, Content } from "./Note.styled";
import { useParams } from "react-router-dom";

const Note = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const fetchNote = useCallback(async () => {
    const response = await fetch(`http://localhost:4000/notes/${id}`);
    const note = await response.json();
    setNote(note);
    setTitle(note.title);
    setContent(note.content);
  }, [id]);

  useEffect(() => {
    fetchNote();
  }, [id, fetchNote]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <Form>
      <Title type="text" value={title} onChange={handleTitleChange} />
      <Content value={content} onChange={handleContentChange} />
      <button>Save</button>
    </Form>
  );
};

export default Note;
