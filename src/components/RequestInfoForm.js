import React from "react";
import { Button } from "@mui/material";
import Form from "./common/Form";
import InlineInputContainer from "./common/InlineInputContainer";
import Input from "./common/Input";

const RequestInfoForm = (props) => {
  const { query, updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <Form>
        <InlineInputContainer>
          <Input
            id="fname"
            placeholder="First Name"
            onChange={handleChange}
            required={true}
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
            id="jobtitle"
            placeholder="Job Title"
            onChange={handleChange}
            value={query.jobtitle}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required={true}
            value={query.email}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="phone"
            placeholder="Phone"
            onChange={handleChange}
            required={true}
            value={query.phone}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="municipalityname"
            placeholder="Municipality"
            onChange={handleChange}
            value={query.municipalityname}
          />
          <Input
            id="populationsize"
            placeholder="Population Size"
            onChange={handleChange}
            value={query.populationsize}
          />
          <Input
            id="state"
            placeholder="State"
            onChange={handleChange}
            value={query.state}
          />
        </InlineInputContainer>
      </Form>
    </div>
  );
};

export default RequestInfoForm;
