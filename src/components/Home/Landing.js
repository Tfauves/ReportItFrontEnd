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
      <div style={styles.container}>
        <Container>
          <h1 style={styles.title}>Want To Be A Civic Crusader?</h1>
          <h4 style={styles.subtitle}>Report Issues in Your Area</h4>
          <Splash image={landingImg} style={styles.splash} />

          <Button
            style={styles.button}
            size="large"
            variant="contained"
            color="secondary"
            onClick={onClick}
          >
            Sign up
          </Button>
        </Container>
      </div>
    );
  };

  return displayLanding();
};

const styles = {
  container: {
    backgroundColor: "#1c1c1b",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2em",
    marginBottom: "1.5em",
    color: "#f1f1f1",
    letterSpacing: "2px",
    fontSize: "3em",
    fontFamily: "Lato, sans-serif",
  },
  subtitle: {
    color: "#a2a2a6",
    marginTop: "-1em",
    marginBottom: "-.5em",
    fontFamily: "Lato, sans-serif",
    fontWeight: "400",
    letterSpacing: "2px",
  },
  splash: {
    marginTop: "2em",
    height: "55vh",
  },
  button: {
    marginTop: "2em",
    width: "18%",
    height: "5vh",
    letterSpacing: "2px",
  },
};

// Media Queries
const mediaQueries = {
  laptop: "@media (max-width: 1024px)",
  tablet: "@media (max-width: 768px)",
  mobile: "@media (max-width: 480px)",
};

// Responsive Styles
styles.title[mediaQueries.tablet] = {
  fontSize: "2.5em",
};

styles.subtitle[mediaQueries.tablet] = {
  marginTop: "-0.5em",
  marginBottom: "-0.5em",
};

styles.splash[mediaQueries.tablet] = {
  marginTop: "1.5em",
  height: "40vh",
};

styles.button[mediaQueries.tablet] = {
  width: "30%",
};

styles.title[mediaQueries.mobile] = {
  fontSize: "1.8em",
  marginBottom: "0.5em",
};

styles.subtitle[mediaQueries.mobile] = {
  marginTop: "-0.2em",
  marginBottom: "-0.2em",
};

styles.splash[mediaQueries.mobile] = {
  marginTop: "1em",
  height: "30vh",
};

styles.button[mediaQueries.mobile] = {
  width: "50%",
};

export default Landing;
