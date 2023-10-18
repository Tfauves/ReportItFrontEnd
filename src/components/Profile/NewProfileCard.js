import React from "react";
import Avatar from "@mui/material/Avatar";
import defaultpp from "../../assets/defaultpp.png";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const NewProfileCard = ({ userPro }) => {
  const { profileUsername, title, civicWins, serviceArea, profilePic } =
    userPro;

  return (
    <div style={{ marginTop: "4em" }}>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Paper sx={{ p: 3 }}>
            <Avatar
              alt="avatar"
              src={profilePic || defaultpp}
              sx={{ width: 110, height: 108 }}
            />
            <h2>{profileUsername}</h2>
            <div>
              <h1 style={{ color: "#303030" }}>Rank: {title}</h1>
              <h1 style={{ color: "#303030" }}>Civic Wins: {civicWins}</h1>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ p: 3 }}>
            <div>
              <h1 style={{ color: "#303030" }}>
                Service Area: {serviceArea.id}
              </h1>
              <h1 style={{ color: "#303030" }}>
                Area Name: {serviceArea.name}
              </h1>
              <h1 style={{ color: "#303030" }}>State: {serviceArea.state}</h1>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewProfileCard;
