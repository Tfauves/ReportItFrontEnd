import React from "react";
import styled from "styled-components";
import heroImg from "../../assets/cityLanding.jpg";
import { useNavigate } from "react-router-dom";
import CustomBtn from "../common/CustomBtn";

const Hero = styled.section`
  min-height: 70vh;
  padding: 20vh 60px;
  background-image: url(${heroImg});
  background-size: cover;
  background-attachment: fixed;
`;

const StyledHeader = styled.h1`
  color: #fff;
  letter-spacing: -0.02em;
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

const HeroSection = () => {
  const navigate = useNavigate();

  const register = () => {
    navigate("/register");
  };

  const logIn = () => {
    navigate("/login");
  };
  return (
    <Hero>
      <Container>
        <FlexboxContainer>
          <FlexChildBlock>
            <StyledHeader>Want to be a civic crusader?</StyledHeader>
          </FlexChildBlock>
          <FlexChildBlock>
            <StyledSubHeader>
              report important issues in your area.
            </StyledSubHeader>
          </FlexChildBlock>
          <FlexChildBlock>
            <CustomBtn
              marginRight="2em"
              marginTop="30px"
              onClick={register}
              text="Sign Up"
            />
            <CustomBtn onClick={logIn} text="Login" />
          </FlexChildBlock>
        </FlexboxContainer>
      </Container>
    </Hero>
  );
};
export default HeroSection;
