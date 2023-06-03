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
              marginBottom: "1.5em",
              color: "#f1f1f1",
              letterSpacing: "7px",
              fontSize: "3em",
              fontFamily: "Lato, sans-serif",
            }}
          >
            Want To Be A Civic Crusader?
          </h1>
          <h4
            style={{
              color: "#a2a2a6",
              letterSpacing: "3px",
              marginTop: "-3em",
              marginBottom: "-.5em",
              fontFamily: "Lato, sans-serif",
              fontWeight: "400",
              letterSpacing: "3px",
            }}
          >
            report issues in your area
          </h4>
          <Splash
            image={landingImg}
            style={{
              marginTop: "2em",
              height: "55vh",
            }}
          />

          <Button
            style={{
              marginTop: "2em",
              width: "18%",
              height: "5vh",
              letterSpacing: "3px",
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
