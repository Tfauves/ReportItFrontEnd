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
    <div style={{ padding: "1em" }}>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid>
            <Item>
              <h1>Issue: {issueType} </h1>
              <h4>{location}</h4>
              <p>{description}</p>
              <h4>Status</h4>
              <p>Active: {isActive}</p>
              <p>Admin Comments: {adminComment}</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Report;
