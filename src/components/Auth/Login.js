import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  const [query, setQuery] = useState({
    username: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  // const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [auth, setAuth, saveAuth] = useContext(AuthContext);
  let greeting = [
    "Welcome Back",
    "Greetings Hero",
    "Go Ahead Login, Make A Difference",
  ];

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async () => {
    // submit query to backend to login.
    setSubmitting(true);
    try {
      const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
      const res = await axios.post(`${host}/api/auth/signin`, query);
      const profileRes = await axios.get(`${host}/api/profile/self`, {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
      console.log(profileRes.data);
      setAuth({ token: res.data.token, profile: profileRes.data });
      setSubmitting(false);
      navigate(`/profile/${profileRes.data.id}`);
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
      <h1 style={{ marginTop: "3em", marginBottom: "2em", color: "#f1f1f1" }}>
        {greeting[0]}
      </h1>
      <LoginForm
        query={query}
        updateForm={updateForm}
        onSubmit={onSubmit}
        submitting={submitting}
      />
    </div>
  );
};

export default Login;
