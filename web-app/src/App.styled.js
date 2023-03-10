import styled from "styled-components";
import { VscColorMode, VscNewFile, VscSearch } from "react-icons/vsc";

export const Side = styled.aside`
  position: fixed;
  max-width: 300px;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  transition: background-color 0.2s;
  overflow: auto;
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
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

export const IconesContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 6px;
`;
export const IconeTheme = styled(VscColorMode)`
  cursor: pointer;
  height: 16px;
`;

export const IconeAddNewNote = styled(VscNewFile)`
  cursor: pointer;
  height: 16px;
`;

export const SearchIcone = styled(VscSearch)`
  position: absolute;
  color: ${({ theme }) => theme.mainTextColor};
  top: 13px;
  left: 25px;
`;
export const SearchBar = styled.div`
  display: flex;
  position: relative;
`;

export const SearchInput = styled.input`
  display: flex;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  border-radius: 50px;
  border: none;
  max-width: 280px;
  width: 100%;
  padding: 0 10px 0 40px;
  margin: 0 auto;
  height: 40px;
  color: ${({ theme }) => theme.mainTextColor};
  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  &::-webkit-search-decoration,
  ::-webkit-search-cancel-button,
  ::-webkit-search-results-button,
  ::-webkit-search-results-decoration {
    display: none;
  }
`;
