import React, { useContext } from "react";
import splash from "../../assets/splash.jpg";
import Container from "../common/Container";
import Splash from "../common/Splash";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
  const [auth] = useContext(AuthContext);
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/register");
  };

  const displayHome = () => {
    if (!auth.token) {
      return (
        <div style={{ backgroundColor: "#2C2D30" }}>
          <Container>
            <Splash
              image={splash}
              style={{ height: "20vh", width: "100%", color: "#303030" }}
            >
              <h1
                style={{
                  textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
                  textAlign: "center",
                  fontFamily: "Roboto Mono, monospace",
                  fontSize: "3em",
                  letterSpacing: "13px",
                }}
              >
                Don't ignore the problem
              </h1>
              <h2
                style={{
                  textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
                  textAlign: "center",
                  fontFamily: "Roboto Mono, monospace",
                  fontSize: "3em",
                  letterSpacing: "13px",
                }}
              >
                Report It!!!
              </h2>

              <div
                style={{
                  marginTop: "5em",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  style={{ width: "35%", height: "4vh" }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={onClick}
                >
                  Signup
                </Button>
              </div>
            </Splash>
          </Container>
        </div>
      );
    }
    return (
      <Container>
        <Splash
          image={splash}
          style={{ height: "25vh", width: "100%", color: "#303030" }}
        >
          <h1
            style={{
              textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
              marginTop: "3em",
              textAlign: "center",
              fontSize: "3em",
              letterSpacing: "13px",
            }}
          >
            Don't ignore the problem
          </h1>
          <h2
            style={{
              textShadow: "0 0 6px #f1f1f1, 0 0 5px #f1f1f1",
              textAlign: "center",
              fontSize: "3em",
              letterSpacing: "13px",
            }}
          >
            Report It!!!
          </h2>
        </Splash>
      </Container>
    );
  };

  return displayHome();
};

export default Home;
