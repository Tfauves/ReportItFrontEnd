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
  justify-content: flex-end;
  padding: 20px;
`;

const StyledProfileNameContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
`;

const StyledProfileName = styled.h3`
  color: #323232;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  line-height: 94px;
`;

const NewProfileCard = ({ userPro }) => {
  const { profileUsername, title, civicWins, serviceArea, profilePic } =
    userPro;

  return (
    <StyledCardContainer>
      <StyledAvatarContainer>
        <Avatar />
      </StyledAvatarContainer>
      <StyledProfileNameContainer>
        <StyledProfileName>{profileUsername}</StyledProfileName>
      </StyledProfileNameContainer>
    </StyledCardContainer>
  );
};

export default NewProfileCard;
