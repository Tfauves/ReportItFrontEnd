import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminView = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/adminlogin");
  };

  const handleNavigateAbout = () => {
    navigate("/about");
  };

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
          class="column"
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
          <p style={{ color: "#f1f1f1" }}>
            how can RepotIt work for your municipality
          </p>
          <div>
            <Button
              sx={{ "&:hover": { color: "#303030" } }}
              style={{
                backgroundColor: "gray",
              }}
              onClick={handleNavigateAbout}
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
