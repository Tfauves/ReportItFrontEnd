import React from "react";
import styled from "styled-components";

const StyledFooter = styled.section`
  max-height: 200px;
`;

const StyledSubHeader = styled.p`
  color: #323232;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  margin-left: 20px;
`;

const Container = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FooterColumn = styled.div`
  width: 16%;
  height: 200px;
  background-color: rgba(0, 0, 0);
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
`;

const FooterLogo = styled.div`
  width: 16%;
  height: 200px;
  background-color: red;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
`;

const FooterColumnFirst = styled.div`
  background-color: rgba(0, 0, 0);
  margin-left: 0;
`;

const FooterColumnLast = styled.div`
  background-color: rgba(0, 0, 0);
  margin-right: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexboxContainer></FlexboxContainer>
      </Container>
      <StyledSubHeader>
        &copy; 2023 Report It. All rights reserved.
      </StyledSubHeader>
    </StyledFooter>
  );
};
export default Footer;
