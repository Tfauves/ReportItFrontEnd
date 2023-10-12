import React, { useState, useContext, Fragment } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  background-color: #1a001a;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  flex-direction: row;
  height: 60px;
`;

const NavBar = (props) => {
  const [auth] = useContext(AuthContext);
  const currentPath = window.location.pathname;

  return (
    <StyledNav>
      <div style={{ marginTop: "15px" }}>
        <NavButton style={{}} to="/" label="Report It" />
      </div>
      <div>
        {auth.token ? (
          <div style={{ marginTop: "15px" }}>
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
