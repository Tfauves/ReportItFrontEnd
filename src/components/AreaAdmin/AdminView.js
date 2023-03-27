import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminView = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/adminlogin");
  };

  const handleNavigateInfo = () => {
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
            <Button
              sx={{ "&:hover": { color: "#303030" } }}
              style={{
                backgroundColor: "gray",
                letterSpacing: "2px",
              }}
              onClick={handleNavigate}
              variant="contained"
              size="large"
            >
              click here
            </Button>
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
            <Button
              sx={{ "&:hover": { color: "#303030" } }}
              style={{
                backgroundColor: "gray",
                letterSpacing: "2px",
              }}
              onClick={handleNavigateInfo}
              variant="contained"
              size="large"
            >
              learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminView;
