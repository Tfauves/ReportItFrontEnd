import React from "react";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import ServiceAreas from "../ServiceArea/ServiceAreas";
import FormBtn from "../common/FormBtn";
//// style this form next
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
      <InlineInputContainer
        style={{ marginLeft: "-6em", marginTop: "-2em", marginBottom: "2em" }}
      ></InlineInputContainer>
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
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="zip"
            placeholder="Zip"
            onChange={handleChange}
            required={true}
            value={query.zip}
          />
          <Input
            id="profileUsername"
            placeholder="Username"
            onChange={handleChange}
            required={true}
            value={query.profileUsername}
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
        <FormBtn text="create" onClick={handleSubmit} marginTop={"20px"} />
      </Form>
    </div>
  );
};

export default NewUserForm;
