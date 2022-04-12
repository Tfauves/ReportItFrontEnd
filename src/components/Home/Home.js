import React from "react";
import splash from "../../assets/splash.jpg";
import Splash from "../common/Splash";
import Container from "../common/Container";

const Home = () => {
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

export default Home;
