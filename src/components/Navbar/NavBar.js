import React, { useState, useContext, Fragment } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  background-color: #1a001a;
  position: fixed;
  width: 100%;
  zindex: 9999;
  top: 0;
  left: 0;
  flexdirection: row;
  height: 60px;
`;

const NavBar = (props) => {
  const [auth] = useContext(AuthContext);
  const currentPath = window.location.pathname;

  return (
    <StyledNav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0em 1.2em",
        }}
      >
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
            {/* <NavButton
              style={{ marginRight: "60px" }}
              to="/about"
              label="about"
            /> */}
          </div>
        )}
      </div>
    </StyledNav>
  );
};

export default NavBar;
