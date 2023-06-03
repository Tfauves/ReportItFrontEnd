import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import CircularProgress from "@mui/material/CircularProgress";
import AreaAdminProfileCard from "./AreaAdminProfileCard";
import AdminReport from "../Report/AdminReport";

const AdminDash = (props) => {
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.id,
  });

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const _fetchOwner = async () => {
      const response = await axios.get(`${apiHost}/api/areaAdmin/self`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(response.data);

      setOwner(response.data);
      setReports(response.data.serviceArea.reports);
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
        <AreaAdminProfileCard adminItems={owner} />
        {displayReports()}
      </div>
    );
  };

  const displayReports = () => {
    return reports.map((report) => (
      <div key={report.id}>
        <AdminReport report={report} />
      </div>
    ));
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
export default AdminDash;
