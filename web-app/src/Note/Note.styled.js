import styled from "styled-components";

const INPUT_PADDING = 8;

export const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const Title = styled.input`
  height: 40px;
  background: transparent;
  font-size: 20px;
  color: inherit;
  font-family: inherit;
  border: none;
  border-bottom: 2px solid #1d2327;
  outline: none;
  padding: ${INPUT_PADDING}px;
`;

export const Content = styled.textarea`
  flex: 1;
  background: transparent;
  color: inherit;
  font-family: inherit;
  border: none;
  outline: none;
  padding: ${INPUT_PADDING}px;
`;
