import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AdminReport = (props) => {
  const { issueType, location, description } = props.report;

  return (
    <div style={{ margin: "1em" }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
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
          <Button size="small">Acknowledge</Button>
          <Button size="small">Complete</Button>
          <Button size="small">Unfounded</Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default AdminReport;
