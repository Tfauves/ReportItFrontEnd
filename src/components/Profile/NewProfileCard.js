import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar";

const StyledCardContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin-top: 4em;
  width: 80%;
  border-radius: 5px;
  @media (max-width: 1200px) {
    // Styles for laptops
  }

  @media (max-width: 992px) {
    // Styles for tablets
    flex-direction: column;
  }

  @media (max-width: 768px) {
    // Styles for mobile devices
    flex-direction: column;
  }
`;

const StyledAvatarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const StyledTextContainer = styled.div`
  flex: 1; /* Updated to make text container occupy the same space as the avatar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const StyledProfileName = styled.h3`
  color: #323232;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  line-height: 1.2;
`;

const StyledText = styled.p`
  color: #323232;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 1.2;
`;

const NewProfileCard = ({ userPro }) => {
  const { profileUsername, title, civicWins, profilePic } = userPro;

  return (
    <StyledCardContainer>
      <StyledAvatarContainer>
        <Avatar />
      </StyledAvatarContainer>
      <StyledTextContainer>
        <StyledProfileName>{profileUsername}</StyledProfileName>
        <StyledText>{title}</StyledText>
        <StyledText>Civic Wins: {civicWins}</StyledText>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};

export default NewProfileCard;
