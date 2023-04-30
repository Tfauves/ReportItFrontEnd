import React from "react";
import defaultpp from "../../assets/defaultpp.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const ProfileCard = (props) => {
  const { id, profileUsername, title, civicWins, serviceArea, profilePic } =
    props.userPro;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div style={{ marginTop: "4em" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Item>
                <Stack direction="row" spacing={3}>
                  <Avatar
                    alt="avatar"
                    src={defaultpp}
                    sx={{ width: 110, height: 108 }}
                  />
                </Stack>

                <h2
                  style={{
                    marginTop: "-4em",
                    marginLeft: "2em",
                  }}
                >
                  {profileUsername}
                </h2>

                <Item>
                  <h1 style={{ color: "#303030" }}>Rank: {title}</h1>
                  <h1 style={{ color: "#303030" }}>Civic Wins: {civicWins}</h1>
                </Item>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <h1 style={{ color: "#303030" }}>
                  Service Area: {serviceArea.id}
                </h1>
                <h1 style={{ color: "#303030" }}>
                  Service Area: {serviceArea.name}
                </h1>
                <h1 style={{ color: "#303030" }}>
                  Service Area: {serviceArea.state}
                </h1>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};
export default ProfileCard;
