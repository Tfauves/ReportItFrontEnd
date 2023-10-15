import React, { useEffect, useState } from "react";
import { apiHost } from "../../config";
import axios from "axios";
import Select from "../common/Select";

const ServiceAreas = () => {
  const [serviceArea, setServiceArea] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAreas = async () => {
      const response = await axios.get(`${apiHost}/api/area/all`);

      console.log(response.data);
      setServiceArea(response.data);
      setLoading(false);
    };

    setLoading(true);
    getAreas();
  }, []);

  const displayAreas = () => {
    return (
      <Select style={{ padding: "15px", marginTop: "30px" }}>
        <option value="default">Check Our Service Areas</option>
        {serviceArea.map((area) => (
          <option key={area.id}>
            {area.zipcode} {area.state}
          </option>
        ))}
        ;
      </Select>
    );
  };

  return <div>{loading ? "Loading" : displayAreas()}</div>;
};

export default ServiceAreas;
