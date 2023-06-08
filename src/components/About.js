import React from "react";
import sideImg from "../assets/reportItAbout.jpg";
import Splash from "./common/Splash";
import "../../src/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="text-column">
        <h1 className="about-heading">About Us</h1>
        <div className="about-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum!
          </p>
          <p>
            Officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
            nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
            error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
          </p>
          <p>
            Nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
            error repudiandae fuga? Ipsa laudantium molestias eos sapiente
            officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum.
            Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates
            a cumque velit
          </p>
          <p>
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
            laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime
            adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
            Officiis iure rerum voluptates a cumque velit
          </p>
          <p>
            Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
            laudantium molestias eos sapiente officiis modi at sunt excepturi
            expedita sint? Sed quibusdam recusandae alias error harum maxime
            adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
            Officiis iure rerum voluptates a cumque velit
          </p>
        </div>
      </div>
      <div className="image-column">
        <Splash className="image-splash" image={sideImg} />
      </div>
    </div>
  );
};

export default About;
