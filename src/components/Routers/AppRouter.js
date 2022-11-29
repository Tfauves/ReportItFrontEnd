import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/NavBar";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";
import Register from "../Auth/Register";
import Profile from "../Profile/Profile";
import Landing from "../Home/Landing";
import About from "../About";

const AppRouter = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <div style={{ marginTop: "50px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
