import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import EditProfileForm from "./EditProfileForm";
import { apiHost } from "../../config";

const EditProfile = () => {
  let navigate = useNavigate();

  const [query, setQuery] = useState({
    // avatar: "",
    profileUsername: "",
    avatar: "",
  });

  const [auth] = useContext(AuthContext);

  const updateForm = (field, value) => {
    setQuery({
      ...query,
      [field]: value,
    });
  };

  const onSubmit = async (token) => {
    const data = query;
    console.log(data);
    // data.avatar = { url: data.avatar };
    try {
      const res = await axios.put(`${apiHost}/api/profile`, data, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      navigate("/userProfile");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <EditProfileForm
      query={query}
      updateForm={updateForm}
      onSubmit={onSubmit}
    />
  );
};
export default EditProfile;
