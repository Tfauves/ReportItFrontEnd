import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import CircularProgress from "@mui/material/CircularProgress";
import Report from "../Report/Report";
import CustomBtn from "../common/CustomBtn";
import { useNavigate } from "react-router-dom";
import NewProfileCard from "./NewProfileCard";
import styled from "styled-components";

const DashboardContainer = styled.div`
  margin-top: 3em;
  background: linear-gradient(to bottom, #303030, #1a001a);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  border-radius: 3px;
  width: 90%;
`;

const StyledSubHeader = styled.h3`
  color: #303030;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 50px;
  line-height: 94px;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px;
`;

const LeftColumn = styled.div`
  margin-top: 3em;
  background-color: #fff;
  flex: 1;
  margin-right: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 800px;
`;

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const RightColumn = styled.div`
  margin-top: 3em;
  flex: 1;
  margin-left: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: auto;
`;

const ReportCard = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProfileDash = (props) => {
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
      <DashboardContainer>
        {loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <ContentContainer>
            <LeftColumn>
              <NewProfileCard userPro={owner} />
              <p style={{ marginLeft: "15px" }}>see an issue?</p>
              <CustomBtn onClick={onClick} text="Report It" />
            </LeftColumn>
            <RightColumn>
              <StyledSubHeader>Reports Submitted</StyledSubHeader>
              <ReportsGrid>{displayReports()}</ReportsGrid>
            </RightColumn>
          </ContentContainer>
        )}
      </DashboardContainer>
    );
  };

  const displayReports = () => {
    return reports.map((report) => (
      <ReportCard key={report.id}>
        <Report report={report} />
      </ReportCard>
    ));
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

export default ProfileDash;
