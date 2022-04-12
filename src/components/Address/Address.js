import React, { useEffect, useState } from "react";
import axios from "axios";
import cors from "cors";

const Address = () => {
  const [address, setAddress] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const _getAddress = async () => {
      try {
        const host = "http://localhost:8080";
        const res = await axios.get(`${host}/api/profile/address/02780`
        
        );
        console.log(res.data);
      
        setAddress(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
      }
    }
    setLoading(true);
    _getAddress();
  }, []);

  const displayAddress = () => {
    return (
      <div>
        <h2>{address.city}</h2>
        <p>{address.state}</p>
        <p>{address.state_fullname}</p>
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
