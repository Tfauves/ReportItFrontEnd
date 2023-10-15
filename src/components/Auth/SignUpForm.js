import React from "react";
import styled from "styled-components";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import ServiceAreas from "../ServiceArea/ServiceAreas";
import FormBtn from "../common/FormBtn";

const StyledSecondHeader = styled.h2`
  color: #fff;
  letter-spacing: -0.03em;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  line-height: 94px;
`;

const GradientBackground = styled.div`
  background: linear-gradient(to right, #18043d, #351375);
  width: 50%;
  float: left;
  height: 100vh;
  margin-top: 3em;
`;

const SolidBackground = styled.div`
  background: #f0f0f0;
  width: 50%;
  float: left;
  height: 100vh;
  margin-top: 3em;
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
    <div>
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
          <FormBtn text="create" onClick={handleSubmit} marginTop={"20px"} />
        </Form>
      </SolidBackground>
      <GradientBackground>
        <StyledSecondHeader>
          Connect with your local government.
        </StyledSecondHeader>
        <InlineInputContainer>
          <ServiceAreas />
        </InlineInputContainer>
      </GradientBackground>
    </div>
  );
};

export default SignUpForm;
