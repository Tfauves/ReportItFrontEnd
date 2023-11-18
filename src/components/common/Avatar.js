import React from "react";
import styled from "styled-components";
import defaultpp from "../../assets/defaultpp.png";

const StyledAvatar = styled.img`
  width: 100%;
  height: 50%;
`;

const Avatar = ({ profilePic }) => {
  const imageUrl = profilePic && profilePic.url;

  return <StyledAvatar src={imageUrl || defaultpp} alt="profile img" />;
};

export default Avatar;
