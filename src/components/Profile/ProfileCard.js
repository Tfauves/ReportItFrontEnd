import React from "react";

const ProfileCard = (props) => {
  const { id, profileUsername, title, reportCount, serviceArea, profilePic } =
    props.userPro;

  return (
    <div>
      <h1 style={{ color: "#f1f1f1" }}>{id}</h1>
      <h1 style={{ color: "#f1f1f1" }}>{profileUsername}</h1>
      <h1 style={{ color: "#f1f1f1" }}>{title}</h1>
      <h1 style={{ color: "#f1f1f1" }}>{serviceArea}</h1>
      <h1 style={{ color: "#f1f1f1" }}>{reportCount}</h1>
      <img
        style={{ borderRadius: "100px" }}
        src={profilePic.url}
        width={200}
        height={250}
        alt="placeholder img"
      />
    </div>
  );
};
export default ProfileCard;
