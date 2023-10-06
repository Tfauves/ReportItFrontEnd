import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomBtn from "../common/CustomBtn";

const AdminView = () => {
  const navigate = useNavigate();

  const navigateAdminLogin = () => {
    navigate("/adminlogin");
  };

  const navigateDemo = () => {
    navigate("/info");
  };

  return (
    <div>
      <div
        className="row"
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
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d5d3db",
            height: "100vh",
          }}
        >
          <h1 style={{ color: "#303030" }}>Image or text here</h1>
          <p style={{ color: "#303030" }}>enter admin portal</p>
          <div>
            <CustomBtn onClick={navigateAdminLogin} text="admin login" />
          </div>
        </div>

        <div
          className="column"
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: "1",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#1c1c1b",
            height: "100vh",
          }}
        >
          <h1 style={{ color: "#f1f1f1" }}>Image or text here</h1>
          <p style={{ color: "#f1f1f1" }}>Request a demo</p>
          <div>
            <CustomBtn onClick={navigateDemo} text="get a demo" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminView;
