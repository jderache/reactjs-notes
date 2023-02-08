import { Form, Title, Content } from "./Note.styled";

const Note = () => {
  return (
    <Form>
      <Title type="text" />
      <Content>Content</Content>
      <button>Save</button>
    </Form>
  );
};

export default Note;
