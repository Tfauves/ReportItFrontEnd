import React from "react";
import { Button } from "@mui/material";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const NewUserForm = (props) => {
  const { query, updateForm, onSubmit } = props;

  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "100px",
          width: "500%",
        }}
      >
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
          <Input
            id="lname"
            placeholder="Last Name"
            onChange={handleChange}
            value={query.lname}
          />
          <Input
            id="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={query.phone}
          ></Input>
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="zipcode"
            placeholder="Zipcode"
            onChange={handleChange}
            required={true}
            value={query.zipcode}
          />
        </InlineInputContainer>
        <InlineInputContainer>
          <p
            style={{
              marginTop: "3em",
              color: "#f1f1f1",
              fontSize: "1em",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Your password must be at least 5 characters in length
          </p>
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
        <Button
          sx={{ "&:hover": { color: "#303030" } }}
          style={{
            marginTop: "2em",
            margin: "1em",
          }}
          onClick={handleSubmit}
          variant="contained"
          size="large"
        >
          Create
        </Button>
      </Form>
      <div>
        <Box>
          <p style={{ color: "#f1f1f1" }}>
            already have an account?{" "}
            <Link href="/login" underline="always">
              login
            </Link>{" "}
          </p>
        </Box>
      </div>
    </div>
  );
};

export default NewUserForm;
