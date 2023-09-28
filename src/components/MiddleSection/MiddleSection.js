import React from "react";
import styled from "styled-components";

const StyledMiddleSection = styled.section`
  min-height: 70vh;
  padding: 20vh 60px;

  background-size: cover;
`;

const StyledHeader = styled.h1`
  color: #323232;
  letter-spacing: -0.02em;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 75px;
  line-height: 94px;
`;

const StyledSubHeader = styled.p`
  color: #f5f5f5;
  margin-bottom: 60px;
  margin-top: -15px;
  font-family: "Poppins", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 25px;
`;

const Container = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    // Styles for laptops
  }

  @media (max-width: 992px) {
    // Styles for tablets
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 768px) {
    // Styles for mobile devices
    flex-direction: column;
    height: auto;
  }
`;

const FlexChildBlock = styled.div`
  min-width: 400px;
`;

const MiddleSection = () => {
  return (
    <StyledMiddleSection>
      <Container>
        <FlexboxContainer>
          <FlexChildBlock>
            <StyledHeader>this middle section</StyledHeader>
          </FlexChildBlock>
        </FlexboxContainer>
      </Container>
    </StyledMiddleSection>
  );
};
export default MiddleSection;
