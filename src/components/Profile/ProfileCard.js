import React from "react";
import defaultpp from "../../assets/defaultpp.png";

const ProfileCard = (props) => {
  const { id, profileUsername, title, civicWins, serviceArea, profilePic } =
    props.userPro;

  return (
    <div>
      <img
        // style={{ borderRadius: "100px" }}
        src={defaultpp}
        width={200}
        height={210}
        alt="placeholder img"
      />
      
      <h1 style={{ color: "#f1f1f1" }}>Profile id: {id}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Username: {profileUsername}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Rank: {title}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Service Area: {serviceArea.id}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Service Area: {serviceArea.name}</h1>
      <h1 style={{ color: "#f1f1f1" }}>Service Area: {serviceArea.state}</h1>

      <h1 style={{ color: "#f1f1f1" }}>Civic Wins: {civicWins}</h1> 
     
    </div>
  );
};
export default ProfileCard;
