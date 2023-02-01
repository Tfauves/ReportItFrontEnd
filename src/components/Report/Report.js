import React from "react";

const Report = (props) => {
  const { issueType, location, description } = props.report;

  return (
    <div>
      <h1 style={{ color: "#f1f1f1" }}>Type: {issueType}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Location: {location}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Issue Description: {description}</h1>
    </div>
  );
};
export default Report;
