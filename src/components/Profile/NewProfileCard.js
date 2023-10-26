import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar";

const StyledCardContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin-top: 4em;
  width: 100%;
  height: 50vh;
  border-radius: 5px;
`;

const StyledAvatarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const StyledTextContainer = styled.div`
  flex: 2;
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
