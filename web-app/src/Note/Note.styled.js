import styled from "styled-components";
import { VscLoading } from "react-icons/vsc";

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
  transition: background 0.2s;
`;

export const Content = styled.textarea`
  flex: 1;
  background: transparent;
  color: inherit;
  font-family: inherit;
  border: none;
  outline: none;
  padding: ${INPUT_PADDING}px;
  transition: background 0.2s;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.errorColor};
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
`;
export const SaveButton = styled.button`
  display: flex;
  width: 105px;
  height: 45px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 50px;
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.asideBackgroundColor};
  transition: background-color 0.2s;
`;

export const LoaderWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconAndLabel = styled.div`
  display: flex;
  margin-left: 13px;
  align-items: center;
`;

export const Loader = styled(VscLoading)`
  -webkit-animation: icon-spin 2s infinite linear;
  animation: icon-spin 2s infinite linear;

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;
