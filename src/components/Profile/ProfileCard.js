import React from "react";
import defaultpp from "../../assets/defaultpp.png";

const ProfileCard = (props) => {
  const { id, profileUsername, title, reportCount, serviceArea, profilePic } =
    props.userPro;

  return (
    <div>
      <img
        // style={{ borderRadius: "100px" }}
        src={defaultpp}
        width={200}
        height={250}
        alt="placeholder img"
      />
      
      <h1 style={{ color: "#f1f1f1" }}>Profile id: {id}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Username: {profileUsername}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Rank: {title}</h1>
      {/* <h1 style={{ color: "#f1f1f1" }}>Service Area: {serviceArea}</h1> */}
      {/* <h1 style={{ color: "#f1f1f1" }}>Closed Report Count: {reportCount}</h1> */}
    </div>
  );
};
export default ProfileCard;
