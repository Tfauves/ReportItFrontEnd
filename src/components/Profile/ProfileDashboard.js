import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { apiHost } from "../../config";
import ProfileCard from "./ProfileCard";
import Report from "../Report/Report";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Hero = styled.section`
  min-height: 70vh;
  padding: 15vh 60px;
  background-image: url(${heroImg});
  background-size: cover;
  background-attachment: fixed;
`;

const StyledHeader = styled.h1`
  color: #fff;
  letter-spacing: -0.02em;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 75px;
  line-height: 94px;
`;

const StyledSubHeader = styled.p`
  color: #f5f5f5;
  margin-bottom: 60px;
  margin-top: 2px;
  font-family: "Poppins", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 25px;
`;

const Container = styled.div`
  max-width: 1160px;
  margin-left: auto;
  margin-right: auto;
`;

const FlexboxContainer = styled.div`
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

const FlexChildBlock = styled.div`
  min-width: 400px;
`;

const ProfileDashboard = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const [owner, setOwner] = useState({
    id: params.id,
  });
  const [reports, setReports] = useState({});
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

  const displayReports = () => {
    return reports.map((report) => <Report report={report} key={report.id} />);
  };
};

export default ProfileDashboard;
