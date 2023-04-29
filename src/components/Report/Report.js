import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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

  return (
    <div style={{ margin: "1em" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Type: {issueType}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Location: {location}
          </Typography>
          <h3>Status</h3>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Active: {isActive}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Pending: {isPending}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Resolved: {isResolved}
          </Typography>
          <Typography variant="body2">
            Issue Description: {description}
          </Typography>
          <Typography variant="body2">Admin Comment: {adminComment}</Typography>
        </CardContent>
        <CardActions>{/* <Button size="small">process</Button> */}</CardActions>
      </Card>
    </div>
  );
};
export default Report;
