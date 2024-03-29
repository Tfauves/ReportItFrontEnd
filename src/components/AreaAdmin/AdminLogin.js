import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import AdminLoginForm from "./AdminLoginForm";
import { apiHost } from "../../config";

const AdminLogin = () => {
  const [query, setQuery] = useState({
    username: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const [auth, setAuth, saveAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post(`${apiHost}/api/auth/areaAdminLog`, query);
      const profileRes = await axios.get(`${apiHost}/api/areaAdmin/self`, {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
      console.log(profileRes.data);
      setAuth({ token: res.data.token, profile: profileRes.data });
      setSubmitting(false);
      navigate(`/admindash`);
      saveAuth(res.data);
    } catch (err) {
      console.error(err.response.data.message);
      alert(err.response.data.error);
      setSubmitting(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1c1c1b",
      }}
    >
      <h1
        style={{
          marginTop: "3em",
          marginBottom: "2em",
          color: "#f1f1f1",
          fontFamily: "Lato, sans-serif",
          letterSpacing: "3px",
        }}
      >
        Admin Login
      </h1>
      <AdminLoginForm
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </div>
  );
};
export default AdminLogin;
