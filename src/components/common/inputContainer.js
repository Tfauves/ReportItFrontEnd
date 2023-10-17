import React from "react";
import styled from "styled-components";

const InputContainer = (props) => {
  const InlineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 400px;
    border-radius: 5px;
    overflow: hidden;
    flex-wrap: wrap;
    ${props.style}
  `;

  const Error = styled.p`
    color: red;
    font-weight: bold;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 3px;
    padding-left: 5px;
    margin: 0px 0px 2px 0px;
  `;

  return (
    <React.Fragment>
      <InlineContainer>{props.children}</InlineContainer>
      {props.error ? <Error>{props.error}</Error> : null}
    </React.Fragment>
  );
};

export default InputContainer;
