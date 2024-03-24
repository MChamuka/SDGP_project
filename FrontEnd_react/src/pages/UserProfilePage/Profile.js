import React from "react";
import "./profile.css";
import UserInformation from "./UserProfileComponents/UserInformation/UserInformation";
import Navbar from "../../../src/pages/navbar";


export default function Profile() {
  return (
    <div>
      <Navbar/>
      <div className="profileBox">
      
      <div className="UserProfileText">User-Profile Page</div>
      <UserInformation />
    </div>
    </div>
    
  );
}
