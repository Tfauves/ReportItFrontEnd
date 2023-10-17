import React from "react";
import sideImg from "../assets/reportItAbout.jpg";
import Splash from "./common/Splash";
import "../../src/About.css";
import styled from "styled-components";

const StyledText = styled.p`
  color: #323232;
  margin-bottom: 15px;
  margin-top: 2px;
  font-family: "Poppins", sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
`;

const About = () => {
  return (
    <div className="about-container">
      <div className="text-column">
        <h1 className="about-heading">About Us</h1>
        <div className="about-content">
          <StyledText>
            Report It is a solution that empowers residents to report issues,
            identify repair needs, share feedback, and ask questions of their
            local government leaders. For local governments, it powers efficient
            and transparent workflows, fostering accountability and trust. The
            result is collaborative experiences between governments and
            residents that co-create clean, safe, and happy communities.
          </StyledText>
          <StyledText>
            City and County Managers and their administrative team have high
            expectations, as do residents of their communities. With Report It
            technology, administrators can deliver the modern government
            experience for their staff and residents, solving issues and
            simplifying processes. Utilizing Report It technology,
            administrators can improve the interactions between government and
            residents, improving the civic experience.
          </StyledText>
          <StyledText>
            Looking for a better way to manage resident inquiries and improve
            civic experience? Leverage our citizen request management software
            as a standalone integration or in combination with our gov tech
            solutions.
          </StyledText>
          <StyledText>
            We are proud to have earned the trust of over 12,500 customers,
            their 100,000+ administrative users, and the over 340 million
            residents in the U.S. who engage with our solutions daily. Knowing
            that our tools help so many individuals find local information, stay
            informed during times of disaster, request civic services, and be
            active in their communities, pushes us to continually evolve our
            solutions as the needs of local government evolve. We have an
            efficient, resident-driven suite of products to help you serve and
            engage your community better. Download our solution brochure to
            learn more.
          </StyledText>
          <StyledText>
            Residents may not realize how many times per day and how many
            different ways they interact with their government. We build
            technology to power one-stop, impactful interactions and moments of
            engagement.
          </StyledText>
        </div>
      </div>
      <div className="image-column">
        <Splash className="image-splash" image={sideImg} />
      </div>
    </div>
  );
};

export default About;
