import React from "react";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Report = (props) => {
  const {
    issueType,
    location,
    description,
    isActive,
    isPending,
    isResolved,
    adminComment,
  } = props.report;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div style={{ padding: ".5em" }}>
      <Box sx={{ width: "50%" }}>
        <Grid>
          <Grid>
            <Item>
              <h4 style={{ marginBottom: "-1em", textAlign: "left" }}>
                Status
              </h4>
              <p style={{ textAlign: "left" }}>Active: {isActive}</p>
              <h1 style={{ textAlign: "left" }}>Issue: {issueType} </h1>
              <h4 style={{ textAlign: "left" }}>{location}</h4>
              <p style={{ textAlign: "left" }}>{description}</p>
              <p style={{ textAlign: "left" }}>
                Admin Comments: {adminComment}
              </p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Report;
