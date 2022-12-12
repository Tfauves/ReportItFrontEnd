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
    <div style={{}}>
      <div
        class="row"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <div
          class="column"
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: "1",
          }}
        >
          <div
            class="left-column"
            style={{
              backgroundColor: "#d5d3db",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{}}>
              <h1>log here</h1>
            </div>
            enter admin portal
            <div>
              <Button
                sx={{ "&:hover": { color: "#303030" } }}
                style={{ backgroundColor: "gray", marginTop: ".5em" }}
                onClick={handleNavigate}
                variant="contained"
                size="large"
              >
                enter
              </Button>
            </div>
          </div>
        </div>
        <div
          class="column"
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "100%",
            flex: "1",
          }}
        >
          <div
            class="right-column"
            style={{ backgroundColor: "#1c1c1b", height: "100vh" }}
          >
            <div style={{}}>
              <h1 style={{ color: "white" }}>Image or text here</h1>
            </div>
            Some Text in Column Two
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
    </div>
    // <div style={{ flexDirection: "column", backgroundColor: "blue" }}>
    //   <h1>this admin view</h1>

    // </div>
  );
};
export default AdminView;
