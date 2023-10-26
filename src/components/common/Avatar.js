import React from "react";
import styled from "styled-components";
import defaultpp from "../../assets/defaultpp.png";

const StyledAvatar = styled.img`
  border-radius: 50%;
  width: 70%;
  height: 60%;
`;

const Avatar = ({ profilePic }) => {
  return <StyledAvatar src={profilePic || defaultpp} alt="profile img" />;
};

export default Avatar;
