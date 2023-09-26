import React from "react";
import styled from "styled-components";

const StyledCustomBtn = styled.button`
  background-color: #330066;
  border: 2px solid #330066;
  border-radius: 30px;
  box-shadow: #330066 4px 4px 0 0;
  color: #330066;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  font-family: Poppins, sans-serif;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  min-width: 200px;
  background-color: #fff;
  box-shadow: #1a001a 2px 2px 0 0;
  transform: translate(2px, 2px);
  &:hover {
    background: linear-gradient(to right, #6600cc, #1a001a);
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
