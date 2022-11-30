import React from "react";

const ProfileCard = (props) => {
  const { id, fname, lname, zipcode } = props.userPro;

  return (
    <div>
      <h1 style={{ color: "#f1f1f1" }}>{id}</h1>;
      <h1 style={{ color: "#f1f1f1" }}>{fname}</h1>;
      <h1 style={{ color: "#f1f1f1" }}>{lname}</h1>;
      <h1 style={{ color: "#f1f1f1" }}>{zipcode}</h1>;
    </div>
  );
};
export default ProfileCard;
