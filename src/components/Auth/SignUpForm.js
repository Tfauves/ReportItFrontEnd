import React from "react";
import styled from "styled-components";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import ServiceAreas from "../ServiceArea/ServiceAreas";
import FormBtn from "../common/FormBtn";

const StyledFormHeader = styled.h2`
  color: #fff;
  letter-spacing: -0.03em;
  margin-bottom: 30px;
  margin-top: 1.5em;
  font-family: "Poppins", sans-serif;
  font-size: 55px;
  line-height: 80px;
  margin-left: 40px;
`;

const GradientBackground = styled.div`
  background: linear-gradient(to right, #18043d, #351375);
  width: 50%;
  float: left;
  height: 80vh;
  margin-top: 3em;
`;

const SolidBackground = styled.div`
  background: #f0f0f0;
  width: 50%;
  float: left;
  height: 80vh;
  margin-top: 3em;
`;
const FormContainer = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
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

const SignUpForm = (props) => {
  const { query, updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <FormContainer>
      <FlexboxContainer>
        <FlexChildBlock>
          <SolidBackground>
            <Form style={{ marginTop: "6em" }} onSubmit={handleSubmit}>
              <InlineInputContainer>
                <Input
                  id="username"
                  placeholder="Email address"
                  type="email"
                  onChange={handleChange}
                  value={query.username}
                />
              </InlineInputContainer>
              <InlineInputContainer>
                <Input
                  id="fname"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={query.fname}
                />
              </InlineInputContainer>
              <InlineInputContainer>
                <Input
                  id="lname"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={query.lname}
                />
              </InlineInputContainer>
              <InlineInputContainer>
                <Input
                  id="profileUsername"
                  placeholder="Username"
                  onChange={handleChange}
                  required={true}
                  value={query.profileUsername}
                />
              </InlineInputContainer>
              <InlineInputContainer>
                <Input
                  id="zip"
                  placeholder="Zip"
                  onChange={handleChange}
                  required={true}
                  value={query.zip}
                />
              </InlineInputContainer>
              <InlineInputContainer>
                <p>Your password must be at least 5 characters in length</p>
              </InlineInputContainer>
              <FormBtn
                text="create"
                onClick={handleSubmit}
                marginTop={"20px"}
              />
            </Form>
          </SolidBackground>
          <GradientBackground>
            <StyledFormHeader>
              Connect with your local government.
            </StyledFormHeader>
            <InlineInputContainer>
              <ServiceAreas />
            </InlineInputContainer>
          </GradientBackground>
        </FlexChildBlock>
      </FlexboxContainer>
    </FormContainer>
  );
};

export default SignUpForm;
