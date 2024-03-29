import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavButton = (props) => {
  const [hover, setHover] = useState(false);

  const style = {
    background: "transparent",
    textDecoration: "none",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1.35em",
    color: "#f1f1f1",
    fontWeight: 600,
    textShadow: "1px 1px black",
    textAlign: "center",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    transition: "all ease-in-out .5s",
    opacity: hover ? "40%" : "100%",
    margin: "0px 10px 0px 60px",
  };

  return (
    <NavLink
      to={props.to}
      style={{ ...style, ...props.style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {props.label}
    </NavLink>
  );
};

export default NavButton;
