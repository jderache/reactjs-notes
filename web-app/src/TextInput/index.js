import styled from "styled-components";

export const TextInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.asideBackgroundColor};
  padding: 10px;
  color: inherit;
  background: ${({ theme }) => theme.mainBackgroundColor};
`;
