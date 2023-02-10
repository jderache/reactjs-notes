import { Link } from "./LinkToNote.styled";
import { useMatch } from "react-router-dom";

const LinkToNote = ({ id, title }) => {
  const match = useMatch(`/notes/${id}`);
  return (
    <Link to={`/notes/${id}`} className={match ? "active" : ""}>
      {title}
    </Link>
  );
};

export default LinkToNote;
