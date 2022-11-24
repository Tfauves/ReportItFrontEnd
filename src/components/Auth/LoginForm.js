import React from "react";
import Form from "../common/Form";
import Input from "../common/Input";
// import Button from "../common/Button";
import { Button } from "@mui/material";
import InlineInputContainer from "../common/InlineInputContainer";

const LoginForm = ({ query, submitting, updateForm, onSubmit }) => {
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
        width: "50%",
      }}
    >
      <InlineInputContainer>
        <Input
          id="username"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
          value={query.username}
          required
        />
      </InlineInputContainer>
      <InlineInputContainer>
        <Input
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          value={query.password}
          required
        />
      </InlineInputContainer>
      {/* <Button disabled={submitting}>Login</Button> */}

      <Button
        style={{ margin: "1em" }}
        onClick={handleSubmit}
        variant="contained"
      >
        login
      </Button>
    </Form>
  );
};

export default LoginForm;
