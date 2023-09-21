import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Hero from "./Hero";

const Landing = () => {
  const [auth] = useContext(AuthContext);

  return <Hero />;
};
export default Landing;
