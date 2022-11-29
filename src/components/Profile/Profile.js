import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import CircularProgress from "@mui/material/CircularProgress";

const Profile = (props) => {
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.id,
  });

  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    console.log(owner.id);
    const _fetchOwner = async () => {
      const response = await axios.get(`${apiHost}/api/profile/${owner.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(response.data);
      setOwner(response.data);
      setLoading(false);
    };
    setLoading(true);
    if (!auth.token) {
      return;
    }
    _fetchOwner();
  }, [auth]);

  const displayProfile = () => {
    return (
      <div>
        <h1 style={{ color: "#f1f1f1" }}>{owner.id}</h1>
        <h1 style={{ color: "#f1f1f1" }}>{owner.fname}</h1>
        <h1 style={{ color: "#f1f1f1" }}>{owner.lname}</h1>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1c1b",
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      {loading ? <CircularProgress color="secondary" /> : displayProfile()}
    </div>
  );
};

export default Profile;
