import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/NavBar";
import Login from "../Auth/Login";
import Logout from "../Auth/Logout";
import Register from "../Auth/Register";
import Profile from "../Profile/Profile";
import Landing from "../Home/Landing";
import About from "../About";
import AdminView from "../AreaAdmin/AdminView";
import ProfileAddress from "../Profile/ProfileAddress";
import AdminLogin from "../AreaAdmin/AdminLogin";
import AdminDash from "../AreaAdmin/AdminDash";
import RequestInfo from "../RequestInfo";
import NewReport from "../Report/NewReport";
import ServiceAreas from "../ServiceArea/ServiceAreas";
import NavBar from "../Navbar/NavBar";
import ProfileDash from "../Profile/ProfileDash";
import EditProfile from "../EditProfile/EditProfile";

const AppRouter = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBar />
      <div style={{ marginTop: "50px", width: "100%" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profileAd" element={<ProfileAddress />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/info" element={<RequestInfo />} />
          <Route path="/sendReport/:areaId" element={<NewReport />} />
          <Route path="/area" element={<ServiceAreas />} />
          <Route path="/userDash/:id" element={<ProfileDash />} />
          <Route path="/userProfile" element={<ProfileDash />} />
          <Route path="updateProfile" element={<EditProfile />} />
        </Routes>
      </div>
    </div>
  );
};

export default AppRouter;
