import { useState } from "react";
import { FiSettings, FiUser } from "react-icons/fi";
import UpdateProfile from "../UpdateProfile";
import { Container, MenuButton } from "./Menu.styled";

const Menu = ({ profileName, onProfileUpdate }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  if (selectedStep === "PROFILE") {
    return (
      <UpdateProfile
        profileName={profileName}
        onProfileUpdate={onProfileUpdate}
      />
    );
  }

  if (selectedStep === "SETTINGS") {
    return "Settings";
  }

  return (
    <Container>
      <MenuButton
        onClick={() => {
          setSelectedStep("PROFILE");
        }}
      >
        <div>
          <FiUser />
          Mon profil
        </div>
      </MenuButton>
      <MenuButton
        onClick={() => {
          setSelectedStep("SETTINGS");
        }}
      >
        <div>
          <FiSettings />
          Réglages
        </div>
      </MenuButton>
    </Container>
  );
};

export default Menu;
