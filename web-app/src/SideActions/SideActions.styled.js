import styled from "styled-components";
import { PrimaryButton } from "../Button/Button.styled";

export const ButtonsContainer = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
`;

export const ProfileName = styled(PrimaryButton)`
  width: 40px;
  border-radius: 20px;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  cursor: pointer;
`;
