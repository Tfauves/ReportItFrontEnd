import React, { useState, useContext } from "react";
import NewUserForm from "./NewUserForm";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import styled from "styled-components";

const StyledSecondHeader = styled.h2`
  color: #fff;
  letter-spacing: -0.03em;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  font-size: 60px;
  line-height: 94px;
`;

const StyledRegSection = styled.section`
  min-height: 70vh;
  // padding: 20vh 60px;
  background-color: #1c1c1b;
`;

const RegContainer = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
`;

const RegFlexboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    // Styles for laptops
  }

  @media (max-width: 992px) {
    // Styles for tablets
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 768px) {
    // Styles for mobile devices
    flex-direction: column;
    height: auto;
  }
`;

const RegFlexChildBlock = styled.div`
  min-width: 400px;
`;

const Register = () => {
  const host = process.env.REACT_APP_API_HOST || "http://localhost:8080";
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    username: "",
    password: "",
    confirm: "",
    fname: "",
    lname: "",
    zip: "",
    profileUsername: "",
  });

  const [auth, setAuth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (e) => {
    if (query.password !== query.confirm) {
      alert("Passwords do not match");
      return;
    }
    const data = query;
    data.name = query.fname + " " + query.lname;
    data.cohort = parseInt(query.cohort);
    try {
      const res = await axios.post(`${host}/api/auth/signup`, data);
      // alert(res.data.message);
      login(data);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const login = async (data) => {
    try {
      const res = await axios.post(`${host}/api/auth/signin`, data);
      // alert(res.data.token);
      createNewUser(data, res.data.token);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const createNewUser = async (data, token) => {
    data.email = data.username;
    try {
      const res = await axios.post(`${host}/api/profile`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      setAuth({ token, profile: res.data });
      alert(res.data.id);
      navigate(`/profile/${res.data.id}`);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <StyledRegSection>
      <RegContainer>
        <RegFlexboxContainer>
          <RegFlexChildBlock>
            <StyledSecondHeader>
              Connect with your local government.
            </StyledSecondHeader>
          </RegFlexChildBlock>
          <RegFlexChildBlock>
            <NewUserForm
              query={query}
              updateForm={updateForm}
              onSubmit={onSubmit}
            />
          </RegFlexChildBlock>
          <RegFlexChildBlock>
            <p style={{ color: "#f1f1f1" }}>
              already have an account?{" "}
              <Link href="/login" underline="always">
                login
              </Link>{" "}
            </p>
            <p style={{ color: "#f1f1f1" }}>
              Admin?{" "}
              <Link href="/admin" underline="always">
                Request a demo
              </Link>
            </p>
          </RegFlexChildBlock>
        </RegFlexboxContainer>
      </RegContainer>
    </StyledRegSection>
  );
};

export default Register;
