import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ReportProcess from "../ReportProcess";

const AdminReport = (props) => {
  const { issueType, location, description, id, timestamp, profile } =
    props.report;

  const clickAcknowledge = () => {
    console.log("report status set to pending");
    console.log(id);
  };

  const clickComplete = () => {
    console.log("report processed successfully");
  };

  const clickUnfounded = () => {
    console.log("report status unfounded. report has been cleared");
  };

  return (
    <div style={{ margin: "1em" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Sent By User Id: {profile.id}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Time: {timestamp}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Type: {issueType}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Location: {location}
          </Typography>
          <Typography variant="body2">
            Issue Description: {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={clickAcknowledge} size="small">
            Acknowledge
          </Button>
          <Button onClick={clickComplete} size="small">
            Complete
          </Button>
          <Button onClick={clickUnfounded} size="small">
            Unfounded
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default AdminReport;
