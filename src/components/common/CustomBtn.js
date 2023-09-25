import React from "react";
import styled from "styled-components";

const StyledCustomBtn = styled.button`
  background-color: ${(props) =>
    props.variant === "ghost"
      ? "transparent"
      : props.backgroundColor || "#4d0099"};
  color: ${(props) =>
    props.variant === "ghost"
      ? props.textColor || "#4d0099"
      : props.textColor || "#fff"};
  border: ${(props) =>
    props.variant === "ghost"
      ? `1px solid ${props.backgroundColor || "#4d0099"}`
      : "none"};
  border-radius: 3px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === "ghost" ? "transparent" : "#fff"};
    color: ${(props) =>
      props.variant === "ghost"
        ? props.backgroundColor || "#4d0099"
        : "#4d0099"};
  }
`;

const CustomBtn = ({ onClick, backgroundColor, textColor, text, variant }) => {
  return (
    <StyledCustomBtn
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      variant={variant}
    >
      {text}
    </StyledCustomBtn>
  );
};

CustomBtn.defaultProps = {
  backgroundColor: "#4d0099",
  textColor: "#fff",
};

export default CustomBtn;
