import React, { useContext } from "react";
import landingImg from "../../assets/cityLanding.jpg";
import Container from "../common/Container";
import Splash from "../common/Splash";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Landing = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/register");
  };

  const displayLanding = () => {
    return (
      <div style={{ backgroundColor: "#1c1c1b" }}>
        <Container>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2em",
              marginBottom: "3em",
              color: "#f1f1f1",
            }}
          >
            Be A Civic Crusader
          </h1>
          <h4 style={{ marginTop: "-3.5em", color: "#eee" }}>
            report issues in your area
          </h4>
          <Splash
            image={landingImg}
            style={{
              marginTop: "3em",
              height: "35vh",
            }}
          />

          <Button
            style={{
              marginTop: "5em",
              width: "35%",
              height: "4vh",
            }}
            size="large"
            variant="contained"
            color="secondary"
            onClick={onClick}
          >
            Signup
          </Button>
        </Container>
        <div
          style={{
            height: "10vh",
            backgroundColor: "gray",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2>footer</h2>
        </div>
      </div>
    );
  };

  return displayLanding();
};

export default Landing;
