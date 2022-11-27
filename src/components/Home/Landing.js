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
      <div style={{ backgroundColor: "#2C2D30" }}>
        <Container>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3em",
            }}
          >
            {" "}
            some cool landing slogan
          </h1>
          <Splash
            image={landingImg}
            style={{ marginTop: "3em", height: "25vh" }}
          />

          <Button
            style={{ marginTop: "3em", width: "35%", height: "4vh" }}
            size="large"
            variant="contained"
            color="primary"
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
