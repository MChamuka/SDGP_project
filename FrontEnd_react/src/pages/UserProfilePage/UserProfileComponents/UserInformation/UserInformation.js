import React, { useState, useRef } from "react";
import "./userInformation.css";
import { Link } from "react-router-dom";

export default function UserInformation() {
  const [profileImage, setProfileImage] = useState("/Images/1.jpg");
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setProfileImage(imageURL);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mainBody">
      <div className="userProfileContainer">
        <div className="userDetailsContainer">
          <div className="imageContainer">
            <img src={profileImage} alt="" className="profileImage" />
            <button className="addPicButton" onClick={handleButtonClick}>
              Add New Pic
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
          <div className="userinfo">User' username</div>
          <div className="userinfo">Users' email</div>
        </div>
        <div className="featureContainer">
          <div className="userProfilefeatures">
            <button className="feature">Recommended Movies</button>
            <button className="feature">Data Gathering Form</button>
            <button className="feature">Journal</button>
            <button className="feature">Achievements</button>
          </div>
        </div>
      </div>
    </div>
  );
}
