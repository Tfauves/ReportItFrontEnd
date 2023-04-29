import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import CircularProgress from "@mui/material/CircularProgress";
import ProfileCard from "./ProfileCard";
import Report from "../Report/Report";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.id,
  });

  const [reports, setReports] = useState({});
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    console.log(owner.id);
    const _fetchOwner = async () => {
      const response = await axios.get(`${apiHost}/api/profile/self`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(response.data);
      setOwner(response.data);
      setReports(response.data.report);
      setLoading(false);
    };
    setLoading(true);
    if (!auth.token) {
      return;
    }
    _fetchOwner();
  }, [auth]);

  const onClick = (props) => {
    navigate(`/sendReport/${owner.serviceArea.id}`);
  };

  const displayProfile = () => {
    return (
      <div>
        <ProfileCard userPro={owner} />
        <h1 style={{ textDecoration: "underline", color: "#f1f1f1" }}>
          Your reports
        </h1>
        {displayReports()}

        <Button
          sx={{ "&:hover": { color: "#303030" } }}
          style={{
            marginTop: "2em",
            margin: "1em",
          }}
          onClick={onClick}
          variant="contained"
          size="large"
        >
          ReportIt
        </Button>
      </div>
    );
  };

  const displayReports = () => {
    return reports.map((report) => <Report report={report} key={report.id} />);
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
