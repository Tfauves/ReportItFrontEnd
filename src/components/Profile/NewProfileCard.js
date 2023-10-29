import React from "react";
import styled from "styled-components";
import Avatar from "../common/Avatar";

// needs work with avatar and report button
const StyledCardContainer = styled.div`
  display: flex;
  background-color: #fff;
  margin-top: 3em;
  width: 80%;
  margin-bottom: 30px;

  border-radius: 3px;
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

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const StyledProfileName = styled.h3`
  color: #303030;
  letter-spacing: -0.02em;
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  line-height: 94px;
`;

const StyledText = styled.p`
  color: #303030;
  letter-spacing: -0.02em;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  line-height: 1.2;
  margin-left: -6em;
  margin-top: -10px;
`;

const NewProfileCard = ({ userPro }) => {
  const { profileUsername, title, civicWins, profilePic } = userPro;

  return (
    <StyledCardContainer>
      <Avatar />
      <StyledTextContainer>
        <StyledProfileName>{profileUsername}</StyledProfileName>
        <StyledText>Civic Rating: {title}</StyledText>
        <StyledText>Civic Wins: {civicWins}</StyledText>
      </StyledTextContainer>
    </StyledCardContainer>
  );
};

export default NewProfileCard;
