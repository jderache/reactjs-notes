import styled from "styled-components";
import { Link as _Link } from "react-router-dom";

export const Link = styled(_Link)`
  padding: 12px;
  font-weight: bold;
  display: block;
  text-decoration: none;
  color: inherit;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  transition: background-color 0.2s;
  &.active {
    filter: brightness(2);
  }
  &:hover {
    filter: brightness(2);
  }
`;
