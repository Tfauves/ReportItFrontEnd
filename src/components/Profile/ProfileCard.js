import React from "react";

const ProfileCard = (props) => {
  const { id, profileUsername, title, zipcode, serviceArea } = props.userPro;

  return (
    <div>
      <h1 style={{ color: "#f1f1f1" }}>{id}</h1>;
      <h1 style={{ color: "#f1f1f1" }}>{profileUsername}</h1>;
      <h1 style={{ color: "#f1f1f1" }}>{title}</h1>;
      <h1 style={{ color: "#f1f1f1" }}>{serviceArea}</h1>;
    </div>
  );
};
export default ProfileCard;
