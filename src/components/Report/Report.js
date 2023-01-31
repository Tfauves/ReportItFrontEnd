import React from "react";

const Report = (props) => {
  const { profile, issueType, location, description, isActive } = props.report;

  return (
    <div>
      <h1>{issueType}</h1>
    </div>
  );
};
export default Report;
