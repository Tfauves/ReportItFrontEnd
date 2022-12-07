import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AdminView = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/adminlogin");
  };
  return (
    <div>
      <h1>this admin view</h1>
      <Button
        sx={{ "&:hover": { color: "#303030" } }}
        style={{ backgroundColor: "gray" }}
        onClick={handleNavigate}
        variant="contained"
        size="large"
      >
        login
      </Button>
    </div>
  );
};
export default AdminView;
