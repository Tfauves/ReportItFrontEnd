import React, { useState, useContext, Fragment } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = (props) => {
  const [auth] = useContext(AuthContext);
  const currentPath = window.location.pathname;

  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#3A1447",
        position: "fixed",
        width: "100%",
        zIndex: 9999,
        top: 0,
        left: 0,
        flexDirection: "row",
        height: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0em 1.2em",
        }}
      >
        {/* <h2 style={{ color: "#f1f1f1" }}>Report It</h2> */}
        <NavButton style={{}} to="/" label="Report It" />
      </div>
      <div
        style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: "center",
          padding: "0em 1.2em",
          justifyContent: "flex-end",
        }}
      >
        {auth.token ? (
          <div>
            {currentPath === "/adminlogin" ? (
              <NavButton style={{}} to="/admindash" label="dashboard" />
            ) : (
              <NavButton style={{}} to="/profile" label="dashboard" />
            )}

            <NavButton style={{}} to="/logout" label="logout" />
          </div>
        ) : (
          <div>
            <NavButton style={{}} to="/about" label="about" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
