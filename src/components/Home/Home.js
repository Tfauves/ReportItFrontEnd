import React, { useContext } from "react";
import splash from "../../assets/splash.jpg";
import Splash from "../common/Splash";
import Container from "../common/Container";
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
        <Container>
          <Splash image={splash} style={{ color: "#303030" }}>
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
                marginTop: "3em",
                textAlign: "center",
                fontSize: "3em",
                letterSpacing: "13px",
              }}
            >
              Report It!!!
            </h2>
            <div className="App">
              <Button
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
      );
    }
    return (
      <Container>
        <Splash image={splash} style={{ color: "#303030" }}>
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
              marginTop: "3em",
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
