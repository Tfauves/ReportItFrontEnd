import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import CircularProgress from "@mui/material/CircularProgress";
import ProfileCard from "./ProfileCard";

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
        <ProfileCard userPro={owner} />
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
