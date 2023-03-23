import React from "react";

const AreaAdminProfileCard = (props) => {
  const { municipalityname, state, serviceArea } = props.adminItems;
  // need to map service area reports
  return (
    <div>
      <h1 style={{ color: "#f1f1f1" }}>Municipality: {municipalityname}</h1>
      <h1 style={{ color: "#f1f1f1" }}>State: {state}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Your Area: {serviceArea.name}</h1>
      <h1 style={{ color: "#f1f1f1" }}>
        Open Reports: {serviceArea.openReports}
      </h1>
    </div>
  );
};

export default AreaAdminProfileCard;
