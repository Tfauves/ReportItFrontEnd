import React from "react";
import styled from "styled-components";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import FormBtn from "../common/FormBtn";

const StyledFormHeader = styled.h2`
  color: #f8f8f9;
  letter-spacing: -0.03em;
  margin-bottom: 30px;
  margin-top: 1.5em;
  font-family: "Poppins", sans-serif;
  font-size: 55px;
  line-height: 80px;
  margin-left: 40px;
`;

const StyledParagraph = styled.p``;

const GradientBackground = styled.div`
  background: linear-gradient(to right, #18043d, #351375);
  width: 50%;
  float: left;
  height: 85vh;
  margin-top: 3em;
`;

const SolidBackground = styled.div`
  background: #f8f8f9;
  width: 50%;
  float: left;
  height: 85vh;
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

const EditProfileForm = (props) => {
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
            <Form style={{ marginTop: "4em" }} onSubmit={handleSubmit}>
              {/* <InlineInputContainer>
                <Input
                  id="avatar"
                  placeholder="img url"
                  onChange={handleChange}
                  value={query.avatar}
                />
              </InlineInputContainer> */}

              <InlineInputContainer>
                <Input
                  id="profileUsername"
                  placeholder="Username"
                  onChange={handleChange}
                  value={query.profileUsername}
                />
              </InlineInputContainer>
              <FormBtn
                text="update"
                onClick={handleSubmit}
                marginTop={"10px"}
                marginBottom={"30px"}
              />
            </Form>
          </SolidBackground>
          <GradientBackground>
            <StyledFormHeader>UpdateProfile</StyledFormHeader>
          </GradientBackground>
        </FlexChildBlock>
      </FlexboxContainer>
    </FormContainer>
  );
};

export default EditProfileForm;
