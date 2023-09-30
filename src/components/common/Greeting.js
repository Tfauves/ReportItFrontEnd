import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSecondHeader = styled.h2`
  color: #fff;
  letter-spacing: -0.03em;
  margin-top: 30px;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  line-height: 94px;
`;

const Greeting = ({ greetings }) => {
  const [dynamicGreeting, setDynamicGreeting] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setDynamicGreeting(greetings[randomIndex]);
  }, [greetings]);

  return <StyledSecondHeader>{dynamicGreeting}</StyledSecondHeader>;
};
export default Greeting;
