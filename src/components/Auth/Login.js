import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { apiHost } from "../../config";
import Greeting from "../common/Greeting";

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
    "Your Super Power Is Action",
  ];

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await axios.post(`${apiHost}/api/auth/signin`, query);
      const profileRes = await axios.get(`${apiHost}/api/profile/self`, {
        headers: {
          Authorization: `Bearer ${res.data.token}`,
        },
      });
      // console.log(profileRes.data);
      setAuth({ token: res.data.token, profile: profileRes.data });
      setSubmitting(false);
      navigate(`/profile/${profileRes.data.id}`);
      saveAuth(res.data);
    } catch (err) {
      // console.error(err.response.data.message);
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
      <Greeting greetings={greeting} />
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
