import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledSecondHeader = styled.h2`
  color: #fff;
  letter-spacing: -0.03em;
  margin-top: 2em;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  line-height: 94px;
`;

const Greeting = ({ greetings }) => {
  const [dynamicGreeting, setDynamicGreeting] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    setDynamicGreeting(greetings[randomIndex]);
  }, []);

  return <StyledSecondHeader>{dynamicGreeting}</StyledSecondHeader>;
};
export default Greeting;
