import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../common/Form";
import Input from "../common/Input";
import CustomBtn from "../common/CustomBtn";
import InlineInputContainer from "../common/InlineInputContainer";

import Link from "@mui/material/Link";

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
      </Form>
      <div
        style={{ marginTop: "1em", display: "flex", flexDirection: "column" }}
      >
        <CustomBtn text="login" onClick={handleSubmit} />
        <p style={{ marginLeft: "30px", color: "#f1f1f1", fontSize: "1em" }}>
          dont have an{" "}
          <Link href="/register" underline="always">
            account?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
