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
              letterSpacing: "8px",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Want To Be A Civic Crusader?
          </h1>
          <h4
            style={{
              color: "#a2a2a6",
              letterSpacing: "3px",
              marginTop: "-3.5em",
              fontFamily: "Lato, sans-serif",
            }}
          >
            report issues in your area
          </h4>
          <Splash
            image={landingImg}
            style={{
              marginTop: "2em",
              height: "45vh",
            }}
          />

          <Button
            style={{
              marginTop: "3em",
              width: "20%",
              height: "6vh",
              letterSpacing: "2px",
            }}
            size="large"
            variant="contained"
            color="secondary"
            onClick={onClick}
          >
            Signup
          </Button>
        </Container>
      </div>
    );
  };

  return displayLanding();
};

export default Landing;
