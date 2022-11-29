import React from "react";
import { Button } from "@mui/material";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import { width } from "@mui/system";

const NewUserForm = (props) => {
  const { query, updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "100px",
        width: "500%",
      }}
    >
      <InlineInputContainer>
        <Input
          id="fname"
          placeholder="First Name"
          onChange={handleChange}
          value={query.fname}
        />
        <Input
          id="lname"
          placeholder="Last Name"
          onChange={handleChange}
          value={query.lname}
        />
      </InlineInputContainer>
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
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required={true}
          value={query.password}
        />
        <Input
          id="confirm"
          placeholder="Confirm Password"
          type="password"
          onChange={handleChange}
          value={query.confirm}
        />
      </InlineInputContainer>
      <InlineInputContainer>
        <Input
          id="zipcode"
          placeholder="zipcode"
          onChange={handleChange}
          required={true}
          value={query.zipcode}
        />
      </InlineInputContainer>
      <Button
        style={{ marginTop: "2em", margin: "1em" }}
        onClick={handleSubmit}
        variant="contained"
      >
        SUBMIT
      </Button>
    </Form>
  );
};

export default NewUserForm;
