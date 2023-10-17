import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Hero from "./Hero";
import MiddleSection from "../MiddleSection/MiddleSection";
import Footer from "../Footer";

const Landing = () => {
  const [auth] = useContext(AuthContext);

  return (
    <div>
      <Hero />
      <MiddleSection />
      <Footer />
    </div>
  );
};
export default Landing;
