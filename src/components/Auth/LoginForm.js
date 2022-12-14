import React from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import { Button } from "@mui/material";
import InlineInputContainer from "../common/InlineInputContainer";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ query, submitting, updateForm, onSubmit }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div>
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
      </Form>
      <div
        style={{ marginTop: "1em", display: "flex", flexDirection: "column" }}
      >
        <Button
          sx={{ "&:hover": { color: "#303030" } }}
          style={{ marginBottom: ".5em" }}
          onClick={handleSubmit}
          variant="contained"
          size="large"
        >
          login
        </Button>
        <p style={{ color: "#f1f1f1", fontSize: "13px" }}>
          dont have an account?
        </p>
        <Button
          sx={{ "&:hover": { color: "#303030" } }}
          style={{ backgroundColor: "gray" }}
          onClick={handleNavigate}
          variant="contained"
          size="large"
        >
          create account
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
