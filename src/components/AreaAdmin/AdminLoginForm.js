import React from "react";
import Form from "../common/Form";
import Input from "../common/Input";
import { Button } from "@mui/material";
import InlineInputContainer from "../common/InlineInputContainer";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = ({ query, submitting, updateForm, onSubmit }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  const handleNavigate = () => {
    navigate("/admindash");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
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

      <div>
        <Button
          sx={{ "&:hover": { color: "#303030" } }}
          style={{ marginBottom: ".5em" }}
          onClick={handleSubmit}
          variant="contained"
          size="large"
        >
          enter
        </Button>
      </div>
    </div>
  );
};
export default AdminLoginForm;
