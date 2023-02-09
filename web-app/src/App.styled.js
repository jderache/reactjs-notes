import styled from "styled-components";
import { VscColorMode, VscNewFile } from "react-icons/vsc";

export const Side = styled.aside`
  position: fixed;
  max-width: 300px;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  transition: background-color 0.2s;
`;
export const Main = styled.main`
  height: 100vh;
  margin-inline-start: 300px;
`;

export const MessageNoNoteSelected = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullHeightWidthCentered = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerThemeAside = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const IconeTheme = styled(VscColorMode)`
  cursor: pointer;
`;

export const IconeAddNewNote = styled(VscNewFile)`
  cursor: pointer;
`;
