import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import { apiHost } from "../../config";
import { CircularProgress } from "@mui/material";

const ProfileAddress = (props) => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);
  const [owner, setOwner] = useState({
    zip: params.zipcode,
  });

  useEffect(() => {
    console.log(owner.id);
    const _fetchAddress = async () => {
      const response = await axios.get(
        `${apiHost}/api/profile/address/${owner.zip}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      console.log(response.data);
      setOwner(response.data);
      setLoading(false);
    };
    setLoading(true);
    if (!auth.token) {
      return;
    }
    _fetchAddress();
  }, [auth]);

  const displayAddress = () => {
    return (
      <div>
        <h1>{owner.zip}</h1>
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
      {loading ? <CircularProgress color="secondary" /> : displayAddress()}
    </div>
  );
};
export default ProfileAddress;
