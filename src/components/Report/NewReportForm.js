import React from "react";
import { Button } from "@mui/material";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const NewReportForm = (props) => {
    const { updateForm, onSubmit } = props;

    const handleChange = (e) => {
        updateForm(e.target.id, e.target.value);
    };

    const handleSubmit = (e) => {
        onSubmit(e);
    };
// issue type, location, description
    return (
        <div>
            <Form onSubmit={handleSubmit}
            style={{}}
            >
                <InlineInputContainer>
                    <Input id="issueType" placeholder="Issue" onChange={handleChange} />
                </InlineInputContainer>

                <InlineInputContainer>
                    <Input id="location" placeholder="Location" onChange={handleChange} />
                </InlineInputContainer>

                <InlineInputContainer>
                    <Input id="description" placeholder="Description" onChange={handleChange} />
                </InlineInputContainer>

            </Form>
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
          Report it
        </Button>
        </div>
    )
}

export default NewReportForm;
