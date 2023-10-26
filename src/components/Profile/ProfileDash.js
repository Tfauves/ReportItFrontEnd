import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import CircularProgress from "@mui/material/CircularProgress";
import Report from "../Report/Report";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NewProfileCard from "./NewProfileCard";
import styled from "styled-components";

const StyledHeader = styled.h1`
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 75px;
  line-height: 94px;
`;

const Profile = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.id,
  });

  const [reports, setReports] = useState([]);
  const [userServiceArea, setuserServiceArea] = useState();
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const _fetchOwner = async () => {
      const response = await axios.get(`${apiHost}/api/profile/self`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(response.data);
      setOwner(response.data);
      setReports(response.data.report);
      setuserServiceArea(response.data.serviceArea.name);
      setLoading(false);
    };
    setLoading(true);
    if (!auth.token) {
      return;
    }
    _fetchOwner();
  }, [auth]);

  const onClick = () => {
    navigate(`/sendReport/${owner.serviceArea.id}`);
  };

  const displayProfile = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: 1, marginRight: "1em" }}>
          <NewProfileCard userPro={owner} />
          <div style={{ marginTop: "2em" }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ "&:hover": { backgroundColor: "#a232a8" } }}
              style={{ width: "100%" }}
              onClick={onClick}
              size="large"
            >
              Report It
            </Button>
          </div>
        </div>
        <div style={{ flex: 1, marginLeft: "1em" }}>
          Service Area Name
          <StyledHeader>{userServiceArea}</StyledHeader>
          {displayServiceArea()}
        </div>
        <div style={{ flex: 1 }}>
          <h1
            style={{
              textDecoration: "underline",
              color: "#f1f1f1",
              marginTop: "2em",
            }}
          >
            Your Reports
          </h1>
          {displayReports()}
        </div>
      </div>
    );
  };

  const displayServiceArea = () => {
    // Replace this with the content of your Service Area section
  };

  const displayReports = () => {
    return reports.map((report) => <Report report={report} key={report.id} />);
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1c1b",
        display: "flex",
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
