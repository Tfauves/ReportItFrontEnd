import React from "react";
import BorderCard from "./BorderCard";

const AddressInfo = (props) => {
  const { city, state, state_fullname } = props.AddressInfo;

  return (
    <BorderCard style={{ minWidth: "1000px" }}>
      <div style={{ flex: 3, flexDirection: "column", padding: "0 8px" }}>
        <h2>{city}</h2>
        <p>{state}</p>
        <p>{state_fullname}</p>
      </div>
    </BorderCard>
  );
};

export default AddressInfo;
