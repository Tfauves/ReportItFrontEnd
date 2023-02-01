import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Profile from "../Profile/Profile";

const PublicUserDash = () => {
  const [auth] = useContext(AuthContext);

  const displayLanding = () => {
    return (
      <div>
        <h1>user dash</h1>
      </div>
    );
  };
};
export default PublicUserDash;
