import React, { useState, useRef, useEffect } from "react";
import "./userInformation.css";
import axios from "axios";
//import 'bootstrap/dist/css/bootstrap.min.css'

export default function UserInformation() {
  const [profileImage, setProfileImage] = useState("/Images/1.jpg");
  const fileInputRef = useRef(null);

  const [users, setUsers] = useState([]);

  const openStreamlitApp = () => {
    window.open("http://localhost:8501"); //streamlt URL
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/getUsers")
      .then((users) => {
        setUsers(users.data[0]);

        console.log(users.data[0].firstName);
      })
      .catch((err) => console.log(err));
  }, []);

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
          <div className="userinfo">{users.firstName}</div>
          <div className="userinfo">{users.email}</div>
        </div>
        <div className="featureContainer">
          <div className="userProfilefeatures">
            <button className="feature" onClick={openStreamlitApp}>
              Recommended Movies
            </button>
            <button className="feature">Data Gathering Form</button>
            <button className="feature">Journal</button>
            <button className="feature">Achievements</button>
          </div>
        </div>
      </div>
    </div>
  );
}
