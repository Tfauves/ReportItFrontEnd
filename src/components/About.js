import React from "react";
import sideImg from "../assets/reportItAbout.jpg";
import Splash from "./common/Splash";

const About = () => {
  return (
    <div>
      <div
        class="row"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          class="column"
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: "1",
            backgroundColor: "#d5d3db",
            height: "100vh",
          }}
        >
          <h1 style={{ textDecoration: "underline", color: "#303030" }}>
            About Us
          </h1>
          <p style={{ padding: "1em", color: "#303030" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
          <div style={{}}>
            <p style={{ padding: "1em" }}>
              officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
              nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo
              neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet
              laborum.
            </p>
          </div>
          <div style={{}}>
            <p style={{ padding: "1em" }}>
              nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo
              neque error repudiandae fuga? Ipsa laudantium molestias eos
              sapiente officiis modi at sunt excepturi expedita sint? Sed
              quibusdam recusandae alias error harum maxime adipisci amet
              laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
              voluptates a cumque velit
            </p>
          </div>
          <div style={{}}>
            <p style={{ padding: "1em" }}>
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit
            </p>
          </div>
        </div>

        <div
          class="column"
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            height: "100vh",
          }}
        >
          <Splash style={{ height: "100vh" }} image={sideImg} />
        </div>
      </div>
    </div>
  );
};

export default About;
