import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./Providers/AuthProvider";
import { apiHost } from "../config";

const ReportProcess = (id) => {
  const [pending, setPending] = useState({});
  const [loading, setLoading] = useState(true);
  const [auth] = useContext(AuthContext);

  useEffect(() => {
    const fetchStatus = async () => {
      const response = await axios.put(`${apiHost}/api/report/pending/${id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      console.log(response.data);

      setPending();
      setLoading(false);
    };
    setLoading(true);
    if (!auth.token) {
      return;
    }
    fetchStatus();
  }, [auth]);
};
export default ReportProcess;
