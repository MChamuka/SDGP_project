import React from "react";
import "./profile.css";
import UserInformation from "./UserProfileComponents/UserInformation/UserInformation";

export default function Profile() {
  return (
    <div className="profileBox">
      <div className="UserProfileText">User-Profile Page</div>
      <UserInformation />
    </div>
  );
}
