import React, { useEffect, useState } from "react";
import axios from "axios";

const Address = () => {
  const [data, setaddress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getAddress = async () => {
      try {
        const res = await axios.get(
          "https://service.zipapi.us/zipcode/02861/?X-API-KEY=js-90cebf473f1dd65370fc7cf03e9184b5"
        );
        console.log(res.data);
        setLoading(false);
        setaddress(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    _getAddress();
  }, []);

  const displayAddress = () => {
    return (
      <div>
        <h2>{data.city}</h2>
        <p>{data.state}</p>
        <p>{data.state_fullname}</p>
      </div>
    );
  };

  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      {loading ? <p>Loading...</p> : displayAddress()}
    </div>
  );
};

export default Address;
