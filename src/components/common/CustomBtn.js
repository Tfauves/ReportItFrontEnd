import React from "react";
import styled from "styled-components";

const StyledCustomBtn = styled.button`
  border: 2px solid #330066;
  border-radius: 30px;
  color: #1a001a;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  min-width: 200px;
  background-color: #fff;
  transform: translate(2px, 2px);
  transition: all ease-in-out 0.5s;
  &:hover {
    background: linear-gradient(to right, #1a001a, #6600cc);
    color: #fff;
  }
`;

const CustomBtn = ({
  onClick,
  text,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  return (
    <StyledCustomBtn
      style={{ marginTop, marginRight, marginBottom, marginLeft }}
      onClick={onClick}
    >
      {text}
    </StyledCustomBtn>
  );
};
export default CustomBtn;
