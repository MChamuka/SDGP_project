import React, { useState, useRef,useEffect } from "react";
import "./userInformation.css";

//import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import { Link } from "react-router-dom";

export default function UserInformation() {

  const [users,setUsers] = useState([])
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')

  const [profileImage, setProfileImage] = useState("/Images/1.jpg");
  const fileInputRef = useRef(null);

  const getInfo = async () => {
    const userInfo = await fetch('http://localhost:4000/userData');
    const userInfoData = await userInfo.json()
    console.log(userInfoData.firstName);
    setFirstName(userInfoData.firstName)
    setLastName(userInfoData.lastName)
    setEmail(userInfoData.email)
  }


  const openStreamlitApp = () => {
    window.open('http://localhost:8501'); //streamlt URL
  };

  useEffect(()=>{
    getInfo()
    // axios.get('http://localhost:4000/getUser')
    // .then(users=> {setUsers(users.data[0]) 
    //   console.log(users.data[0].firstName)
    // })
    // .catch(err=>console.log(err))
  },[])

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
          <div className="userinfo">{firstName} {lastName}</div>
          <div className="userinfo">{email}</div>
        </div>
        <div className="featureContainer">
          <div className="userProfilefeatures">
            <button className="feature" onClick={openStreamlitApp}>Recommended Movies</button>
            <button className="feature">Data Gathering Form</button>
            <Link to="/Journal" className="feature">Journal</Link>
            <button className="feature">Achievements</button>
          </div>
        </div>
      </div>
    </div>
  );
}
